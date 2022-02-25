import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { getRandomRecipe, getRecipe } from '../api/recipeSearch';

function RecommendedMeal() {
  const [recipe, setRecipe] = useState({
    id: 1,
    title: 'Placeholder Dish',
    image:
      'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg',
    difficulty: 3,
    rating: 3.5,
    duration: 40,
  });

  const [isFetchingRecipe, setIsFetchingRecipe] = useState(false);

  // When this component mounts, fetch a random Meal
  useEffect(() => {
    // Comment the fetch call so we don't waste our daily limit!
    // fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    setIsFetchingRecipe(true);

    const params = { number: 1 };
    if (isBreakfast()) params.tags = 'breakfast';
    else if (isDessertTime()) params.tags = 'dessert';

    const fetchedRecipes = await getRandomRecipe(params);
    setRecipe(fetchedRecipes.recipes[0]);
    setIsFetchingRecipe(false);
  };

  // Temp helper method for determining if it's breakfast time
  const isBreakfast = () => {
    const hours = new Date().getHours();
    return hours > 4 && hours < 12;
  };

  // Temp helper method for determing if dessert should be recommended
  const isDessertTime = () => {
    const hours = new Date().getHours();
    return hours > 15;
  };

  // Conditionally returns JSX for a loading message (animation ideally) or a Recommended Meal
  const renderedRecipe = () => {
    if (!recipe) return <div>Fetching meal recommendation...</div>;

    return (
      <Link to={`/recipes/${recipe.id}`}>
        <Center
          bgImage={recipe.image}
          p={8}
          w={350}
          h={200}
          backgroundSize='cover'
          borderRadius={20}
          flexDir='column'
          lineHeight={1}
        >
          <Heading
            as='h2'
            color='white'
            backdropFilter='auto'
            backdropBrightness='40%'
          >
            {recipe.title}
          </Heading>
          <Text fontSize={32} backdropFilter='auto' backdropBrightness='40%'>
            Difficulty: {recipe.difficulty}
          </Text>
          <Text fontSize={32} backdropFilter='auto' backdropBrightness='40%'>
            Time: {recipe.duration}
          </Text>
        </Center>
      </Link>
    );
  };
  return (
    <Container maxW='container.xl' centerContent>
      {renderedRecipe()}
      <Button
        onClick={fetchRecipe}
        loadingText='Fetching'
        isLoading={isFetchingRecipe}
        colorScheme='pink'
        mt={4}
      >
        New Recommendation
      </Button>
    </Container>
  );
}

export default RecommendedMeal;
