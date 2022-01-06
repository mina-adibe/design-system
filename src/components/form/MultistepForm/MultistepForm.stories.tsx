import { Box, Button, Card, CardContent, Stack, CardActions } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { string } from 'yup';
import { TextField } from '..';
import FormStep from './FormStep';
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
    render={({ form, goForward, goBack, step, numSteps, isConfirmationPage }) => (
      <Card>
        <CardContent>
          <p>
            step {step} of {numSteps}
          </p>
          <Box sx={{ m: 2 }}>{form}</Box>
        </CardContent>
        <CardActions>
          {!isConfirmationPage && (
            <>
              <Button onClick={goBack}>Back</Button>
              <Button onClick={goForward}>Next</Button>
            </>
          )}
        </CardActions>
      </Card>
    )}
  >
    {() => (
      <>
        <FormStep step={0} schema={schemas[0]}>
          <Stack spacing={2}>
            <TextField name='a' label='Value A' />
          </Stack>
        </FormStep>
        <FormStep step={1} schema={schemas[1]}>
          <Stack spacing={2}>
            <TextField name='b' label='Value B' />
            <TextField name='c' label='Value C' />
          </Stack>
        </FormStep>
        <FormStep step={2} confirmationPage>
          <Stack>Thanks!</Stack>
        </FormStep>{' '}
      </>
    )}
  </MultistepForm>
);

export const Default = Template.bind({});
