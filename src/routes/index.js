import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../pages/home"

const Stack = createNativeStackNavigator();

export default function App() {

    // const [search, setSearch] = useState(false);

    return (
        <NavigationContainer>
            <Stack.Navigator
                // screenOptions={
                //     {
                //         headerStyle: { 
                //             backgroundColor: '#93c572', 
                //         },
                //         headerTintColor: '#fff',
                //         headerTitleStyle: {
                //         fontWeight: 'bold',
                //         },
                //  }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        // title: 'NUTRICAL',
                        headerShown: false,
                        // headerRight: () => (
                        //     <TouchableOpacity
                        //         onPress={()=>{setSearch()}}
                        //     >
                        //         <Ionicons name="md-search-circle" size={40} color="white" />
                        //     </TouchableOpacity>
                        // ), 
                    }}
                    // initialParams={{
                    //     search: search
                    // }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}