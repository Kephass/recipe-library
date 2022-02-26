// Temp helper method for determining if it's breakfast time
export const isBreakfastTime = () => {
  const hours = new Date().getHours();
  return hours > 4 && hours < 12;
};

export const isLunchTime = () => {
  const hours = new Date().getHours();
  return hours >= 12 && hours < 16;
};

// Temp helper method for determing if dessert should be recommended
export const isDessertTime = () => {
  const hours = new Date().getHours();
  return hours >= 16;
};
