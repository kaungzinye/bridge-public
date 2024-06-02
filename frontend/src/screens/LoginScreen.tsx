import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Image } from 'react-native';
import { Button, TextInput, Text, useTheme } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackNavigationProp } from '../types/types';
import axios from 'axios';

type Props = {
  navigation: AuthStackNavigationProp;
};

const { width, height } = Dimensions.get('window');

const LoginScreen: React.FC<Props> = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>(''); // Use string for error message, initialized to an empty string
  const { colors } = useTheme();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
      const { token } = response.data;
      navigation.navigate('Main');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        // Handle Axios error
        setError(err.response?.data?.error || 'An error occurred');
      } else if (err instanceof Error) {
        // Handle general error
        setError(err.message);
      } else {
        // Handle unexpected error type
        setError('An unexpected error occurred');
      }
    }
  };

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

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          outlineColor={colors.primary}
          placeholderTextColor={colors.onSurfaceVariant}
          activeOutlineColor={colors.primary}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          mode="outlined"
          outlineColor={colors.primary}
          placeholderTextColor={colors.onSurfaceVariant}
          activeOutlineColor={colors.primary}
        />
        <Button 
          mode="contained" 
          onPress={handleLogin} 
          style={[styles.button, { borderColor: colors.outline }]}
          labelStyle={[styles.buttonText, { color: colors.primary }]}
        >
          Login
        </Button>
        <Button 
          onPress={() => navigation.navigate('ForgotPassword')} 
          style={styles.link}
          labelStyle={[styles.linkText, { color: colors.primary }]}
        >
          Forgot Password?
        </Button>
        <Button 
          onPress={() => navigation.navigate('Signup')} 
          style={styles.link}
          labelStyle={[styles.linkText, { color: '#ECC06C' }]}
        >
          Sign Up
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
  },
  buttonText: {
    color: '#ECC06C', 
  },
  input: {
    flexDirection: "row",
    borderRadius: 20,
    marginHorizontal: 40,
    elevation: 10,
    marginVertical: 20, 
    alignItems: "center",
    height: 40,
  },
  link: {
    marginTop: 10,
  },
  linkText: {
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
    paddingHorizontal: width * 0.1,
  },
  title: {
    fontSize: 36,
    marginBottom: 40,
  },
});

export default LoginScreen;