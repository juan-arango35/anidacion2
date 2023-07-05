import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import FirstRoute from '../Screens2/FirstRoute';
import SecondRoute from '../Screens2/SecondRoute';



const Inicio3 = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Ventana1' },
    { key: 'second', title: 'Ventana2' },
  ]);

  return (
    <TabView
      
      navigationState={{ index, routes }}
      renderScene={SceneMap({
        first: FirstRoute,
        second: SecondRoute,
      })}
      onIndexChange={setIndex} 
      initialLayout={{ width: Dimensions.get('window').width }}
      style={styles.container}
    />
  );
};

export default Inicio3;

const styles = StyleSheet.create({
  container: {

  },
  scene: {
    flex: 1,
  },
});

