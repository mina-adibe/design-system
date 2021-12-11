import { Box, Button, Card, Stack } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { string } from 'yup';
import { TextField } from '..';
import MultistepForm, { MultistepFormProps } from './MultistepForm';

export default {
  component: MultistepForm,
  title: 'Components/MultistepForm',
} as Meta;

interface MultistepFormStoryProps extends MultistepFormProps {}

const schemas = [
  {
    a: string().required().min(3),
  },
  {
    b: string().required(),
  },
];

const handleSubmit = (v: any) => {
  console.log(v);
};

const Template: Story<MultistepFormStoryProps> = () => (
  <MultistepForm
    onSubmit={handleSubmit}
    schema={schemas}
    render={({ form, goForward, goBack }) => (
      <Card>
        <Box sx={{ m: 2 }}>{form}</Box>
        <Button onClick={goBack}>Back</Button>
        <Button onClick={goForward}>Next</Button>
      </Card>
    )}
  >
    <Stack spacing={2}>
      <TextField name='a' label='Value A' />
    </Stack>
    <Stack spacing={2}>
      <TextField name='b' label='Value B' />
      <TextField name='c' label='Value C' />
    </Stack>
    <Stack>Thanks!</Stack>
  </MultistepForm>
);

export const Default = Template.bind({});
