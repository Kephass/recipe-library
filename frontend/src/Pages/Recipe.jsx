import React, { useState } from 'react';
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
  Spinner,
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
  const [recipe, isLoading, error] = useFetch(
    recipeService.getByIdFromServer(recipeId)
  );
  // useFetch(recipeService.getById(recipeId));
  const [currentView, setCurrentView] = useState('ingredients');

  if (isLoading)
    return (
      <Container
        maxW="container.xl"
        minH="93vh"
        py={10}
        centerContent
        bgColor="primary"
      >
        <Stack direction="row">
          <Text>Fetching Recipe Data</Text>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="lg"
          />
        </Stack>
      </Container>
    );

  return (
    <Container
      maxW="container.xl"
      minH="93vh"
      py={10}
      centerContent
      bgColor="primary"
    >
      <Image src={recipe.image} maxH="250px" borderRadius="lg" />
      <Heading as="h1" m="4rem 1rem 3rem 1rem">
        {recipe.title}
      </Heading>
      <HStack gap="5rem" mb="3rem">
        <Stack
          lineHeight="1"
          justifyContent="center"
          alignItems="center"
          gap="-1rem"
        >
          <ClockCircleFilled style={{ color: '#ffc20d' }} />
          <Text>{recipe.readyInMinutes} Minute</Text>
          <Text>Cooking</Text>
        </Stack>
        <Stack lineHeight="1" justifyContent="center" alignItems="center">
          <StarFilled style={{ color: '#ffc20d' }} />
          <Text>4.08</Text>
          <Text>Rating</Text>
        </Stack>
        <Stack lineHeight="1" justifyContent="center" alignItems="center">
          <FireFilled style={{ color: '#ffc20d' }} />
          <Text>Easy level</Text>
          <Text>Difficulty</Text>
        </Stack>
      </HStack>

      <ButtonGroup
        backgroundColor="#1a1a1a"
        borderRadius="full"
        padding="0.5rem"
        // colorScheme="yellow"
        spacing="3rem"
        mb="2rem"
      >
        <Button
          isActive={currentView === 'instructions'}
          onClick={() => setCurrentView('instructions')}
          borderRadius="full"
          color="testYellow"
          bgColor="transparent"
          _hover={{ backgroundColor: 'secondary' }}
          _active={{ backgroundColor: 'secondary' }}
          padding="0.5rem 3rem"
        >
          Instructions
        </Button>
        <Button
          isActive={currentView === 'ingredients'}
          onClick={() => setCurrentView('ingredients')}
          borderRadius="full"
          color="testYellow"
          bgColor="transparent"
          _hover={{ backgroundColor: 'secondary' }}
          _active={{ backgroundColor: 'secondary' }}
          padding="0.5rem 3rem"
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
        <Box>
          {recipe.extendedIngredients.map((ingredient) => (
            <Text key={ingredient.id}>{ingredient.original}</Text>
          ))}
        </Box>
      )}
    </Container>
  );
}

export default ScreenRecipe;
