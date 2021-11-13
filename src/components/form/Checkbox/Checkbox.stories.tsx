import { Meta, Story } from '@storybook/react';
import Form from '../Form/Form';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
  component: Checkbox,
  title: 'Components/Form/Checkbox',
  argTypes: {
    label: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<CheckboxProps> = ({ name, ...args }) => (
  <Form>
    <Checkbox name={name} {...args} />
  </Form>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Tick me',
  name: 'checkbox',
};
