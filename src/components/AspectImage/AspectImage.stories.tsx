import { Box, Typography } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import AspectImage, { AspectImageProps } from './AspectImage';

export default {
  component: AspectImage,
  title: 'Components/AspectImage',
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    rounded: { control: 'boolean' },
    src: { control: 'text' },
  },

  args: {
    rounded: false,
    src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
  },
} as Meta;

interface AspectImageStoryProps extends AspectImageProps {
  width: number;
  height: number;
}

const Template: Story<AspectImageStoryProps> = ({ width, height, rounded, src }) => (
  <Box width='200px'>
    <AspectImage ratio={[width, height]} src={src} rounded={rounded} />
    <Typography>
      ratio: {width}x{height}
    </Typography>
  </Box>
);

export const SixteenByNine = Template.bind({});
SixteenByNine.storyName = '16:9';
SixteenByNine.args = {
  width: 16,
  height: 9,
};

export const FourByThree = Template.bind({});
FourByThree.storyName = '4:3';
FourByThree.args = {
  width: 4,
  height: 3,
};

export const skeleton = Template.bind({});
skeleton.storyName = 'No Image';
skeleton.args = {
  width: 16,
  height: 9,
  src: '',
};
