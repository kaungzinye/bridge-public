import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';

const Container = styled(View, 'flex-1 justify-center items-center bg-background');
const Title = styled(Text, 'text-primary text-lg');

const ProfileDetailsScreen = () => {
  return (
    <Container>
      <Title>Profile Details Screen</Title>
    </Container>
  );
};

export default ProfileDetailsScreen;
