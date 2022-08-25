import React, {useState, useEffect} from 'react';
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';

import styles from './styles'

export default function App(props) {

    return (    
        <TouchableOpacity style={styles.buttonContainer}>
            <View style={styles.container}>
                <Text style={styles.titleText}>Nome:</Text>
                <Text style={styles.infoText}>{props.description}</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.titleText}>Categoria:</Text>
                <Text style={styles.infoText}>{props.categoryName}</Text>
            </View>
        </TouchableOpacity>
    );
}