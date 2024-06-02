import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SwipingScreen from '../screens/SwipingScreen';
import ChatsScreen from '../screens/ChatsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PostsScreen from '../screens/PostsScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Swiping" component={SwipingScreen} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Posts" component={PostsScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
