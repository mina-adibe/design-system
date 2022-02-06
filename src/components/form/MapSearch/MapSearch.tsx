import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { LoadingButton } from '@mui/lab';
import { Box, Button, ButtonGroup, Card, Paper, Stack, styled, Typography } from '@mui/material';
import { Marker } from 'google-maps-react';
import React, { useMemo, useState } from 'react';
import MapView from '../../MapView/MapView';
import cities from './cities';

export interface ListingPin {
  lat: number;
  lng: number;
  id: string;
  rent: number;
  title: string;
}

export interface MapSearchProps {
  onChange: (pos: { lat: number; lng: number }, zoom: number) => Promise<void>;
  listings: ListingPin[];
  onSelectedListingChange: (id: string) => void;
}

const ZoomButton = styled(Button)({
  padding: '5px',
});

const Overlay = styled(Stack)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  padding: 8,
  display: 'flex',
  pointerEvents: 'none',
  '& *': {
    pointerEvents: 'auto',
  },
});

const MapSearch: React.FC<MapSearchProps> = ({
  onChange,
  listings = [],
  onSelectedListingChange,
}) => {
  const [zoom, setZoom] = useState(13);
  const [pos, setPos] = useState(cities.auckland);
  const [hasChanged, setHasChanged] = useState(false);
  const [searching, setSearching] = useState(false);

  const handleSearch = async () => {
    if (onChange) {
      setSearching(true);
      await onChange(pos, zoom);
      setSearching(false);
    }
    setHasChanged(false);
  };

  const markers = useMemo(
    () =>
      listings.map((l) => (
        <Marker
          key={l.id}
          position={{ lat: l.lat, lng: l.lng }}
          onClick={() => onSelectedListingChange(l.id)}
        />
      )),
    [listings]
  );

  return (
    <>
      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
        <MapView
          zoom={zoom}
          scrollwheel
          initialCenter={pos}
          disableDefaultUI
          onZoomChanged={(p, m) => {
            setHasChanged(true);
            const z = m?.getZoom();
            if (z) setZoom(z);
          }}
          onCenterChanged={(p, m) => {
            setHasChanged(true);
            const c = m?.getCenter();
            if (c) setPos(c as any);
          }}
        >
          {markers}
        </MapView>
        <ButtonGroup
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            boxShadow: (theme) => theme.shadows[4],
            background: 'white',
          }}
          orientation='vertical'
          variant='outlined'
          aria-label='Map Zoom Controls'
        >
          <ZoomButton onClick={() => setZoom((z) => z + 1)}>
            <AddIcon />
          </ZoomButton>
          <ZoomButton onClick={() => setZoom((z) => z - 1)}>
            <RemoveIcon />
          </ZoomButton>
        </ButtonGroup>
        <Overlay alignItems='center'>
          {hasChanged ? (
            <LoadingButton
              variant='contained'
              color='secondary'
              disableElevation={false}
              onClick={handleSearch}
              loading={searching}
            >
              Search this Area
            </LoadingButton>
          ) : (
            <Card sx={{ px: 1, py: 0.5 }}>
              <Typography variant='button'>{`${listings.length} results`}</Typography>
            </Card>
          )}
        </Overlay>
        )
      </Box>
    </>
  );
};

export default MapSearch;
