import Visibility from '@mui/icons-material/Visibility';
import { IconButton, InputAdornment } from '@mui/material';
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
    errorMessage: {
      control: 'text',
    },
  },
} as Meta;

interface TextFieldStoryProps extends TextFieldProps {
  errorMessage?: string;
}

const Template: Story<TextFieldStoryProps> = ({ errorMessage, ...args }) => (
  <Form errors={errorMessage ? { [args.name]: errorMessage } : {}}>
    <TextField {...args} />
  </Form>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  required: false,
  name: 'username',
  placeholder: 'John Smith',
};

export const Money = Template.bind({});
Money.args = {
  label: 'Rent',
  required: true,
  name: 'rent',
  type: 'number',
  placeholder: '200.00',
  startAdornment: <InputAdornment position='start'>$</InputAdornment>,
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  required: true,
  name: 'rent',
  type: 'password',
  placeholder: '200.00',
  endAdornment: (
    <InputAdornment position='end'>
      <IconButton>
        <Visibility />
      </IconButton>
    </InputAdornment>
  ),
};

export const TextArea = Template.bind({});
TextArea.args = {
  label: 'Describe Yourself',
  name: 'rent',
  placeholder: 'Tell us about yourself!',
  multiline: true,
  rows: 3,
};
