import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';


import {Image} from 'react-native';

const Perfil1 = () => {

const width=Dimensions.get('window').width; 

const images= [

  require('../Carrusel1/auto1.jpg'),
  require('../Carrusel1/auto2.jpg'),
  require('../Carrusel1/auto3.jpeg'),
  require('../Carrusel1/auto4.jpg'),
  require('../Carrusel1/auto5.jpg'),
  require('../Carrusel1/auto6.jpg'),

]

  return (
   
    <GestureHandlerRootView style={{flex:1}} >

      <View style={styles.fondo}>
        <Text style={styles.texto} > CARRUSEL DE AUTOS</Text>

        <Carousel
        
        loop
        vertical={true}
        width={width}
        height={width/2}
        autoPlay={true}
        data={images}
        scrollAnimationDuration={1000}
        renderItem={({item})=>(
          <View style={{flex: 1, borderWidth: 1, justifyContent: 'center'}}>
            <Image
            source={item}
            style={{width: '100',
            height: '100%',
            borderRadius: 25, 
            padding: 10,
            borderColor: 'blue'          
          }}

          resizeMode='cover'
            />
            
          </View>
        )}
        />
        
      </View>
    </GestureHandlerRootView>
  )
}

export default Perfil1; 

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#51B2B4'
  }, 

  texto:{

    color: 'white',
    fontSize: 30, 
    fontWeight: 'bold',
    padding: 10, 
    textDecorationLine: 'underline'

  }
});
