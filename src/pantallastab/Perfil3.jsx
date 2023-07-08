import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

const Perfil3 = () => {
  return (
 <View style={styles.container}>
   <Text style={styles.texto1}>
     Estamos en la pagina Perfil3
   </Text>
    
 </View>
  )
}

export default Perfil3; 

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },

    texto1: {
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold'
    }
});




