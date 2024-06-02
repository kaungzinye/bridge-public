import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
};

const { width, height } = Dimensions.get('window');

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <ImageBackground
      source={require('../../assets/texturedbackground.png')} 
      style={styles.background}
    >
      <View style={styles.overlay}>
      <Image
          source={require('../../assets/bridgelogo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
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
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    borderColor: '#7F7667', 
    borderWidth: 1.5,
    borderRadius: 100,
    paddingHorizontal: width * 0.01, 
    paddingVertical: height * 0.006,
    marginTop: -50,
  },
  buttonText: {
    color: '#ECC06C', 
  },
  logo: {
    width: width * 0.9, 
    height: height * 0.5, 
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeScreen;









