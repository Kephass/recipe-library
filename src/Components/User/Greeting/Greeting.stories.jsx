import UserGreeting from './Greeting';
import { users } from '../../../utils/mockData';

export default {
  title: 'Recipe App/User Greeting',
  component: UserGreeting,
  argTypes: {},
  args: {},
};

export const Default = (args) => <UserGreeting user={users[0]} {...args} />;
