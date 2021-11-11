import { Meta, Story } from '@storybook/react';
import Form from '../Form/Form';
import TextField, { TextFieldProps } from './TextField';

export default {
  component: TextField,
  title: 'Components/Form/Text Field',
  argTypes: {
    label: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    readOnly: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => (
  <Form>
    <TextField {...args} />
  </Form>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  disabled: false,
  required: false,
  name: 'username',
  placeholder: 'John Smith',
};
