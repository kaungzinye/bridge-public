import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';

const Container = styled(View, 'flex-1 justify-center items-center bg-background');
const Title = styled(Text, 'text-primary text-lg');

const PostCreationScreen = () => {
  return (
    <Container>
      <Title>Post Creation Screen</Title>
    </Container>
  );
};

export default PostCreationScreen;
