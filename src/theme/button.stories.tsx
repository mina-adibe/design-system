import { Box, Button, ButtonProps } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { GoogleIcon } from '..';

export default {
  title: 'Theme/Buttons',
  args: {
    variant: 'contained',
    text: 'Click me',
    color: 'primary',
    size: 'medium',
    fullWidth: false,
  },
  argTypes: {
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'select' },
    },
    color: {
      options: ['primary', 'secondary', 'warning', 'error', 'info', 'success'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

export const Default: Story<ButtonProps & { text: string }> = ({ text, ...args }) => (
  <Box sx={{ width: 300, display: 'flex', justifyContent: 'center' }}>
    <Button {...args}>{text}</Button>
  </Box>
);

export const GoogleSignIn: Story<ButtonProps & { text: string }> = ({ text, ...args }) => (
  <Box sx={{ width: 300, display: 'flex', justifyContent: 'center' }}>
    <Button {...args} startIcon={<GoogleIcon />}>
      {text}
    </Button>
  </Box>
);

GoogleSignIn.args = {
  color: 'secondary',
  variant: 'outlined',
  text: 'Sign in with Google',
};
