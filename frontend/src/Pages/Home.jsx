import React, { useEffect, useState } from 'react';
import { Container } from '@chakra-ui/react';
import { UserGreeting } from '../Components/User';
import { MealCategories, MealRecommendation } from '../Components/Meal';
import { users } from '../utils/mockData';
import axios from 'axios';

function ScreenHome() {
  // TODO: Fetch this user from our database!
  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      const fetchedUsers = await axios.get('http://localhost:5000/api/users');
      setUser(fetchedUsers.data[0]);
      console.log(fetchedUsers);
    };

    getUser();
  }, []);

  return (
    <Container maxW="container.xl" minH="93vh" bg="primary">
      <UserGreeting user={user ? user : users[0]} />
      <MealRecommendation />
      <MealCategories />
    </Container>
  );
}

export default ScreenHome;
