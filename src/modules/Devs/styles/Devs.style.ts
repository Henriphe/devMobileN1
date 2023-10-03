import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    NavBar: {
        justifyContent: 'space-between',
        flexDirection: "row",
        backgroundColor: '#f96d09',
        height: 65,
        padding: 10
    },
    AboutMe: {
        textAlign: "center",
        fontSize: 20,
        color: "#000",
        margin: 15,
        marginTop: 20,
        marginBottom: 20
    },
    ImageAboutMe: {
        width: 250,
        height: 250,
        marginTop: 15,
        marginLeft: '15%',
        marginBottom: 5,
        borderRadius: 5,
        display: 'flex',
    }
})