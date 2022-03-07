import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import {
  Heading,
  Image,
  Flex,
  Link,
  Spacer,
  Stack,
  Text,
  Box,
} from '@chakra-ui/react';
import { StarFilled } from '@ant-design/icons';

function MealPreview({ recipe }) {
  return (
    <ReactLink to={`/recipes/${recipe.id}`}>
      <Flex
        key={recipe.id}
        spacing={4}
        direction='row'
        align='center'
        flexDirection='column'
        gap={2}
        my={4}
        backgroundColor='secondary'
        borderRadius='3xl'
        p={2}
        boxShadow='xl'
        width='260px'
        mb='4rem'
      >
        <Image
          src={recipe.image}
          alt={recipe.title}
          boxSize='120px'
          borderRadius='full'
          mx='auto'
          mt='-60px'
        />
        <Text color='white' fontWeight='bold' textAlign='center'>
          {recipe.title}
        </Text>
        <Box color='testYellow'>
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarFilled />
        </Box>
        <Flex color='textGray'>
          <Box>{recipe.readyInMinutes} Min</Box>
          <Box mx='1rem'>|</Box>
          <Box>Lvl</Box>
        </Flex>
      </Flex>
    </ReactLink>
  );
}

export default MealPreview;
