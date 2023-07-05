import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

const Contacto3 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerbotton}>

        <Button
          onPress={() => navigation.goBack()}
          mode="contained"
          style={styles.boton}>
          Back
        </Button>
        <Button
          onPress={() => navigation.navigate('Contacto1')}
          mode="contained"
          style={styles.boton}>
          Next
        </Button>
      </View>

      <View style={styles.texto}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'blue'}}>
          Contacto3
        </Text>
      </View>
    </View>
  );
};

export default Contacto3;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'rgba(255,0,0,0.5)',
  },
  boton: {
    justifyContent: 'flex-start',
  },

  containerbotton: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    padding: 10,
    alignContent: 'stretch',
    alignItems: 'center',
  },

  texto: {
    flex: 1,
    alignItems: 'center',

    justifyContent: 'center',
  },
  containerbotton2: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
});
