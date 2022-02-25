import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Heading, Image, Link, Text } from '@chakra-ui/react';
import { getRecipeById } from '../api/recipeSearch';

function Recipe() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});

  const getRecipe = async () => {
    if (recipeId == 1) return;

    const fetchedRecipe = await getRecipeById(recipeId);
    setRecipe(fetchedRecipe);
  };

  useEffect(() => {
    getRecipe();
  }, []);

  if (!recipe) return <div>Fetching recipe...</div>;

  return (
    <Container maxW='container.xl' minH='93vh'>
      <Heading as='h1'>Details for Recipe {recipeId}</Heading>
      <Text>{recipe.title}</Text>
      <Text>Time: {recipe.readyInMinutes}</Text>
      <Image src={recipe.image} />
      <Text>{recipe.summary}</Text>
      <Link href={recipe.sourceUrl} isExternal>
        Read Original Article
      </Link>
    </Container>
  );
}

export default Recipe;
