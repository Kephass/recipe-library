import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { recipeService } from '../api/recipes.service';
import { useFetch } from '../utils/hooks/useFetch';

function ScreenRecipes() {
  const navigate = useNavigate();

  const [data, loading, error] = useFetch(recipeService.getFromServer());

  useEffect(() => {}, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching from MongoDB</div>;
  }

  if (!data) {
    return <div>No fetched data to show</div>;
  }

  const renderedRecipeResults = (
    <ul>
      {data.map((recipe) => {
        return (
          <li key={recipe._id}>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
            <div>Prep Time: {recipe.timeToPrepare} mins</div>
            <div>Difficult: {recipe.difficulty}</div>
            <div>Rating: {recipe.rating}</div>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div>
      <div className="recipes mb-9  text-center">
        <h1>Here are some recipes</h1>
        <p>They are being fetched from MongoDB on localhost:5000!</p>
        {data && renderedRecipeResults}
        <button
          className="bg-green-500 rounded p-2"
          onClick={() => navigate('/')}
        >
          Back Home
        </button>
      </div>
    </div>
  );
}

export default ScreenRecipes;
