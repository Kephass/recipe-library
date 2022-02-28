import CategoryButton from './Button';
import { CATEGORIES } from '../../../../utils/mockData';

export default {
  title: 'Recipe App/Category Button',
  component: CategoryButton,
  argTypes: {},
  args: {
    isSelected: false,
    category: CATEGORIES[2],
  },
};

const Template = (args) => <CategoryButton {...args} />;

export const Default = Template.bind({});
export const Salad = Template.bind({});

Default.args = {};

Salad.args = {
  isSelected: true,
  category: CATEGORIES[3],
};
