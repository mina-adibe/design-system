import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { Meta, Story } from '@storybook/react';
import locale from 'date-fns/locale/en-NZ';
import Form from '../Form/Form';
import CalendarPicker, { CalendarPickerProps } from './CalendarPicker';

export default {
  component: CalendarPicker,
  title: 'Components/Form/Calendar Picker',
  argTypes: {
    label: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<CalendarPickerProps> = ({ name, ...args }) => (
  <LocalizationProvider dateAdapter={DateAdapter} locale={locale}>
    <Form>
      <CalendarPicker name={name} {...args} />
    </Form>
  </LocalizationProvider>
);

export const Default = Template.bind({});
Default.args = {
  name: 'moveInDate',
};
