// File to store some mock development data that we can reference easily across multiple files

// Mock user of the app
export const user = {
  id: 1,
  name: 'Arnold',
  image:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  favoriteMeals: [2, 4, 11], // Id array of user's favorite meals/recipes
};

// Mock meal
export const meal = {
  id: 1,
  title: 'Placeholder Burger & Fries',
  image:
    'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg',
  difficulty: 3,
  timeToPrepare: 40,
  rating: 3.8,
};
