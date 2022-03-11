import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { recipeService } from '../api/recipes.service';
import { useFetch } from '../utils/hooks/useFetch';
import { MealPreview } from '../Components/Meal';
import { Container, Heading, Stack, Text } from '@chakra-ui/react';

function ScreenRecipes() {
  const navigate = useNavigate();

  const [data, loading, error] = useFetch(recipeService.getFromServer());

  useEffect(() => {}, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching from MongoDB</div>;
  }

  if (!data) {
    return <div>No fetched data to show</div>;
  }

  const renderedRecipeResults = (
    <Stack
      justifyContent="space-around"
      spacing={4}
      direction="row"
      align="center"
      flexWrap="wrap"
      gap={2}
      mt={20}
    >
      {data.map((recipe) => {
        return <MealPreview key={recipe._id} recipe={recipe} />;
      })}
    </Stack>
  );

  return (
    <Container maxW="container.xl" centerContent minH="93vh" bg="primary">
      <Heading as="h1" color="testYellow" my={4} textDecoration="underline">
        Here are some Recipes!
      </Heading>
      <Text>They are being fetched from MongoDB on localhost:5000!</Text>

      {data && renderedRecipeResults}
    </Container>
  );
}

export default ScreenRecipes;
