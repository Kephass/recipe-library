import React, { useState } from 'react';
import { Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import RecommendedMeal from '../Components/RecommendedMeal';
import MealCategories from '../Components/MealCategories';
import * as mockDataHelper from '../helpers/mockData';
import * as mealHelper from '../helpers/meal';

function Landing() {
  const [user, setUser] = useState(mockDataHelper.user);

  return (
    <Container maxW='container.xl' minH='93vh' bg='primary'>
      {/* TODO: This should probably be its own component, especially if user's profile is clickable + has functionality */}
      <Flex justify='space-between' align='center' my={2}>
        <div>
          <Heading as='h1'>Hi, {user.name}</Heading>
          <Text color='textFaint' fontWeight='bold'>
            {mealHelper.greetingMessage()}
          </Text>
        </div>
        <Image
          src={user.image}
          alt={user.name}
          borderRadius='3xl'
          height='100px'
        />
      </Flex>

      <RecommendedMeal />
      <MealCategories />
    </Container>
  );
}

export default Landing;
