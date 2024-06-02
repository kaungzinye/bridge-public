import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Image } from 'react-native';
import { Button, TextInput, Text, useTheme } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import {darkTheme, lightTheme} from "../styles/theme"

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

const { width, height } = Dimensions.get('window');

const LoginScreen: React.FC<Props> = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();

  const handleLogin = () => {
    // Implement login logic
    navigation.navigate('Main');
  };

  return (
    <ImageBackground
        source={require('../../assets/texturedbackground.png')} 
        style={styles.background}
    >

      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/bridgelogo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          outlineColor={darkTheme.outline}
          placeholderTextColor={darkTheme.onSurfaceVariant}
          textColor={darkTheme.primaryFixed}
          activeOutlineColor={darkTheme.secondaryFixedDim}
         />
      </View>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          mode="outlined"
          outlineColor={darkTheme.outline}
          placeholderTextColor={darkTheme.onSurfaceVariant}
          textColor={darkTheme.primaryFixed}
          activeOutlineColor={darkTheme.secondaryFixedDim}
         />
      </View>

      <View style={styles.forgotPasswordContainer}>
        <Button 
          onPress={() => navigation.navigate('ForgotPassword')} 
          style={styles.forgotPasswordButton}
          labelStyle={styles.forgotPasswordText}
        >
          Forgot Password?
        </Button>
      </View>
      
      <View style={styles.buttonContainer}>
      <Button 
        mode="contained" 
        onPress={() => navigation.navigate('Login')} 
        style={styles.button}
        labelStyle={styles.buttonText}
       >
          Login 
        </Button>
      </View>


      <View style={styles.signupContainer}>
        <Button 
          onPress={() => navigation.navigate('Signup')} 
          style={styles.forgotPasswordButton}
          labelStyle={styles.signupText}
        >
          Don't have an account yet?
        </Button>
      </View>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    borderColor: darkTheme.inversePrimary, 
    borderWidth: 1.5,
    borderRadius: 100,
    paddingHorizontal: width * 0.01, 
    paddingVertical: height * 0.006,
  },
  buttonText: {
    fontSize: 16,
    color: darkTheme.secondaryFixedDim,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordButton: {
    backgroundColor: 'transparent',
  },
  forgotPasswordText: {
    color: darkTheme.secondary,
    textAlign: "right",
    width: "90%",
    fontSize: 12,
  },
  forgotPasswordContainer: {
    marginTop: -10,
  },
  inputContainer: {
    color: darkTheme.onSurface,
    backgroundColor: 'transparent',
    flexDirection: "row",
    borderRadius: 40,
    marginHorizontal: 40,
    elevation: 10,
    marginVertical: 15,
    alignItems: "center",
    height: 50,
  },
  logo: {
    width: width * 0.9, 
    height: height * 0.5, 
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupContainer: {
    flexDirection: "row",
    borderRadius: 200,
    marginHorizontal: 40,
    elevation: 10,
    marginVertical: 10, 
    alignItems: "center",
    height: 40,
  },
  signupText: {
    color: darkTheme.secondary,
    width: "90%",
    fontSize: 13,
    textAlign: "center",
  },
  textInput: {
    color: darkTheme.onSurface,
    backgroundColor: 'transparent',
    flex: 1,
  },
});

export default LoginScreen;