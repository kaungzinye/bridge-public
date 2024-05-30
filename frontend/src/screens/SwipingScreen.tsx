import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';

const Container = styled(View, 'flex-1 justify-center items-center bg-background');
const Title = styled(Text, 'text-primary text-lg');

const SwipingScreen = () => {
  return (
    <Container>
      <Title>Swiping Screen</Title>
    </Container>
  );
};

export default SwipingScreen;
