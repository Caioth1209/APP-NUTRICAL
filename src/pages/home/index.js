import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import Header from "../../components/home/header"
import SearchInput from "../../components/home/searchInput"
import styles from './styles';

export default function App() {

    const [enableSearch, setEnableSearch] = useState(false);

    return (    
        <View style={styles.container}>
            <StatusBar style="auto" />  
            <Header
            handleEnableSearch={setEnableSearch}
            enableSearch={enableSearch}
            />
            
            {enableSearch &&  <SearchInput/>}
        </View>
    );
}