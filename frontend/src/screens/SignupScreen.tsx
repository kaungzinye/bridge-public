import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Button, TextInput, Text, HelperText } from 'react-native-paper';
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

  const handleRegister = async () => {
    if (validateEmail() && validatePassword()) {
      try {
        await axios.post('http://localhost:3000/api/auth/register', { email, password });
        navigation.navigate('Login');
      } catch (err) {
        if (axios.isAxiosError(err)) {
          // Handle Axios error
          setGeneralError(err.response?.data?.error || 'An error occurred');
        } else if (err instanceof Error) {
          // Handle general error
          setGeneralError(err.message);
        } else {
          // Handle unexpected error type
          setGeneralError('An unexpected error occurred');
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
        error={!!emailError}
      />
      <HelperText type="error" visible={!!emailError}>
        {emailError}
      </HelperText>
      <TextInput
        label="Confirm Email"
        value={confirmEmail}
        onChangeText={setConfirmEmail}
        keyboardType="email-address"
        style={styles.input}
        error={!!emailError}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        error={!!passwordError}
      />
      <HelperText type="error" visible={!!passwordError}>
        {passwordError}
      </HelperText>
      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
        error={!!passwordError}
      />
      <HelperText type="error" visible={!!passwordError}>
        {passwordError}
      </HelperText>
      <Button mode="contained" onPress={handleRegister} style={styles.button}>
        Sign Up
      </Button>
      <Button onPress={() => { /* Handle Spotify Signup */ }} style={styles.button}>
        Sign Up with Spotify
      </Button>
      <Button onPress={() => navigation.goBack()} style={styles.link}>
        Back
      </Button>
      {generalError ? <HelperText type="error" visible>{generalError}</HelperText> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    marginBottom: 20,
  },
  button: {
    marginTop: 16,
  },
  link: {
    marginTop: 16,
  },
});

export default SignupScreen;
