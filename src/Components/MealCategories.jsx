import React, { Fragment, useEffect, useState } from 'react';
import {
  Heading,
  Image,
  Flex,
  Link,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import CategoryButton from './CategoryButton';
import { getRecipe } from '../api/recipeSearch';
import * as mealHelper from '../helpers/meal';

const CATEGORIES = [
  { id: 1, text: 'breakfast', icon: '🍰' },
  { id: 2, text: 'main course', icon: '🍗' },
  { id: 3, text: 'dessert', icon: '🍰' },
  { id: 4, text: 'salad', icon: '🥬' },
  { id: 5, text: 'soup', icon: '🥣' },
  { id: 6, text: 'side dish', icon: '🤷‍♂️' },
  { id: 7, text: 'appetizer', icon: '🤷‍♂️' },
  { id: 8, text: 'beverage', icon: '🍺' },
  { id: 9, text: 'snack', icon: '🤷‍♂️' },
  { id: 10, text: 'drink', icon: '🍹' },
  { id: 11, text: 'fingerfood', icon: '🤷‍♂️' },
  { id: 12, text: 'bread', icon: '🍞' },
  { id: 13, text: 'sauce', icon: '🤷‍♂️' },
  { id: 14, text: 'marinade', icon: '🤷‍♂️' },
];

const DEFAULT_CATEGORY = mealHelper.recommendedMealCategory();

function MealCategories() {
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);
  const [categoryCount, setCategoryCount] = useState(5);
  const [suggestedRecipes, setSuggestedRecipes] = useState([]);

  useEffect(() => {
    const fetchMealsFromCategory = async () => {
      const params = {};
      params.type = CATEGORIES[selectedCategory - 1].text.replace(' ', '');
      const fetchedRecipes = await getRecipe(params);
      setSuggestedRecipes(fetchedRecipes.results);
      console.log('Category changed!', params.type);
    };

    fetchMealsFromCategory();
  }, [selectedCategory]);

  const renderedSuggestionList = () => {
    return suggestedRecipes.map((recipe) => {
      return (
        <ReactLink to={`/recipes/${recipe.id}`}>
          <Flex
            key={recipe.id}
            spacing={4}
            direction='row'
            align='center'
            flexWrap='wrap'
            gap={2}
            my={4}
            backgroundColor='secondary'
            borderRadius='3xl'
            p={2}
            boxShadow='xl'
          >
            <Image
              src={recipe.image}
              alt={recipe.title}
              borderRadius='2xl'
              height='100px'
            />
            <Text>{recipe.title}</Text>
          </Flex>
        </ReactLink>
      );
    });
  };
  return (
    <Fragment>
      <Flex align='end' mt='10' mb='5'>
        <Heading as='h3'>Meal Category</Heading>
        <Spacer />
        <Link
          as={ReactLink}
          to='#'
          _hover={{ color: 'testYellow' }}
          onClick={() => {
            setCategoryCount(CATEGORIES.length);
          }}
        >
          See all
        </Link>
      </Flex>
      <Stack spacing={4} direction='row' align='center' flexWrap='wrap' gap={2}>
        {CATEGORIES.slice(0, categoryCount).map((category) => (
          <CategoryButton
            key={category.id}
            onClickHandler={setSelectedCategory}
            isSelected={category.id === selectedCategory}
            category={category}
          />
        ))}
      </Stack>
      <Stack spacing={4} direction='row' align='center' flexWrap='wrap' gap={2}>
        {renderedSuggestionList()}
      </Stack>
    </Fragment>
  );
}

export default MealCategories;
