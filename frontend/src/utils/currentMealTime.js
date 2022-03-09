const CURRENT_HOUR = new Date().getHours();
const MEALTIME = {
  breakfast: {
    greetingMessage: 'Get your day started with a nice breakfast!',
    recommendationMessage: 'Menu For Breakfast',
    mealType: 'breakfast', //API search tag query & category filter (insted ID)
  },
  launch: {
    greetingMessage: 'Ready to cook for dinner?',
    recommendationMessage: 'Menu For Lunch',
    mealType: 'main course',
  },
  dessert: {
    greetingMessage: 'Indulge in some dessert!',
    recommendationMessage: 'Menu For Dessert',
    mealType: 'dessert',
  },
  default: {
    greetingMessage: 'Come explore our recipes!',
    recommendationMessage: 'Menu For Any Time',
    mealType: 'soup',
  },
};

function currentMealTime() {
  if (CURRENT_HOUR > 4 && CURRENT_HOUR < 12) return MEALTIME.breakfast;
  if (CURRENT_HOUR >= 12 && CURRENT_HOUR < 16) return MEALTIME.launch;
  if (CURRENT_HOUR >= 16) return MEALTIME.dessert;
  return MEALTIME.default;
}

export default currentMealTime;
