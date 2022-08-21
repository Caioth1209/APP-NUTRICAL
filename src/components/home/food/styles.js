import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1/12,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#93c572",
    },
    boxAppTitle:{
        justifyContent:"center",
        alignItems: "center",
        width: "80%",
    },
    appTitle:{
        color: "#fff",
        fontWeight: "bold",
        marginLeft: "15%"
    },
    boxSearchButton:{
        width: "10%"
    }
})