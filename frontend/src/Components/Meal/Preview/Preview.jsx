import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Image, Flex, Stack, Text, Box } from '@chakra-ui/react';
import { StarFilled } from '@ant-design/icons';

// TODO: Make this a helper...somewhere!
const mealDifficultyToString = (difficulty) => {
  if (difficulty >= 4) return 'Challenging';
  if (difficulty >= 3) return 'Hard';
  if (difficulty >= 2) return 'Medium';

  return 'Easy';
};

function MealPreview({ recipe }) {
  const id = recipe._id ? recipe._id : recipe.id;
  return (
    <ReactLink to={`/recipes/${id}`}>
      <Stack
        key={recipe._id}
        spacing={1}
        direction="column"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
        mt={20}
        padding={'0 1rem 1rem 1rem'}
        backgroundColor="secondary"
        borderRadius="3xl"
        boxShadow="xl"
        width="260px"
        _hover={{ transform: 'scale(1.05)' }}
        transition={'transform 0.2s ease-in-out'}
      >
        <Image
          src={recipe.image}
          alt={recipe.title}
          boxSize="120px"
          fit="cover"
          align="center center"
          borderRadius="full"
          mx="auto"
          mt="-60px"
        />

        <Text
          color="white"
          fontWeight="bold"
          textAlign="center"
          // Limit the Title to one line
          maxWidth="90%"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
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
      </Stack>
    </ReactLink>
  );
}

export default MealPreview;
