import React from 'react';
import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ClockCircleOutlined, FireOutlined } from '@ant-design/icons';
import currentMealTime from '../../../utils/currentMealTime';
import useFetch from '../../../utils/hooks/useFetch';
import { recipeService } from '../../../api/recipes.service';

export function MealRecommendation() {
  const { mealType, recommendationMessage } = currentMealTime();

  /* Implementation of useFetch hook. Still grasping how to implent a cleaner way to pass
  helper fn in this fetch custom hook and how to pass helpers that accept arguments like ex: recipe_id. 
  I still don't if this is good approach or not. Please tell me what you think? */
  const [data, loading, error] = useFetch(
    recipeService.getRecipesByParams({ type: mealType, number: 1 })
  );

  console.log('DATA', data);

  if (error) {
    // This need to go in some global Error handler.
    console.log(error);
    return <p>Something went wrong!</p>;
  }

  //This should be returning UI component with some spiner.
  if (loading) return <p>Loading...</p>;
  return (
    <Container maxW="container.xl" centerContent>
      <Link to={`/recipes/${data.results[0].id}`}>
        <Flex
          border={'2px solid gray'}
          boxShadow={'xl'}
          background={`linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.35)), url('${data.results[0].image}')`}
          p={8}
          w={600}
          h={200}
          backgroundSize="cover"
          backgroundPosition={'center'}
          borderRadius={20}
          flexDir="column"
          lineHeight={1}
          color="white"
          justify="space-around"
        >
          <Text color="textFaint" fontWeight="bold">
            {recommendationMessage}
          </Text>
          <Text fontSize={24} color="testYellow">
            {data.results[0].title}
          </Text>
          <Flex gap={4}>
            <Flex align="center" justify="center" gap={2}>
              <Box bg="testYellow" p={2} borderRadius="md">
                <ClockCircleOutlined style={{ color: 'black' }} />
              </Box>
              <Text fontSize={24} color="testYellow">
                {data.results[0].readyInMinutes || '30 min'}
              </Text>
            </Flex>
            <Flex align="center" justify="center" gap={2}>
              <Box bg="testYellow" p={2} borderRadius="md">
                <FireOutlined style={{ color: 'black' }} />
              </Box>
              <Text fontSize={24} color="testYellow">
                {data.results[0].difficulty || 'Easy lvl'}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Link>
    </Container>
  );
}

export default MealRecommendation;
