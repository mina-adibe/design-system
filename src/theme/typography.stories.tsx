import { Container, Typography } from '@mui/material';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Theme/Typography',
} as Meta;

export const Default: Story = () => (
  <Container sx={{ color: 'text.primary' }}>
    <Typography variant='h1'>Heading 1</Typography>
    <Typography variant='h2'>Heading 2</Typography>
    <Typography variant='h3'>Heading 3</Typography>
    <Typography variant='h4'>Heading 4</Typography>
    <Typography variant='h5'>Heading 5</Typography>
    <Typography variant='h6'>Heading 6</Typography>
    <Typography variant='body1'>Body 1</Typography>
    <Typography variant='body2'>Body 2</Typography>
    <Typography variant='caption'>Caption</Typography>
    <Typography variant='overline'>Overline</Typography>
  </Container>
);

export const Paragraph: Story = () => (
  <Container>
    <Typography variant='h3'>Heading 1</Typography>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed sagittis ligula. Etiam
      vestibulum dui eros, nec dictum ante ornare feugiat. In hac habitasse platea dictumst. Morbi
      blandit imperdiet eros, eu fermentum augue hendrerit eget. Pellentesque sit amet eros mollis,
      laoreet tortor ut, dapibus leo. Praesent interdum, nisl id ullamcorper rhoncus, nisi ipsum
      sollicitudin elit, luctus semper est tellus quis risus. Proin ut rutrum eros. Nullam id mi
      mattis, mollis dolor ut, dignissim purus. Curabitur felis nibh, accumsan sit amet facilisis
      in, ornare vel arcu. Nulla fringilla, lacus eu lacinia congue, augue enim rutrum neque,
      aliquam feugiat nibh nunc in augue. Donec quis tincidunt lectus. Ut consequat odio in nibh
      mollis, eu imperdiet tortor malesuada. Cras sollicitudin porttitor odio, ac mollis ex lobortis
      sed. Integer tempus magna at sapien consequat porttitor. Donec eu metus ut turpis congue
      pulvinar id non orci.
    </Typography>
  </Container>
);
