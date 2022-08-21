import React, {useState} from 'react';
import { Text, View, FlatList } from 'react-native';
import Food from "../food"
import styles from './styles'

export default function App(props) {

    const [category, setCategory] = useState("");

    const renderItem = ({ item }) => {

        setCategory(props.categoryList[item.category_id-1].category)
        
        return (
            <Food
            description={item.description}
            category={category}
            />
        )
    }

    return (
        <View style={styles.container}> 
            <FlatList
            style={styles.listaFood}
            data={props.foodList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            maxToRenderPerBatch={10}
            />
        </View>
    )
}