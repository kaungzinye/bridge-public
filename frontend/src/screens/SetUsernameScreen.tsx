import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Image } from 'react-native';
import { Button, TextInput, Text, useTheme } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios from 'axios';
import { AuthStackNavigationProp } from '../types/types';

type Props = {
  navigation: AuthStackNavigationProp;
};

const { width, height } = Dimensions.get('window');

const SetUsernameScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState<String>('');
  const [profilePicture, setProfilePicture] = useState(''); // Add logic for setting profile picture

  const handleNext = () => {
    // Implement setting profile and username logic
    navigation.navigate('Main');
  };
  const handleSetUsername = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/set-username', { username });
      // Navigate to the main app
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
    <View style={styles.container}>
      <Text style={styles.text}>Set Username and Profile Picture</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      {/* Add profile picture input */}
      <Button mode="contained" onPress={handleNext} style={styles.button}>
        Next, Your Prompts
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
});

export default SetUsernameScreen;
