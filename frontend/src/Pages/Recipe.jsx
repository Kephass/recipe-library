import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Button,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  ButtonGroup,
} from '@chakra-ui/react';
import { ClockCircleFilled, FireFilled, StarFilled } from '@ant-design/icons';
import { recipeService } from '../api/recipes.service';
import { getRecipeById } from '../api/recipeSearch';
import useFetch from '../utils/hooks/useFetch';

function ScreenRecipe() {
  const { recipeId } = useParams();
  const [recipe, loading, error] = useFetch(recipeService.getById(recipeId));

  // const [recipe, setRecipe] = useState();
  const [currentView, setCurrentView] = useState('ingredients');

  // const getRecipe = async () => {
  //   const fetchedRecipe = await getRecipeById(recipeId);
  //   setRecipe(fetchedRecipe);
  // };

  useEffect(() => {
    // getRecipe();
    console.log('Recipe', recipe);
  }, [recipeId]);

  if (!recipe) return <div>Fetching recipe...</div>;

  return (
    <Container
      maxW="container.xl"
      minH="93vh"
      py={6}
      centerContent
      bgColor="primary"
    >
      <Image src={recipe.image} />
      <Heading as="h1">{recipe.title}</Heading>
      <HStack>
        <Box>
          <ClockCircleFilled style={{ color: '#ffc20d' }} />
          <Text>{recipe.readyInMinutes} Minute</Text>
          <Text>Cooking</Text>
        </Box>
        <Box>
          <StarFilled style={{ color: '#ffc20d' }} />
          <Text>4.08</Text>
          <Text>Rating</Text>
        </Box>
        <Box>
          <FireFilled style={{ color: '#ffc20d' }} />
          <Text>Easy level</Text>
          <Text>Difficulty</Text>
        </Box>
      </HStack>

      <ButtonGroup colorScheme="yellow" spacing="6">
        <Button
          isActive={currentView === 'instructions'}
          onClick={() => setCurrentView('instructions')}
        >
          Instructions
        </Button>
        <Button
          isActive={currentView === 'ingredients'}
          onClick={() => setCurrentView('ingredients')}
        >
          Ingredients
        </Button>
      </ButtonGroup>

      <Text dangerouslySetInnerHTML={{ __html: recipe.summary }}></Text>
      <Link href={recipe.sourceUrl} isExternal>
        Read Original Article
      </Link>

      {currentView === 'instructions' && (
        <Text dangerouslySetInnerHTML={{ __html: recipe.instructions }}></Text>
      )}

      {currentView === 'ingredients' && (
        <ul>
          {recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
      )}
    </Container>
  );
}

export default ScreenRecipe;
