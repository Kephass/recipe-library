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
        gap={1}
        mt={20}
        padding={'0 2rem 2rem 2rem'}
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
          border={'2px solid'}
          borderColor="testYellow"
          borderRadius="full"
          mt="-60px"
        />

        <Flex
          flexDir="column"
          justifyContent="center"
          lineHeight="1.2"
          height="45px"
        >
          <Text
            color="white"
            fontWeight="bold"
            textAlign="center"
            // Limit the Title to one line
            // maxWidth="90%"
            // whiteSpace="nowrap"
            // overflow="hidden"
            // textOverflow="ellipsis"
            noOfLines="2"
          >
            {recipe.title}
          </Text>
        </Flex>

        <Box color="testYellow" lineHeight="1">
          {/* Calculate how many Star icons we need, based on the difficulty */}
          {Array.apply(null, { length: Math.round(recipe.difficulty) }).map(
            (e, index) => (
              <StarFilled key={index} />
            )
          )}
        </Box>
        <Flex lineHeight="1" color="textGray">
          <Box>{recipe.readyInMinutes} Min</Box>
          <Box mx="1rem">|</Box>
          <Box>{mealDifficultyToString(recipe.difficulty)} Lvl</Box>
        </Flex>
      </Stack>
    </ReactLink>
  );
}

export default MealPreview;
