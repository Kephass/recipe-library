//I implemented this fetchWrapper helper function for every case of request.
//Maybe than we don't need additional axios library?
import { fetchWrapper } from '../utils/fetchWrapper';
const API_KEY = process.env.REACT_APP_SPOON_API;
const BASE_API_URL = `https://api.spoonacular.com/recipes/`;

//I' made this service so i don't mess with code what matt did, if this is not a good approach

export const recipeService = {
  getRandom,
  getById,
  getByMealType,
  create,
  getByParams,
};

function getByParams(params) {
  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`;
  url += '?' + new URLSearchParams(params).toString();

  console.log('PARAMS', params);
  console.log('URL', url);
}

function getRandom() {
  return fetchWrapper.get(`${BASE_API_URL}random?number=1&apiKey=${API_KEY}`);
}

function getById(id) {
  // return fetchWrapper.get(
  //   `${BASE_API_URL}${id}/information?includeNutrition=false&apiKey=${API_KEY}`
  // );

  return `${BASE_API_URL}${id}/information?includeNutrition=false&apiKey=${API_KEY}`;
}

function getByMealType(mealType) {
  //TODO
}

function create(params) {
  //TODO
  return fetchWrapper.post(BASE_API_URL, params);
}
