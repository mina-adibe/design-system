import { Meta, Story } from '@storybook/react';
import { useFormContext } from 'react-hook-form';
import { TextField } from '..';
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

const ValuePrinter = () => {
  const ctx = useFormContext();

  return (
    <div>
      <pre>value: {JSON.stringify(ctx.watch(), null, 2)}</pre>
    </div>
  );
};

const Template: Story<CheckboxProps> = (args) => (
  <Form defaultValues={{ checkbox: true }}>
    <Checkbox {...args} />
    <TextField name='test' />
    <ValuePrinter />
  </Form>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Tick me',
  name: 'checkbox',
};
