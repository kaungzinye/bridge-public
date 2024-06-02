import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { AuthStackNavigationProp } from '../types/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { darkTheme } from '../styles/theme';

type Props = {
  navigation: AuthStackNavigationProp;
};


const { width, height } = Dimensions.get('window');

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {

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

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
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
    marginTop: -50,
  },
  buttonText: {
    fontSize: 16,
    color: darkTheme.secondaryFixedDim,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {},
  logo: {
    width: width * 0.9, 
    height: height * 0.5, 
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeScreen;








