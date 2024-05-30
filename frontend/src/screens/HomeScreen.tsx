import React from 'react';
import { View, Text, Button } from 'react-native';
import { styled } from 'nativewind';

const Container = styled(View, 'flex-1 justify-center items-center bg-background');
const Title = styled(Text, 'text-primary text-lg');

const HomeScreen = () => {
  return (
    <Container>
      <Title>Home Screen</Title>
      <Button title="Go to Profile" onPress={() => {}} />
    </Container>
  );
};

export default HomeScreen;
