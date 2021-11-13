import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Meta, Story } from '@storybook/react';
import Dropzone, { DropzoneProps } from './Dropzone';

export default {
  component: Dropzone,
  title: 'Components/Form/Dropzone',
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    disabled: false,
  },
} as Meta;

interface DropzoneStoryProps extends DropzoneProps {}

const Template: Story<DropzoneStoryProps> = (args) => <Dropzone {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const ImageUpload = Template.bind({});
ImageUpload.args = {
  accept: 'image/*',
  icon: AddPhotoAlternateIcon,
  label: 'Drag to upload an image',
};
