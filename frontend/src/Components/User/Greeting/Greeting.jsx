import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import * as mealHelper from '../../../utils/meal';

function UserGreeting({ user }) {
  const navigate = useNavigate();

  return (
    <Flex justify="space-between" align="center" my={10}>
      <Box
        _hover={{ transform: 'scale(1.05)' }}
        transition={'transform 0.5s ease-in-out'}
        cursor={'pointer'}
        onClick={() => navigate(`/users/${user._id}`)}
      >
        <Heading as="h1">Hi, {user.name}</Heading>
        <Text color="textFaint" fontWeight="bold" fontSize={'1.75rem'}>
          {mealHelper.greetingMessage()}
        </Text>
      </Box>
      <Image
        border={'2px solid yellow'}
        boxShadow="xl"
        src={user.image}
        alt={user.name}
        borderRadius="3xl"
        height="100px"
        cursor={'pointer'}
        _hover={{ transform: 'scale(1.05)' }}
        transition={'transform 0.5s ease-in-out'}
        onClick={() => navigate(`/users/${user._id}`)}
      />
    </Flex>
  );
}

export default UserGreeting;
