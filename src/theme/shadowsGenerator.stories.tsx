import { Box, Typography } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { createShadow } from './shadows';

interface ShadowsStoryProps {
  elevation: number;
  layers: number;
}

const meta: Meta<ShadowsStoryProps> = {
  title: 'Theme/ShadowGenerator',
  args: {
    elevation: 1,
    layers: 3,
  },
  argTypes: {
    elevation: {
      control: { type: 'range', min: 0, max: 24, step: 1 },
    },
    layers: {
      control: 'number',
    },
  },
};

export default meta;

export const Default: Story<ShadowsStoryProps> = ({ elevation, layers }) => {
  const shadows = createShadow(elevation, layers);

  return (
    <Box
      sx={{
        width: 200,
        height: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: shadows,
      }}
    >
      <Typography variant='h2'>{elevation}</Typography>
    </Box>
  );
};
