import React, {useState} from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles'

export default function App() {

    return (    
        <View
        style={styles.container}
        >
            <TextInput
            placeholder="Digite o nome do alimento"
            style={styles.searchInput}
            />
        </View>
    );
}