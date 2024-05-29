import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabNavigator from './MainTabNavigator';
import ProfileDetailsScreen from '../screens/ProfileDetailsScreen';
import ChatScreen from '../screens/ChatScreen';
import PostCreationScreen from '../screens/PostCreationScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileDetails" component={ProfileDetailsScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="PostCreation" component={PostCreationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;




