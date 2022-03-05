import UserProfile from './Profile';
import { users } from '../../../utils/mockData';

export default {
  title: 'Recipe App/User Profile',
  component: UserProfile,
  argTypes: {},
  args: {},
};

export const Davor = (args) => <UserProfile user={users[0]} {...args} />;
export const Felix = (args) => <UserProfile user={users[1]} {...args} />;
export const Matt = (args) => <UserProfile user={users[2]} {...args} />;
