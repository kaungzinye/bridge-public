import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types'; // Adjust the path as necessary

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SetUsername'>;
};

const SetUsernameScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [profilePicture, setProfilePicture] = useState(''); // Add logic for setting profile picture

  const handleNext = () => {
    // Implement setting profile and username logic
    navigation.navigate('Main');
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

