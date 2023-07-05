import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Inicio2 = ({route, navigation}) => {
  const {email, password} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.textotitulo}>Resultados del login</Text>
      <Text style={styles.resultado} >Correo: {JSON.stringify(email)} </Text>
      <Text style={styles.resultado} >Contraseña : {JSON.stringify(password)} </Text>
    </View>
  );
};

export default Inicio2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textotitulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  }, 

  resultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'green',

  }
});
