import React from 'react';
import { Button, Text } from '@chakra-ui/react';

function CategoryButton({ category, isSelected, onClickHandler }) {
  const { id, text, icon } = category;
  return (
    <Button
      bg={isSelected ? 'testYellow' : 'primary'}
      color={isSelected ? 'primary' : 'white'}
      letterSpacing='1px'
      borderRadius='xl'
      fontSize='12px'
      _hover={{
        color: 'primary',
        bg: 'testYellow',
      }}
      _focus={{
        outline: 'none',
      }}
      _active={{
        bg: 'white',
      }}
      onClick={() => onClickHandler(id)}
    >
      <Text fontSize='18px'>{icon}</Text>
      <Text ml={3}>{text.toUpperCase()}</Text>
    </Button>
  );
}

export default CategoryButton;
