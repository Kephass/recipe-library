import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Image, Flex, Text, Box } from '@chakra-ui/react';
import { StarFilled } from '@ant-design/icons';

// TODO: Make this a helper...somewhere!
const mealDifficultyToString = (difficulty) => {
  if (difficulty >= 4) return 'Challenging';
  if (difficulty >= 3) return 'Hard';
  if (difficulty >= 2) return 'Medium';

  return 'Easy';
};

function MealPreview({ recipe }) {
  return (
    <ReactLink to={`/recipes/${recipe.id}`}>
      <Flex
        key={recipe.id}
        spacing={4}
        direction="row"
        align="center"
        flexDirection="column"
        gap={2}
        my={4}
        backgroundColor="secondary"
        borderRadius="3xl"
        p={2}
        boxShadow="xl"
        width="260px"
        mb="4rem"
        _hover={{ transform: 'scale(1.05)' }}
        transition={'transform 0.5s ease-in-out'}
      >
        <Image
          src={recipe.image}
          alt={recipe.title}
          boxSize="120px"
          borderRadius="full"
          mx="auto"
          mt="-60px"
        />
        <Text color="white" fontWeight="bold" textAlign="center">
          {recipe.title}
        </Text>
        <Box color="testYellow">
          {/* Calculate how many Star icons we need, based on the difficulty */}
          {Array.apply(null, { length: Math.round(recipe.difficulty) }).map(
            (e, index) => (
              <StarFilled key={index} />
            )
          )}
        </Box>
        <Flex color="textGray">
          <Box>{recipe.readyInMinutes} Min</Box>
          <Box mx="1rem">|</Box>
          <Box>{mealDifficultyToString(recipe.difficulty)} Lvl</Box>
        </Flex>
      </Flex>
    </ReactLink>
  );
}

export default MealPreview;
