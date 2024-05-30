import React from 'react';
import { View, Text, Button } from 'react-native';
import { styled } from 'nativewind';

const Container = styled(View, 'flex-1 justify-center items-center bg-background');
const Title = styled(Text, 'text-primary text-lg');

const ProfileScreen = () => {
  return (
    <Container>
      <Title>Profile Screen</Title>
      <Button title="Go to Profile Details" onPress={() => {}} />
    </Container>
  );
};

export default ProfileScreen;
