import React, { Fragment, useState } from 'react';
import { Heading, Flex, Link, Spacer, Stack } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import CategoryButton from './CategoryButton';

const CATEGORIES = [
  { id: 1, text: 'breakfast', icon: '🍰' },
  { id: 2, text: 'main course', icon: '🍗' },
  { id: 3, text: 'dessert', icon: '🍰' },
  { id: 4, text: 'salad', icon: '🥬' },
  { id: 5, text: 'soup', icon: '🥣' },
];

const DEFAULT_CATEGORY = CATEGORIES[0].id;

function MealCategories() {
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);
  return (
    <Fragment>
      <Flex align='end' mt='10' mb='5'>
        <Heading as='h3'>Meal Category</Heading>
        <Spacer />
        <Link as={ReactLink} to='/categories' _hover={{ color: 'testYellow' }}>
          See all
        </Link>
      </Flex>
      <Stack spacing={4} direction='row' align='center'>
        {CATEGORIES.map((category) => (
          <CategoryButton
            key={category.id}
            onClickHandler={setSelectedCategory}
            isSelected={category.id === selectedCategory}
            category={category}
          />
        ))}
      </Stack>
    </Fragment>
  );
}

export default MealCategories;
