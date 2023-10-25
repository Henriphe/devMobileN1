import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, Touchable, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { style } from '../../styles/home.style'
const Home = () => {
    
    const [products, setProducts] = useState({
        p1: {
            id: 1,
            title: 'Demon Slayer - capítulo 1',
            price: 30.00,
            aval: 4.3,
            inCart: false,
            qtde: 0
        },
        p2: {
            id: 2,
            title: 'Jojos Bizarre Adventure - Phantom Blood',
            price: 50.00,
            aval: 4.7,
            inCart: false,
            qtde: 0
        },
        p3: {
            id: 3,
            title: 'A returners magic should be special',
            price: 999.99,
            aval: 4.1,
            inCart: false,
            qtde: 0
        }
    }
    );


    const navigation = useNavigation();

    const [indexImg1, setIndexImg1] = useState(true)
    const [indexImg2, setIndexImg2] = useState(false)
    const [indexImg3, setIndexImg3] = useState(false)
    const [starCliked, setStarClicked] = useState(false)
    const [addCliked, setAddClicked] = useState(false)

    return (
        <View style={style.container}>

            <View style={style.NavBar}>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Icon name="arrow-left" size={40} color="white" style={style.Icon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Devs")}>
                    <Icon name="user-circle-o" size={40} color="white" style={style.Icon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Cart", products)}>
                    <Icon name="shopping-cart" size={40} color="white" style={style.Icon} />
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={style.Shop}><View>{/* Produto 1 */}
                    <Text style={style.NameProduct}>{products['p1'].title}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("InformacaoD")}>
                        <Image style={style.ImageProduct} source={require('../../../../assets/demonslayer.jpeg')} />
                        </TouchableOpacity>
                   

                    <View style={style.optProduct}>
                        <View>
                            {products['p1'].inCart ?
                                <TouchableOpacity onPress={() => setProducts({ ...products, p1: { ...products.p1, ['inCart']: false } })} >
                                    <Icon name="minus-square" size={30} color="#f96d09" style={style.IconAdd} />
                                </TouchableOpacity> :
                                <TouchableOpacity onPress={() => setProducts({ ...products, p1: { ...products.p1, ['inCart']: true } })}>
                                    <Icon name="plus-square-o" size={30} color="#f96d09" style={style.IconAdd} />
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                    <Text style={style.Price}>R${products['p1'].price}</Text>
                    <Text style={style.Price}> {products['p1'].aval} <Image style={style.Avaliation} source={require('../../../../assets/star.png')} /></Text>
                    <Text style={style.Description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quo rem, perspiciatis quaerat illum ratione possimus at consequuntur, iste praesentium iure repellendus! Mollitia odit repudiandae est! Impedit laborum alias atque?</Text>
                </View>
                </View>

                <View>{/* Produto 2 */}
                    <Text style={style.NameProduct}>{products['p2'].title}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("InformacaoJ")}>
                    <Image style={style.ImageProduct} source={require('../../../../assets/jojo.jpeg')} />
                        </TouchableOpacity>
                    


                    <View style={style.optProduct}>
                        <View>
                            {products['p2'].inCart ?
                                <TouchableOpacity onPress={() => setProducts({ ...products, p2: { ...products.p2, ['inCart']: false } })} >
                                    <Icon name="minus-square" size={30} color="#f96d09" style={style.IconAdd} />
                                </TouchableOpacity> :
                                <TouchableOpacity onPress={() => setProducts({ ...products, p2: { ...products.p2, ['inCart']: true } })}>
                                    <Icon name="plus-square-o" size={30} color="#f96d09" style={style.IconAdd} />
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                    <Text style={style.Price}>R${products['p2'].price}</Text>
                    <Text style={style.Price}> {products['p2'].aval} <Image style={style.Avaliation} source={require('../../../../assets/star.png')} /></Text>
                    <Text style={style.Description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quo rem, perspiciatis quaerat illum ratione possimus at consequuntur, iste praesentium iure repellendus! Mollitia odit repudiandae est! Impedit laborum alias atque?</Text>
                </View>

                <View>{/* Produto 3 */}
                    <Text style={style.NameProduct}>{products['p3'].title}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("InformacaoDesir")}>
                    <Image style={style.ImageProduct} source={require('../../../../assets/desir.jpg')} />
                        </TouchableOpacity>
                    

                    <View style={style.optProduct}>
                        <View>
                            {products['p3'].inCart ?
                                <TouchableOpacity onPress={() => setProducts({ ...products, p3: { ...products.p3, ['inCart']: false } })} >
                                    <Icon name="minus-square" size={30} color="#f96d09" style={style.IconAdd} />
                                </TouchableOpacity> :
                                <TouchableOpacity onPress={() => setProducts({ ...products, p3: { ...products.p3, ['inCart']: true } })}>
                                    <Icon name="plus-square-o" size={30} color="#f96d09" style={style.IconAdd} />
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                    <Text style={style.Price}>R${products['p3'].price}</Text>
                    <Text style={style.Price}> {products['p3'].aval} <Image style={style.Avaliation} source={require('../../../../assets/star.png')} /></Text>
                    <Text style={style.Description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quo rem, perspiciatis quaerat illum ratione possimus at consequuntur, iste praesentium iure repellendus! Mollitia odit repudiandae est! Impedit laborum alias atque?</Text>
                </View>
                <View style={style.NewNavBar}>
             
                <TouchableOpacity onPress={() => navigation.navigate("About")}>
                    <Icon name="user-circle-o" size={40} color="white" style={style.Icon} />
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View >
    )
}

export default Home;
