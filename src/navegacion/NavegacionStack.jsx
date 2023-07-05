
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Contacto1 from '../pantallasstack/Contacto1';
import Contacto2 from '../pantallasstack/Contacto2';
import Contacto3 from '../pantallasstack/Contacto3';

const Stack = createNativeStackNavigator();

const NavegacionStack = () => {
  return (
    <Stack.Navigator initialRouteName='Contacto1'  >
      <Stack.Screen name="Contacto1" component={Contacto1} options={{headerShown: false}}  />
      <Stack.Screen name="Contacto2" component={Contacto2} options={{headerShown: false}} />
      <Stack.Screen name="Contacto3" component={Contacto3} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default NavegacionStack;
