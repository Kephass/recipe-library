const express = require('express');
const router = express.Router();

const {
    getRecipes,
    getRecipe,
    setRecipe,
    updateRecipe,
    deleteRecipe,
  } = require('../controllers/recipeController');
  
  // GET all Recipes and Get and Create a Recipe
  router.route('/').get(getRecipes).post(setRecipe);
  
  // Get, Update and Delete a Recipe by ID
  router.route('/:id').get(getRecipe).delete(deleteRecipe).put(updateRecipe);

module.exports = router;
