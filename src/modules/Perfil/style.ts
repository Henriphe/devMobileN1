import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
  NavBar: {
      justifyContent: 'space-between',
      flexDirection: "row",
      backgroundColor: '#f96d09',
      height: 65,
      padding: 10
  },
  Lore: {
    textAlign: "center",
    fontSize: 20,
    color: "#000",
    margin: 15,
    marginTop: 20,
    marginBottom: 20
},
  NameProduct: {
      fontSize: 28,
      fontWeight: 'bold',
      color: "#000",
      marginBottom: 20
  },
  Description: {
      fontSize: 18,
      textAlign: 'justify',
      marginTop: 15,
      marginBottom:50
  },
  Price: {
      fontSize: 24,
      width: 200,       
  },
  ImageProduct: {
      width: 250,
      height: 395,
      marginTop: 15,
      marginLeft: '15%',
      marginBottom: 5,
      borderRadius: 5,
      display: 'flex',
  },
  Avaliation: {
      width: 30,
      height: 30
  },
  Icon: {
      height: 50,
      width: 50,
      margin: 5
  },
  IconAdd: {
      height: 30,
      width: 30,
      margin: 5,
      marginLeft: 40
  },
  optProduct: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 30,
      marginLeft: '80%'
  }
})