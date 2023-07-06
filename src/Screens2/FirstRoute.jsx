import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

const FirstRoute = () => {
  return (
    <View  style={{backgroundColor: '#C3BDBD', flex: 1 , justifyContent: 'center' , alignItems: 'center'}}  >
      <Text style={styles.texto}> Estamos en la vetana 1</Text>
     
    </View>
  )
}

export default FirstRoute; 

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold' 
  }
});
