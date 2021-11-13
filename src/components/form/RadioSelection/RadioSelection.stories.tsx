import { Meta, Story } from '@storybook/react';
import Form from '../Form/Form';
import RadioSelection, { RadioSelectionProps } from './RadioSelection';

export default {
  component: RadioSelection,
  title: 'Components/Form/Radio Selection',
  argTypes: {
    label: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<RadioSelectionProps> = ({ name, ...args }) => (
  <Form>
    <RadioSelection name={name} {...args} />
  </Form>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Property Type',
  name: 'propertyType',
  options: [
    {
      label: 'House',
      value: 'house',
    },
    {
      label: 'Apartment',
      value: 'apartment',
    },
    {
      label: 'Townhouse',
      value: 'townhouse',
    },
  ],
};
