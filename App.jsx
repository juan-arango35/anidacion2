import * as React from 'react';
import {PaperProvider} from 'react-native-paper';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Inicio2 from './src/pantallasdrawer/Inicio2';
import Inicio from './src/pantallasdrawer/Inicio';
import Inicio3 from './src/pantallasdrawer/Inicio3';
import NavegacionTab from './src/navegacion/NavegacionTab';
import NavegacionStack from './src/navegacion/NavegacionStack';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Inicio' >
          <Drawer.Screen name="Inicio" component={Inicio} />
          <Drawer.Screen name="Inicio2" component={Inicio2}  />
          <Drawer.Screen name="Inicio3" component={Inicio3}  />
          <Drawer.Screen name="NavegacionTab" component={NavegacionTab} />
          <Drawer.Screen name="NavegacionStack" component={NavegacionStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
