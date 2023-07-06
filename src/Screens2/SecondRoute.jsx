import { View, Text , StyleSheet, ImageBackground} from 'react-native'
import React from 'react'

const SecondRoute = () => {
  return (
    <View  style={{backgroundColor: 'gray', flex: 1 , justifyContent: 'center' , alignItems: 'center'}}  >
    <Text style={styles.texto}> Estamos en la vetana 2</Text>
   
  </View>
)
}

export default SecondRoute; 

const styles = StyleSheet.create({
texto: {
  fontSize: 30,
  color: 'black',
  fontWeight: 'bold' 
}
});