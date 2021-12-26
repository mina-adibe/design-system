import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { Button, Stack } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import locale from 'date-fns/locale/en-NZ';
import { useState } from 'react';
import Form from '../Form/Form';
import Search, { SearchProps } from './Search';

export default {
  component: Search,
  title: 'Components/Form/Search',
  argTypes: {
    label: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<SearchProps<any>> = (args) => {
  const [data, setData] = useState();

  const onSubmit = (v: any) => {
    setData(v);
  };

  return (
    <LocalizationProvider dateAdapter={DateAdapter} locale={locale}>
      <Form onSubmit={onSubmit}>
        <Stack sx={{ width: '300px' }} spacing={2}>
          <Search {...args} />
          <Button type='submit' variant='contained'>
            Submit
          </Button>
        </Stack>
        {JSON.stringify(data)}
      </Form>
    </LocalizationProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: 'locationOfInterest',
  label: 'find me a room',
  placeholder: 'Something, Sydney',
  searchFn: async (q) => [{ label: q }],
};
