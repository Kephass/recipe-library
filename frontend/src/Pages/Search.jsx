import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useFetch from '../utils/hooks/useFetch';
import { recipeService } from '../api/recipes.service';

function ScreenSearch() {
  const { query } = useParams();
  // TODO: The URL returned by getRecipesByParams contains the data in a "results" object. How do we access that with useFetch?
  // const [searchedRcipes, isLoading, hasError] = useFetch(
  //   recipeService.getRecipesByParams({ query: query, number: 10 })
  // );
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  const fetchRecipeByQuery = async (recipeName) => {
    const fetchedData = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOON_API}&query=${query}&number=5`
    );

    const fetchedRecipes = fetchedData.data;
    setSearchedRecipes(fetchedRecipes.results);
  };

  // Re-fetch every time the query param changes
  useEffect(() => {
    fetchRecipeByQuery(query);
  }, [query]);

  if (!searchedRecipes) return <div>Fetching {query} recipes...</div>;

  return (
    <div>
      <h1>Search Recipe Screen</h1>
      {searchedRecipes.map((recipe) => {
        return (
          <Link id={recipe.id} to={`/recipes/${recipe.id}`}>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
          </Link>
        );
      })}
    </div>
  );
}

export default ScreenSearch;
