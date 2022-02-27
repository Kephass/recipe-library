import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
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
  console.log(recipe);

  return (
    <Container
      maxW='container.xl'
      minH='93vh'
      py={6}
      centerContent
      bgColor='primary'
    >
      <Image src={recipe.image} />
      <Heading as='h1'>{recipe.title}</Heading>
      <HStack>
        <Box>
          <Text>**</Text>
          <Text>Time: {recipe.readyInMinutes}</Text>
          <Text>Cooking</Text>
        </Box>
        <Box>
          <Text>**</Text>
          <Text>4.08</Text>
          <Text>Rating</Text>
        </Box>
        <Box>
          <Text>**</Text>
          <Text>Easy level</Text>
          <Text>Recipes</Text>
        </Box>
      </HStack>

      <Text>{recipe.summary}</Text>
      <Link href={recipe.sourceUrl} isExternal>
        Read Original Article
      </Link>
    </Container>
  );
}

export default Recipe;
