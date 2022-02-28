import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import * as mealHelper from '../../../utils/meal';

function UserGreeting({ user }) {
  const navigate = useNavigate();

  return (
    <Flex justify='space-between' align='center' my={10}>
      <Box cursor={'pointer'} onClick={() => navigate(`/users/${user.id}`)}>
        <Heading as='h1'>Hi, {user.name}</Heading>
        <Text color='textFaint' fontWeight='bold'>
          {mealHelper.greetingMessage()}
        </Text>
      </Box>
      <Image
        src={user.image}
        alt={user.name}
        borderRadius='3xl'
        height='100px'
        cursor={'pointer'}
        onClick={() => navigate(`/users/${user.id}`)}
      />
    </Flex>
  );
}

export default UserGreeting;
