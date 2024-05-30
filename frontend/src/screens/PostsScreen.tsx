import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';

const Container = styled(View, 'flex-1 justify-center items-center bg-background');
const Title = styled(Text, 'text-primary text-lg');

const PostsScreen = () => {
  return (
    <Container>
      <Title>Posts Screen</Title>
    </Container>
  );
};

export default PostsScreen;
