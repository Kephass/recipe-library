import React from 'react';
import { Container, Heading, Text } from '@chakra-ui/react';
import RecommendedMeal from '../Components/RecommendedMeal';

function Landing() {
  return (
    <Container maxW='container.xl' minH='93vh'>
      <Heading as='h1'>Hi, Arnold</Heading>
      <Text>Ready to cook for dinner?</Text>
      <RecommendedMeal />
    </Container>
  );
}

export default Landing;
