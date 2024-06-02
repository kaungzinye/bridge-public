import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Text, HelperText, Dialog } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types'; // Adjust the path as necessary

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Signup'>;
};

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const validatePassword = (password: string) => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  const handleSignup = () => {
    setEmailError('');
    setPasswordError('');

    if (email !== confirmEmail) {
      setEmailError("Emails don't match");
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format");
    }

    if (password !== confirmPassword) {
      setPasswordError("Passwords don't match");
    } else if (!validatePassword(password)) {
      setPasswordError("Password must be at least 8 characters long, contain at least one number, one special character, and no spaces");
    }

    if (!emailError && !passwordError) {
      // Handle signup logic here
      navigation.navigate('SetUsername');
    } 
  };

  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.text}>Sign Up</Text>
      </View>
      
      <View>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
          error={!!emailError}
        />
      </View>
      
      <View>
        <HelperText type="error" visible={!!emailError}>
          {emailError}
        </HelperText>
      </View>
      
      <View>
        <TextInput
          label="Confirm Email"
          value={confirmEmail}
          onChangeText={setConfirmEmail}
          keyboardType="email-address"
          style={styles.input}
          error={!!emailError}
        />
      </View>
      
      <View>
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          error={!!passwordError}
        />
      </View>
      
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
      <Button mode="contained" onPress={handleSignup} style={styles.button}>
        Sign Up
      </Button>
      <Button onPress={() => { /* Handle Spotify Signup */ }} style={styles.button}>
        Sign Up with Spotify
      </Button>
      <Button onPress={() => navigation.goBack()} style={styles.link}>
        Back
      </Button>
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

