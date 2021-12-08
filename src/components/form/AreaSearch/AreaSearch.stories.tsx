import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { Stack } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import locale from 'date-fns/locale/en-NZ';
import Form from '../Form/Form';
import AreaSearch, { AreaSearchProps } from './AreaSearch';

export default {
  component: AreaSearch,
  title: 'Components/Form/Area Picker',
  argTypes: {
    label: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<AreaSearchProps> = (args) => (
  <LocalizationProvider dateAdapter={DateAdapter} locale={locale}>
    <Form>
      <Stack sx={{ width: '300px' }}>
        <AreaSearch {...args} />
      </Stack>
    </Form>
  </LocalizationProvider>
);

export const Default = Template.bind({});
Default.args = {
  name: 'locationOfInterest',
  label: 'find me a room',
  placeholder: 'Something, Sydney',
};
