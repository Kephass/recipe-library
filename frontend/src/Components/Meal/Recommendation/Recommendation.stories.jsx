import React from 'react';
import { MealRecommendation as MealRecommendationComponent } from './Recommendation';

export default {
  title: 'Recipe App/Meal Recommendation',
  component: MealRecommendationComponent,
};

export const MealRecommendation = (args) => <MealRecommendationComponent />;
