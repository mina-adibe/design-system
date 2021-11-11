import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { Meta, Story } from '@storybook/react';
import locale from 'date-fns/locale/en-NZ';
import Form from '../Form/Form';
import DatePicker, { DatePickerProps } from './DatePicker';

export default {
  component: DatePicker,
  title: 'Components/Form/Date Picker',
  argTypes: {
    label: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<DatePickerProps> = ({ name, ...args }) => (
  <LocalizationProvider dateAdapter={DateAdapter} locale={locale}>
    <Form>
      <DatePicker name={name} {...args} />
    </Form>
  </LocalizationProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Move-in Date',
  name: 'moveInDate',
};
