import Divider from '@mui/material/Divider';
import { Meta, Story } from '@storybook/react';
import UserMenu, { UserMenuProps } from './UserMenu';
import UserMenuItem from './UserMenuItem';

export default {
  component: UserMenu,
  title: 'Components/UserMenu',
} as Meta;

interface UserMenuStoryProps extends UserMenuProps {}

const Template: Story<UserMenuStoryProps> = () => (
  <UserMenu>
    <UserMenuItem>
      <b>Sign up</b>
    </UserMenuItem>
    <UserMenuItem>Sign in</UserMenuItem>
    <Divider />
    <UserMenuItem onClick={() => alert('wowe')}>List my room</UserMenuItem>
  </UserMenu>
);

export const Default = Template.bind({});
