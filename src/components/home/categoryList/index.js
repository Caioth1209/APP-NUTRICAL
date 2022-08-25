import React, {useState} from 'react';
import { Text, View, FlatList } from 'react-native';
import Category from "../category"
import styles from './styles'

export default function App(props) {

    const renderItem = ({ item }) => {        
        return (
            <Category
            category={item.category}
            categoryId={item.id}
            handleCategoryId={props.handleCategoryId}
            />
        )
    }

    return (
        <View style={styles.container}> 
            <FlatList
            horizontal
            style={styles.listCategories}
            data={props.categoryList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        </View>
    )
}