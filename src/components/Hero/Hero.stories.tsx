import { Container, Typography, Box } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import Hero, { HeroProps } from './Hero';

export default {
  component: Hero,
  title: 'Components/Hero',
  args: {
    src: 'https://easyrent.nz/wp-content/uploads/2021/07/0E819E05-00F6-4BAA-B806-F609578AC42F_1_201_a-scaled.jpeg',
  },
} as Meta;

interface HeroStoryProps extends HeroProps {}

const Template: Story<HeroStoryProps> = ({ src }) => (
  <Box sx={{ position: 'absolute', left: 0, right: 0, top: 0 }}>
    <Hero src={src}>
      <Container sx={{ py: 16, px: 4 }}>
        <Typography variant='h1' color='primary.contrastText'>
          EasyRent is really cool
        </Typography>
      </Container>
    </Hero>
  </Box>
);

export const Default = Template.bind({});
