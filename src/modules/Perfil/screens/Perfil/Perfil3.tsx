import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TouchableOpacity, Image, Text } from "react-native";
import { style } from '../../../Perfil/style';

export const InformacaoDesir = () => {
    const navigation = useNavigation();
    return (
        <View>
        <View style={style.NavBar}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Icon name="arrow-left" size={40} color="white" style={style.Icon} />
                </TouchableOpacity>
            </View>
            <View>
                <Image style={style.ImageProduct} source={require('../../../../assets/desir.jpg')} />
            </View>
            <Text style = {style.Lore}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in, cupiditate atque expedita quo maxime molestiae laborum illum obcaecati debitis laboriosam at? Aliquid recusandae magni repellat, ducimus deleniti error magnam!</Text>
        </View>
    );
}