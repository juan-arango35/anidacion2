import * as React from 'react';
import {PaperProvider} from 'react-native-paper';

import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {Text, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Inicio from './src/pantallasdrawer/Inicio';
import Inicio2 from './src/pantallasdrawer/Inicio2';
import Inicio3 from './src/pantallasdrawer/Inicio3';
import NavegacionTab from './src/navegacion/NavegacionTab';
import NavegacionStack from './src/navegacion/NavegacionStack';

import MenuBottonItem from './src/pantallasdrawer/MenuBottonItem';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Inicio"
          drawerContent={props => <MenuItems {...props} />}>
          <Drawer.Screen name="Inicio" component={Inicio} />
          <Drawer.Screen name="Inicio2" component={Inicio2} />
          <Drawer.Screen name="Inicio3" component={Inicio3} />
          <Drawer.Screen name="NavegacionTab" component={NavegacionTab} />
          <Drawer.Screen name="NavegacionStack" component={NavegacionStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const MenuItems = ({navigation}) => {
  return (
    <DrawerContentScrollView style={styles.container}>
      <Text style={styles.title}>MI Menu</Text>

      <Text
        style={{
          marginTop: 25,
          marginBottom: 10,
          fontWeight: 'bold',
          color: '#130CF3',
        }}>
        Login
      </Text>
      <MenuBottonItem
        image="https://images.pexels.com/photos/11939798/pexels-photo-11939798.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        text="Inicio"
        onPress={() => navigation.navigate('Inicio')}
      />

      <Text
        style={{
          marginTop: 25,
          marginBottom: 10,
          fontWeight: 'bold',
          color: '#130CF3',
        }}>
        Resultado del login
      </Text>
      <MenuBottonItem
        image="https://images.pexels.com/photos/14573146/pexels-photo-14573146.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        text="Inicio2"
        onPress={() => navigation.navigate('Inicio2')}
      />

      <Text
        style={{
          marginTop: 25,
          marginBottom: 10,
          fontWeight: 'bold',
          color: '#130CF3',
        }}>
        Ventanas Adicionales
      </Text>
      <MenuBottonItem
        image="https://images.pexels.com/photos/16102236/pexels-photo-16102236/free-photo-of-paisaje-naturaleza-colina-hierba.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        text="Inicio3"
        onPress={() => navigation.navigate('Inicio3')}
      />

      <Text
        style={{
          marginTop: 25,
          marginBottom: 10,
          fontWeight: 'bold',
          color: '#130CF3',
        }}>
        Carrusel auto - motos
      </Text>

      <MenuBottonItem
        image="https://images.pexels.com/photos/17504536/pexels-photo-17504536.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        text="NaveTab"
        onPress={() => navigation.navigate('NavegacionTab')}
      />

      <Text
        style={{
          marginTop: 25,
          marginBottom: 10,
          fontWeight: 'bold',
          color: '#130CF3',
        }}>
        Navegacion
      </Text>

      <MenuBottonItem
        image="https://images.pexels.com/photos/14966916/pexels-photo-14966916/free-photo-of-punto-de-referencia-arboles-cupula-mexico.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        text="NaveStack"
        onPress={() => navigation.navigate('NavegacionStack')}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
});
