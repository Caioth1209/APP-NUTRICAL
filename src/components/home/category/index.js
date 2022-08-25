import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles'

export default function App(props) {

    return (    
        <TouchableOpacity 
        style={styles.buttonContainer}
        onPress={()=>{
            props.handleCategoryId(props.categoryId);
        }}>
            <View style={styles.container}>
                <Text style={styles.titleText}>Categoria:</Text>
                <Text style={styles.infoText}>{props.category}</Text>
            </View>
        </TouchableOpacity>
    );
}