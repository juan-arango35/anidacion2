import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
/* import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'; */
import Icon from 'react-native-vector-icons/Ionicons';

import Perfil1 from '../pantallastab/Perfil1';
import Perfil2 from '../pantallastab/Perfil2';
import Perfil3 from '../pantallastab/Perfil3';

const Tab = createBottomTabNavigator();

const NavegacionTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Perfil1"

   /*    iconos del la parte de  abajo: */
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';

          switch (route.name) {
            case 'Perfil1':
              iconName = focused ? 'home' : 'home-outline';
              break;

            case 'Perfil2':
              iconName = focused ? 'person-circle' : 'person-circle-outline';
              break;

            case 'Perfil3':
              iconName = focused ? 'cog' : 'cog-outline';
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Perfil1"
        component={Perfil1}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="Perfil2"
        component={Perfil2}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Perfil3"
        component={Perfil3}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default NavegacionTab;
