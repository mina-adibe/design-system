import { Stack } from '@mui/material';
import { Meta, Story } from '@storybook/react';
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
  <Stack>
    <PhotoUpload {...args} />
  </Stack>
);

export const Default = Template.bind({});
