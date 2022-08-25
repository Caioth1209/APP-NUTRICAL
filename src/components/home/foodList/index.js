import React, {useState, useEffect} from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import Food from "../food"
import api from "../../../services/api"
import styles from './styles'

export default function App(props) {
    
    const [foodList, setFoodList] = useState([]);
    const [categoryName, setCategoryName] = useState("");

    useEffect(()=>{
        api.get(`category/${props.categoryId}/food`)
        .then((data)=>{
            return data.data;
        })
        .then((data)=>{
            setFoodList(data);
            setCategoryName(props.categoryList[data[0].category_id-1].category);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [props.categoryId]);
    
    const renderItem = ({ item }) => {
        return (
            <Food
            description={item.description}
            categoryName={categoryName}
            />
        )
    }

    return (
        <View style={styles.container}>

        
            {
    
            foodList.length > 0 
            ?  
                <FlatList
                style={styles.listaFood}
                data={foodList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                /> 
            :
                <View style={styles.containerUnfoundFood}>
                    <Text style={styles.textUnfoundFood}>Nenhum alimento encontrado.</Text>
                    <Text style={styles.textUnfoundFood}>Escolha uma categoria ou um alimento correto da categoria!</Text>
                </View>
            }
        </View>
    )
}