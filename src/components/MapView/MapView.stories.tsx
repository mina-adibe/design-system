import { Box, Stack } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import MapView, { MapViewProps } from './MapView';

export default {
  component: MapView,
  title: 'Components/MapView',
} as Meta;

interface MapSearchStoryProps extends MapViewProps {}

const Template: Story<MapSearchStoryProps> = (args) => {
  return (
    <Stack>
      <Box sx={{ width: 600, height: 400, position: 'relative' }}>
        <MapView {...args} />
      </Box>
    </Stack>
  );
};

export const Default = Template.bind({});

export const ViewOnly = Template.bind({});
ViewOnly.args = {
  gestureHandling: 'none',
};
