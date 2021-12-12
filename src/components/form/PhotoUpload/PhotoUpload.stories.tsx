import { Button, Stack } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { Form } from '..';
import PhotoUpload, { PhotoUploadProps } from './PhotoUpload';

export default {
  component: PhotoUpload,
  title: 'Components/Form/Photo Upload',
  argTypes: {
    label: {
      control: 'text',
    },
  },
  args: {
    label: 'Upload Photos',
  },
} as Meta;

interface PhotoUploadStoryProps extends PhotoUploadProps {}

const Template: Story<PhotoUploadStoryProps> = (args) => (
  <Form onSubmit={(v) => console.log(v)}>
    <Stack>
      <PhotoUpload {...args} />
      <Button type='submit'>Submit</Button>
    </Stack>
  </Form>
);

export const Default = Template.bind({});
Default.args = {
  name: 'photos',
};
