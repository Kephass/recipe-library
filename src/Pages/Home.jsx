import React, { useState } from 'react';
import { Container } from '@chakra-ui/react';
import { UserGreeting } from '../Components/User';
import { MealCategories, MealRecommendation } from '../Components/Meal';
import { users } from '../utils/mockData';

function ScreenHome() {
  const [user, setUser] = useState(users[0]);

  return (
    <Container maxW='container.xl' minH='93vh' bg='primary'>
      <UserGreeting user={user} />
      <MealRecommendation />
      <MealCategories />
    </Container>
  );
}

export default ScreenHome;
