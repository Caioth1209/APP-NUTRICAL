import React, {useState} from 'react';
import { Text, SafeAreaView, View, Modal, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles'


export default function App(props) {

    return (    
        <SafeAreaView style={styles.container}>

            <View style={styles.boxAppTitle}>
                <Text style={styles.appTitle}>NUTRICAL</Text>
            </View>

            <View style={styles.boxSearchButton}>
                <TouchableOpacity
                    onPress={()=>{
                        props.handleEnableSearch(!props.enableSearch)
                    }}
                >
                    {props.enableSearch && 
                    <Ionicons name="md-close-circle" size={38} color="white" />}

                    {!props.enableSearch && 
                    <Ionicons name="md-search-circle" size={40} color="white" />}
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}