import React, { Fragment, useEffect, useState } from 'react';
import { Heading, Flex, Link, Spacer, Stack } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import CategoryButton from './Button/Button';
import { getRecipe } from '../../../api/recipeSearch';
import * as mealHelper from '../../../utils/meal';
import MealPreview from '../Preview/Preview';
import { CATEGORIES } from '../../../utils/mockData';
import { recipeService } from '../../../api/recipes.service';
import { useFetch } from '../../../utils/hooks/useFetch';
import axios from 'axios';

const DEFAULT_CATEGORY = mealHelper.recommendedMealCategory();

function MealCategories() {
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);
  const [categoryCount, setCategoryCount] = useState(6);

  //   Using non-useFetch, grabbing placeholder meals from our database
  const [suggestedRecipes, setSuggestedRecipes] = useState([]);

  //   Using useFetch, grabbing placeholder meals from our database
  //   const [suggestedRecipes, isLoading, error] = useFetch(
  //     recipeService.getFromServer()
  //   );

  useEffect(() => {
    const fetchMealsFromCategory = async () => {
      const params = {};
      params.type = CATEGORIES[selectedCategory - 1].text.replace(' ', '');
      // const fetchedRecipes = await getRecipe(params);
      let fetchedRecipes = null;

      try {
        const response = await axios.get(`http://localhost:5000/api/recipes`);
        fetchedRecipes = response.data;
      } catch (error) {
        console.log('Error fetching recipes: ', error);
      }

      // TODO: How do we re-fetch when category chagnes using useFetch?
      setSuggestedRecipes(fetchedRecipes);
    };

    fetchMealsFromCategory();
  }, [selectedCategory]);

  const renderedSuggestionList = () => {
    if (!suggestedRecipes) return;

    return suggestedRecipes.map((recipe) => {
      return <MealPreview key={recipe.id} recipe={recipe} />;
    });
  };

  return (
    <Fragment>
      <Flex align="end" mt="10" mb="5">
        <Heading as="h3">Meal Category</Heading>
        <Spacer />
        <Link
          as={ReactLink}
          to="#"
          _hover={{ color: 'testYellow' }}
          onClick={() => {
            setCategoryCount(CATEGORIES.length);
          }}
        >
          See all
        </Link>
      </Flex>
      <Stack
        spacing={4}
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        gap={2}
        mb="5rem"
      >
        {CATEGORIES.slice(0, categoryCount).map((category) => (
          <CategoryButton
            key={category.id}
            onClickHandler={setSelectedCategory}
            isSelected={category.id === selectedCategory}
            category={category}
          />
        ))}
      </Stack>
      <Stack
        justifyContent="space-around"
        spacing={4}
        direction="row"
        align="center"
        flexWrap="wrap"
        gap={2}
      >
        {renderedSuggestionList()}
      </Stack>
    </Fragment>
  );
}

export default MealCategories;
