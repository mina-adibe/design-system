import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { Stack, TextField } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import locale from 'date-fns/locale/en-NZ';
import { useState } from 'react';
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

const Template: Story<AreaSearchProps> = () => {
  const [data, setData] = useState();

  const onSubmit = (v: any) => {
    setData(v);
  };

  return (
    <LocalizationProvider dateAdapter={DateAdapter} locale={locale}>
      <Form onSubmit={onSubmit}>
        <Stack sx={{ width: '300px' }} spacing={2}>
          <AreaSearch apiKey={'AIzaSyD4ecsun_itWQdd-KVPEuuZjXCKET21mUQ'}>
            {({ results, search }) => (
              <>
                <TextField onChange={(e) => search(e.target.value)} />
                {JSON.stringify(results)}
              </>
            )}
          </AreaSearch>
        </Stack>
        {JSON.stringify(data)}
      </Form>
    </LocalizationProvider>
  );
};

export const Default = Template.bind({});
