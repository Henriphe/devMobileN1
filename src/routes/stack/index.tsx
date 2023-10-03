import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import Login from '../../modules/Perfil/screens/Perfil/Perfil';
import Login from '../../modules/login/screens/Login/Login';
import Home from '../../modules/Home/screens/Home/Home';
import Cart from '../../modules/Cart/screens/Cart/Cart';
import {Devs} from '../../modules/Devs/screens/Devs/Devs';
import { InformacaoD } from '../../modules/Perfil/screens/Perfil/Perfil';
import { InformacaoJ } from '../../modules/Perfil/screens/Perfil/Perfil2';
import { InformacaoDesir } from '../../modules/Perfil/screens/Perfil/Perfil3';

const Stk = createNativeStackNavigator();

const Stack = () =>{
    return(
        <Stk.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
            <Stk.Screen name='Login' component={Login}/>
            <Stk.Screen name='Home' component={Home}/>
            <Stk.Screen name='Cart' component={Cart}/>
            <Stk.Screen name='InformacaoD' component={InformacaoD}/>
            <Stk.Screen name='InformacaoJ' component={InformacaoJ}/>
            <Stk.Screen name='InformacaoDesir' component={InformacaoDesir}/>
            <Stk.Screen name='Devs' component={Devs}/>
  
        </Stk.Navigator>
    )
}

export default Stack;