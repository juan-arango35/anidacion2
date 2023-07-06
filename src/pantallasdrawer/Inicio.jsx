import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
 
  Text,
  StatusBar,
  TextInput,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import { Button } from 'react-native-paper';

const Inicio = ({navigation}) => {

 const handleSubmit=values=>{
  navigation.navigate('Inicio2', values)
 }


  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Ingresa un correo valido')
      .required('El correo es requerido'),
    password: yup
      .string()
      .min(8, ({min}) => `la contraseña debe tener  ${min} caracteres como minimo`)
      .required('La contraseña es requerida'),
  });
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <ImageBackground 
         style={{flex: 1, resizeMode: 'cover'}}
         source={require('../Imagenes/fondo-login.jpg')}>
      <SafeAreaView style={styles.container}>
        
        <View style={styles.loginContainer}>
          <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}  >Login</Text>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{email: '', password: ''}}
            onSubmit={handleSubmit}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              touched,
            }) => (
              <>
                <TextInput
                  name="email"
                  placeholder="Coloca tu correo"
                  style={styles.textInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />

                {(errors.email && touched.email)  && (
                  <Text style={{fontSize: 20,fontWeight: 'bold', color: 'red'}}>
                    {errors.email}
                  </Text>
                )}
                <TextInput
                  name="password"
                  placeholder="Coloca tu contraseña"
                  style={styles.textInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                {(errors.password && touched.password) && (
                  <Text style={{fontSize: 20,fontWeight: 'bold', color: 'red'}}>
                    {errors.password}
                  </Text>
                )}
             

                <Button onPress={handleSubmit} disabled={!isValid}  mode='contained' theme={{colors: {primary:'blue'}}} > Enviar</Button>
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
        </ImageBackground>
    </>
  );
};

export default Inicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 80,
  
  
  },
  

  loginContainer: {
    
    width: '80%',
    
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
    backgroundColor: '#e6e6e6',
    borderRadius: 30
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    fontSize: 18
  },
});
