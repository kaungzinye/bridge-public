import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Image } from 'react-native';
import { Button, TextInput, Text, HelperText, Dialog } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {darkTheme, lightTheme} from "../styles/theme"
import { Button, TextInput, Text, HelperText 
import axios from 'axios';
import { AuthStackNavigationProp } from '../types/types';

type Props = {
  navigation: AuthStackNavigationProp;
};

const { width, height } = Dimensions.get('window');

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [generalError, setGeneralError] = useState<string>('');

  const validateEmail = () => {
    if (email !== confirmEmail) {
      setEmailError('Emails do not match');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };
    if (!emailError && !passwordError) {
      // Handle signup logic here
      navigation.navigate('SetUsername');
    } 
  };

  return (
    <ImageBackground
    source={require('../../assets/texturedbackground.png')} 
    style={styles.background}>

      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/bridgelogo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      
      <View style={styles.emailInputContainer}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
          error={!!emailError}
          mode="outlined"
          outlineColor={darkTheme.outline}
          placeholderTextColor={darkTheme.onSurfaceVariant}
          textColor={darkTheme.primaryFixed}
          activeOutlineColor={darkTheme.secondaryFixedDim}
        />
      </View>
      
      <View>
        <HelperText type="error" visible={!!emailError}>
          {emailError}
        </HelperText>
      </View>
      
      <View style={styles.confirmEmailInputContainer}>
        <TextInput
          label="Confirm Email"
          value={confirmEmail}
          onChangeText={setConfirmEmail}
          keyboardType="email-address"
          style={styles.input}
          error={!!emailError}
          mode="outlined"
          outlineColor={darkTheme.outline}
          placeholderTextColor={darkTheme.onSurfaceVariant}
          textColor={darkTheme.primaryFixed}
          activeOutlineColor={darkTheme.secondaryFixedDim}
        />
      </View>
      
      <View style={styles.passwordInputContainer}>
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          error={!!passwordError}
          mode="outlined"
          outlineColor={darkTheme.outline}
          placeholderTextColor={darkTheme.onSurfaceVariant}
          textColor={darkTheme.primaryFixed}
          activeOutlineColor={darkTheme.secondaryFixedDim}
        />
      </View>
      
      <View>
        <HelperText type="error" visible={!!passwordError}>
          {passwordError}
        </HelperText>
      </View>
      
      <View style={styles.confirmPasswordInputContainer}>
        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          style={styles.input}
          error={!!passwordError}
          mode="outlined"
          outlineColor={darkTheme.outline}
          placeholderTextColor={darkTheme.onSurfaceVariant}
          textColor={darkTheme.primaryFixed}
          activeOutlineColor={darkTheme.secondaryFixedDim}
        />
      </View>

      <View style={styles.signupButtonContainer}>
        <Button mode="contained" onPress={handleSignup} style={styles.signupButton}>
          Sign Up
        </Button>
      </View>
      
      <View style={styles.signupButtonContainer}>
        <Button onPress={() => { /* Handle Spotify Signup */ }} style={styles.signupWithSpotifyButton}>
          Sign Up with Spotify
        </Button>
      </View>
      
      <View style={styles.backButtonContainer}>
        <Button onPress={() => navigation.goBack()} style={styles.back}>
          Back
        </Button>
      </View>
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backButtonContainer: {},
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmEmailInputContainer: {
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
  confirmPasswordInputContainer: {
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  emailInputContainer: {
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
  input: {
    color: darkTheme.onSurface,
    backgroundColor: 'transparent',
    flex: 1,
  },  
  logo: {
    width: width * 0.9, 
    height: height * 0.5, 
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordInputContainer: {
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
  signupButton: {
    marginTop: 16,
  },
  signupButtonContainer: {},
  back: {
    marginTop: 16,
  },
  signupWithSpotifyButton: {
    marginTop: 16,
  },
});

export default SignupScreen;
