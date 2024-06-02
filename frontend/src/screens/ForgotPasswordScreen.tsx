import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types'; // Adjust the path as necessary

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ForgotPassword'>;
};

const ForgotPasswordScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Implement password reset logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Forgot Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button mode="contained" onPress={handleForgotPassword} style={styles.button}>
        Send Reset Link
      </Button>
      <Button onPress={() => navigation.navigate('Login')} style={styles.link}>
        Back to Login
      </Button>
      <Button onPress={() => navigation.navigate('Signup')} style={styles.link}>
        Sign Up
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

export default ForgotPasswordScreen;

