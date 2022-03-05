import React, { Fragment, useEffect, useState } from 'react';
import { Heading, Flex, Link, Spacer, Stack } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import CategoryButton from './Button/Button';
import { getRecipe } from '../../../api/recipeSearch';
import * as mealHelper from '../../../utils/meal';
import * as mockDataHelper from '../../../utils/mockData';
import MealPreview from '../Preview/Preview';
import { CATEGORIES } from '../../../utils/mockData';

const DEFAULT_CATEGORY = mealHelper.recommendedMealCategory();

function MealCategories() {
	const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);
	const [categoryCount, setCategoryCount] = useState(6);
	const [suggestedRecipes, setSuggestedRecipes] = useState(
		mockDataHelper.results
	);

	useEffect(() => {
		const fetchMealsFromCategory = async () => {
			const params = {};
			params.type = CATEGORIES[selectedCategory - 1].text.replace(' ', '');
			// const fetchedRecipes = await getRecipe(params);
			let fetchedRecipes = null;
			setSuggestedRecipes(
				fetchedRecipes ? fetchedRecipes.results : mockDataHelper.results
			);
		};

		fetchMealsFromCategory();
	}, [selectedCategory]);

	const renderedSuggestionList = () => {
		return suggestedRecipes.map((recipe) => {
			return <MealPreview key={recipe.id} recipe={recipe} />;
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
			<Stack
				spacing={4}
				direction='row'
				flexWrap='wrap'
				justifyContent='center'
				gap={2}
				mb='5rem'
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
				justifyContent='space-around'
				spacing={4}
				direction='row'
				align='center'
				flexWrap='wrap'
				gap={2}
			>
				{renderedSuggestionList()}
			</Stack>
		</Fragment>
	);
}

export default MealCategories;
