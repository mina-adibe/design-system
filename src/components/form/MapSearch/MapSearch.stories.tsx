import { Box, Stack, Typography } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import MapSearch, { MapSearchProps } from './MapSearch';

export default {
  component: MapSearch,
  title: 'Components/MapSearch',
  args: {
    onChange: () => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    },
  },
} as Meta;

interface MapSearchStoryProps extends MapSearchProps {}

const Template: Story<MapSearchStoryProps> = (args) => {
  const [selectedListing, setSelectedListing] = useState<any>(null);

  return (
    <Stack>
      <Box sx={{ width: 600, height: 400 }}>
        <MapSearch {...args} onSelectedListingChange={(id: string) => setSelectedListing(id)} />
      </Box>
      <Typography>Selected Listing: {selectedListing}</Typography>
    </Stack>
  );
};

export const Default = Template.bind({});

export const WithPins = Template.bind({});
WithPins.args = {
  listings: [
    {
      lat: -36.8697,
      lng: 174.7612,
      id: 'listing_1',
      rent: 220,
      title: 'Spacious Room!',
    },
  ],
};
