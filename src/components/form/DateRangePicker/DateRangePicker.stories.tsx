import { LocalizationProvider, MonthPicker } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { Meta, Story } from '@storybook/react';
import locale from 'date-fns/locale/en-NZ';
import { useFormContext } from 'react-hook-form';
import Form from '../Form/Form';
import DateRangePicker, { DateRangePickerProps } from './DateRangePicker';

export default {
  component: DateRangePicker,
  title: 'Components/Form/Date Range Picker',
  argTypes: {
    label: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
  },
} as Meta;

const ValueRenderer = () => {
  const ctx = useFormContext();

  return (
    <div>
      <pre>value: {JSON.stringify(ctx.watch(), null, 2)}</pre>
    </div>
  );
};

const Template: Story<DateRangePickerProps> = ({ name, ...args }) => (
  <LocalizationProvider dateAdapter={DateAdapter} locale={locale}>
    <Form>
      <DateRangePicker name={name} {...args} />
      <ValueRenderer />
    </Form>
  </LocalizationProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Available Dates',
  name: 'dates',
};
