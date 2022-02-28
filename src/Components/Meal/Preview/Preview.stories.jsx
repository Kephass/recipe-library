import MealPreview from './Preview';
import { meal } from '../../../utils/mockData';

export default {
  title: 'Recipe App/Meal Preview',
  component: MealPreview,
};

export const Primary = () => <MealPreview recipe={meal} />;
