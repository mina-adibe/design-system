import { Button, Stack, Typography } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import TextField from '../TextField/TextField';
import Form, { FormProps } from './Form';

export default {
  component: Form,
  title: 'Components/Form/Form',
} as Meta;

const Template: Story<FormProps> = () => (
  <Form>
    <Stack spacing={1}>
      <Typography>Login</Typography>
      <TextField name='username' label='Username' />
      <TextField name='password' label='Password' />
      <Button variant='contained'>Submit</Button>
    </Stack>
  </Form>
);

export const LoginForm = Template.bind({});
