import React, { useEffect, useState } from 'react';
import { MealPreview } from '../../Meal';
import { Heading, Image, Stack, Text } from '@chakra-ui/react';

function UserProfile({ user }) {
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  useEffect(() => {
    setFavoriteMeals(user.favoriteMeals);
  }, [user.favoriteMeals]);

  return (
    <React.Fragment>
      <Heading as="h1" color="testYellow" my={4} textDecoration="underline">
        {user.name}'s Profile
      </Heading>
      <Image src={user.image} alt={user.name} />
      <Text>Favorite Meals {user.favoriteMeals.length}:</Text>
      <Stack
        justifyContent="space-around"
        spacing={4}
        direction="row"
        align="center"
        flexWrap="wrap"
        gap={2}
        mt={20}
      >
        {favoriteMeals.map((favorite) => (
          <MealPreview recipe={favorite} />
        ))}
      </Stack>
    </React.Fragment>
  );
}

export default UserProfile;
