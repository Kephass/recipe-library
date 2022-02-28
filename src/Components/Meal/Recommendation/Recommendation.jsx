import React, { useEffect, useState } from 'react';
import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ClockCircleOutlined, FireOutlined } from '@ant-design/icons';
import { getRandomRecipe, getRecipe } from '../../../api/recipeSearch';
import * as timeHelper from '../../../utils/time';
import * as mockDataHelper from '../../../utils/mockData';
import * as mealHelper from '../../../utils/meal';

export function MealRecommendation() {
  const [recipe, setRecipe] = useState(mockDataHelper.meal);

  const [isFetchingRecipe, setIsFetchingRecipe] = useState(false);

  // When this component mounts, fetch a random Meal based on user's time
  useEffect(() => {
    // Comment the fetch call so we don't waste our daily limit!
    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    setIsFetchingRecipe(true);

    const params = { number: 1 };
    if (timeHelper.isBreakfastTime()) params.tags = 'breakfast';
    if (timeHelper.isLunchTime()) params.tags = 'main course';
    else if (timeHelper.isBreakfastTime()) params.tags = 'dessert';

    // const fetchedRecipes = await getRandomRecipe(params);
    let fetchedRecipes = null;
    if (fetchedRecipes && fetchedRecipes.recipes)
      setRecipe(fetchedRecipes.recipes[0]);
    setIsFetchingRecipe(false);
  };

  // Conditionally returns JSX for a loading message (animation ideally) or a Recommended Meal
  const renderedRecipe = () => {
    if (!recipe) return <div>Fetching meal recommendation...</div>;

    return (
      <Link to={`/recipes/${recipe.id}`}>
        <Flex
          background={`linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.35)), url('${recipe.image}')`}
          p={8}
          w={500}
          h={200}
          backgroundSize='cover'
          borderRadius={20}
          flexDir='column'
          lineHeight={1}
          color='white'
          justify='space-around'
        >
          <Text color='textFaint' fontWeight='bold'>
            {mealHelper.recommendationMessage()}
          </Text>
          <Text fontSize={24} color='testYellow'>
            {recipe.title}
          </Text>
          <Flex gap={4}>
            <Flex align='center' justify='center' gap={2}>
              <Box bg='testYellow' p={2} borderRadius='md'>
                <ClockCircleOutlined style={{ color: 'black' }} />
              </Box>
              <Text fontSize={24} color='testYellow'>
                {recipe.timeToPrepare}
              </Text>
            </Flex>
            <Flex align='center' justify='center' gap={2}>
              <Box bg='testYellow' p={2} borderRadius='md'>
                <FireOutlined style={{ color: 'black' }} />
              </Box>
              <Text fontSize={24} color='testYellow'>
                {recipe.difficulty}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Link>
    );
  };

  return (
    <Container maxW='container.xl' centerContent>
      {renderedRecipe()}
    </Container>
  );
}

export default MealRecommendation;
