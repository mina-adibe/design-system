import { Box, SvgIcon, SvgIconProps } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { EasyRentIcon, GoogleIcon } from '.';
import InstagramIcon from './Instagram';

export default {
  title: 'Components/Icons',
  component: SvgIcon,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'warning', 'error', 'info', 'success'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const Gallery: Story<SvgIconProps> = (args) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 1fr)',
      '& *': { display: 'block' },
      gap: '8px',
    }}
  >
    <GoogleIcon {...args} />
    <InstagramIcon {...args} />
    <EasyRentIcon {...args} />
  </Box>
);
export const Google: Story<SvgIconProps> = (args) => <GoogleIcon {...args} />;
export const Instagram: Story<SvgIconProps> = (args) => <InstagramIcon {...args} />;
export const EasyRent: Story<SvgIconProps> = (args) => <EasyRentIcon {...args} />;
