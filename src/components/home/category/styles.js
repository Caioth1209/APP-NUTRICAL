import { StyleSheet } from "react-native";

export default StyleSheet.create({
    buttonContainer:{
        flex: 1,
        height: "100%",
        backgroundColor: "#569099",
        borderRadius: "20%",
        marginRight: 20,
        padding: 10,
    },
    touchedButtonContainer:{
        flex: 1,
        height: "100%",
        backgroundColor: "#569099",
        borderRadius: "20%",
        marginRight: 20,
        padding: 10,
        opacity: 0.5,
    },
    container:{
        flex: 1,
        justifyContent: "center",
    },
    titleText:{
        color: "#f6d809",
        fontWeight: "bold",
        fontStyle: "italic",
        fontSize: 13,
        padding: 5,
    },
    infoText:{
        color: "white",
        fontWeight: "bold",
        fontStyle: "normal",
        fontSize: 14,
        padding: 5,
    },
})