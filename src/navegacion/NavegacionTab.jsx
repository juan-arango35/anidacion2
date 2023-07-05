
/* 
import React from 'react'; 
/* import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; */
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



import Perfil1 from '../pantallastab/Perfil1';
import Perfil2 from '../pantallastab/Perfil2';

const Tab=createMaterialBottomTabNavigator()

const NavegacionTab = () => {
  return (
    <Tab.Navigator initialRouteName='Perfil1' activeColor='black'  barStyle={{ backgroundColor: 'orange', paddingBottom: 10 }}  labelStyle={{ fontSize: 30}} >
    <Tab.Screen name="Perfil1" component={Perfil1} options={{headerShown: false}}  />
          
    <Tab.Screen name="Perfil2" component={Perfil2} options={{headerShown: false}} />
  </Tab.Navigator>
  )
}

export default NavegacionTab; 

