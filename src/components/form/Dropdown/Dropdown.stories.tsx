import { MenuItem } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import Form from '../Form/Form';
import Dropdown from './Dropdown';

export default {
  component: Dropdown,
  title: 'Components/Form/Dropdown',
  argTypes: {},
} as Meta;

interface DropdownStoryProps {
  label: string;
  name: string;
}

const Template: Story<DropdownStoryProps> = (args) => (
  <Form>
    <Dropdown {...args}>
      <MenuItem value='House'>House</MenuItem>
      <MenuItem value='Apartment'>Apartment</MenuItem>
      <MenuItem value='Townhouse'>Townhouse</MenuItem>
    </Dropdown>
  </Form>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Property Type',
  name: 'propertyType',
};
