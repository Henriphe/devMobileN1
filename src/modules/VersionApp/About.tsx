import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { style } from '../Devs/styles/Devs.style';


export const About = () => {

    const navigation = useNavigation();
    return (
        <View>
        <View style={style.NavBar}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Icon name="arrow-left" size={40} color="white" style={style.Icon} />
                </TouchableOpacity>
            </View>
            <View>
               
            </View>
            <View>
             {/*  <Image style={style.ImageAboutMe} source={require('../../../../assets/perfil.png')} />*/}
            </View>
            <Text style ={style.AboutMe}>Página onde será descrito as tecnologias</Text>
        </View>
    );
}


