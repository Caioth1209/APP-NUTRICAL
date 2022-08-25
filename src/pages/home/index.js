import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Text } from 'react-native';
import Header from "../../components/home/header"
import SearchInput from "../../components/home/searchInput"
import FoodList from "../../components/home/foodList"
import CategoryList from "../../components/home/categoryList"
import api from "../../services/api"
import styles from './styles';


export default function App() {

    const [categoryList, setCategoryList] = useState([]);
    const [categoryId, setCategoryId] = useState(0);
    const [enableSearch, isEnableSearch] = useState(false);
    const [foodSearch, handleFoodSearch] = useState("");

    useEffect(()=>{
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

    return (    
        <View style={styles.container}>

            <StatusBar style="auto" />  

            <Header
            handleEnableSearch={isEnableSearch}
            enableSearch={enableSearch}
            handleFoodSearch={handleFoodSearch}
            />

            {enableSearch &&  
            <SearchInput
            handleFoodSearch={handleFoodSearch}
            foodSearch={foodSearch}
            categoryId={categoryId}
            />}

            <CategoryList
            categoryList={categoryList}
            handleCategoryId={setCategoryId}
            handleCategoryList={setCategoryList}
            />
            
            <FoodList
            categoryList={categoryList}
            categoryId={categoryId}
            foodSearch={foodSearch}
            />
        </View>
    );
}