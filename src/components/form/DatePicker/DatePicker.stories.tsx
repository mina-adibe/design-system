import { LocalizationProvider, MonthPicker } from '@mui/lab';
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

export const MonthAndYear = Template.bind({});
Default.args = {
  label: 'Move-in Date',
  name: 'moveInDate',
  views: ['month', 'year'],
};

export const Month: Story<DatePickerProps> = () => (
  <LocalizationProvider dateAdapter={DateAdapter} locale={locale}>
    <Form>
      <MonthPicker
        date={new Date()}
        minDate={new Date('2020-01-01T00:00:00.000')}
        maxDate={new Date('2034-01-01T00:00:00.000')}
        onChange={() => {}}
      />
    </Form>
  </LocalizationProvider>
);
