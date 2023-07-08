import { View, Text, TouchableOpacity , StyleSheet} from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const MenuBottonItem = ({text, onPress, image}) => {
  return (
    <TouchableOpacity 
        style={styles.buttoncontainer}
        onPress={onPress}
    >
      <Image
      name={image}
        source={{uri: image}}   
        style={styles.imagen}   
      />
      <Text style={styles.textoprueba} > {text}  </Text>
    </TouchableOpacity>
  )
}

export default MenuBottonItem; 

const styles = StyleSheet.create({
    buttoncontainer: {
        backgroundColor: '#B4BEB5',
        borderRadius: 20,
        flexDirection: 'row',
      marginBottom: 15,
      padding: 15,


    }, 

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    }, 
    imagen: {
      height: 45,
      width: 45,
      borderRadius: 23
    }, 

    textoprueba: {
      marginStart: 15,
      fontWeight: 'bold', 
      color: 'black'

    }
    
});
