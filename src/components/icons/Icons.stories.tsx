import { Box, SvgIcon, SvgIconProps } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import {
  BrowseIconTwoTone,
  ContractIconTwoTone,
  EasyRentIcon,
  EasyRentLogoIcon,
  GoogleIcon,
  MessagingIconTwoTone,
  PaymentIconTwoTone,
  ViewingIconTwoTone,
} from '.';
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
    <EasyRentLogoIcon {...args} />
  </Box>
);

export const TwoTone: Story<SvgIconProps> = (args) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 1fr)',
      '& *': { display: 'block' },
      gap: '8px',
    }}
  >
    <ContractIconTwoTone {...args} />
    <BrowseIconTwoTone {...args} />
    <PaymentIconTwoTone {...args} />
    <ViewingIconTwoTone {...args} />
    <MessagingIconTwoTone {...args} />
  </Box>
);

TwoTone.args = {
  sx: { width: 96, height: 96 },
};

export const Google: Story<SvgIconProps> = (args) => <GoogleIcon {...args} />;
export const Instagram: Story<SvgIconProps> = (args) => <InstagramIcon {...args} />;
export const EasyRent: Story<SvgIconProps> = (args) => <EasyRentIcon {...args} />;
export const EasyRentLogo: Story<SvgIconProps> = (args) => <EasyRentLogoIcon {...args} />;
