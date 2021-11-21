import { Paper, Typography } from '@mui/material';
import { Meta, Story } from '@storybook/react';

interface ShadowsStoryProps {
  elevation: number;
}

const meta: Meta<ShadowsStoryProps> = {
  title: 'Theme/Shadows',
  args: {
    elevation: 1,
  },
  argTypes: {
    elevation: {
      control: { type: 'range', min: 0, max: 24, step: 1 },
    },
  },
};

export default meta;

export const Default: Story<ShadowsStoryProps> = ({ elevation }) => (
  <Paper
    sx={{
      width: 200,
      height: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    elevation={elevation}
  >
    <Typography variant='h2'>{elevation}</Typography>
  </Paper>
);
