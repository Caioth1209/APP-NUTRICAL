import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Text } from 'react-native';
import Header from "../../components/home/header"
import SearchInput from "../../components/home/searchInput"
import FoodList from "../../components/home/foodList"
import api from "../../services/api"
import styles from './styles';


export default function App() {

    const [foodList, setFoodList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);

    useEffect(()=>{
        api.get("food/")
        .then((data)=>{
            return data.data;
        })
        .then((data)=>{
            setFoodList(data);
        })
        .catch((err)=>{
            console.log(err);
        })

        api.get(`category/`)
        .then((data)=>{
            return data.data;
        })
        .then((data)=>{
            setCategoryList(data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    const [enableSearch, setEnableSearch] = useState(false);

    return (    
        <View style={styles.container}>

            <StatusBar style="auto" />  

            <Header
            handleEnableSearch={setEnableSearch}
            enableSearch={enableSearch}
            />

            {enableSearch &&  <SearchInput/>}

            {foodList.length > 0 && 
                <FoodList
                foodList={foodList}
                categoryList={categoryList}
                maxToRenderPerBatch={5}
                />
            }

            {foodList.length == 0 && 
                <View style={styles.containerUnfoundFood}>
                    <Text style={styles.textUnfoundFood}>Nenhum alimento encontrado</Text>
                </View>
            }
        </View>
    );
}