const Recipe = require('../models/recipeModel');
const asyncHandler = require('express-async-handler');

// @desc Get Recipes
// @route GET /api/recipes
// @access Private
const getRecipes = asyncHandler(async (req, res) => {
  const recipes = await Recipe.find({});
  res.status(200).json(recipes);
});

// @desc Get Recipe
// @route GET /api/recipes/:id
// @access Private
const getRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  res.status(200).json(recipe);
});

// @desc Set recipe
// @route POST /api/recipes
// @access Private
const setRecipe = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error('Please provide appropriate recipe information');
  }

  const { name, image, timeToPrep, difficulty, rating } = req.body;
  const recipe = await Recipe.create({ name, image, timeToPrep, difficulty, rating });
  res.status(200).json(recipe);
});

// @desc Update Recipe
// @route PUT /api/recipes/:id
// @access Private
const updateRecipe = asyncHandler(async (req, res) => {
  const { id: recipeId } = req.params;
  const recipe = await Recipe.findById(recipeId);

  if (!recipe) {
    res.status(400);
    throw new Error('Recipe not found');
  }

  // Pass in options with key of "new" set to true -- so we create the document if it does not exist
  const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, req.body, {
    new: true,
  });

  res.status(200).json(updatedRecipe);
});

// @desc Delete Recipe ser
// @route DELETE /api/recipes/:id
// @access Private
const deleteRecipe = asyncHandler(async (req, res) => {
  const { id: recipeId } = req.params;

  const recipe = await Recipe.findById(recipeId);

  if (!recipe) {
    res.status(400);
    throw new Error('Recipe not found');
  }

  await recipe.remove();

  res.status(200).json({ id: recipeId });
});

module.exports = {
  getRecipes,
  getRecipe,
  setRecipe,
  updateRecipe,
  deleteRecipe,
};
