import React from 'react';
import { Container, Heading, Text } from '@chakra-ui/react';
import RecommendedMeal from '../Components/RecommendedMeal';
import MealCategories from '../Components/MealCategories';

function Landing() {
  return (
    <Container maxW='container.xl' minH='93vh'>
      <Heading as='h1'>Hi, Arnold</Heading>
      <Text>Ready to cook for dinner?</Text>
      <RecommendedMeal />
      <MealCategories />
    </Container>
  );
}

export default Landing;
