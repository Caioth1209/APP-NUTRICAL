import React, {useState} from 'react';
import { View, TextInput, Alert } from 'react-native';
import styles from './styles'

export default function App(props) {

    return (    
        <View
        style={styles.container}
        >
            <TextInput
            placeholder="Procurar alimento da categoria"
            style={styles.searchInput}
            // editable={props.categoryId == 0 ? false : true}
            value={props.categoryId == 0 ? "" : props.foodSearch}
            onChangeText={(e)=>{
                if(props.categoryId == 0){
                    Alert.alert("Não Disponível", "Você precisa escolher uma categoria primeiro!"); 
                } else {
                    props.handleFoodSearch(e);
                }
            }}

            />
        </View>
    );
}