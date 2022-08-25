import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        width: "100%"
    },
    listaFood:{
        width: "95%",
        marginRight: "auto",
    },
    containerUnfoundFood:{
        flex: 1/5,
        marginTop: "10%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DD3444",
        borderRadius: 30,
        width: "90%",
      },
      textUnfoundFood:{
        color: "white",
        fontWeight: "bold",
      }
    
})