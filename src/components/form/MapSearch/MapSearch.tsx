/* eslint-disable no-unused-vars */
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Chip,
  Paper,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import React, { useMemo, useState } from 'react';
import cities from './cities';
import mapStyle from './mapStyle.json';

export interface ListingPin {
  lat: number;
  lng: number;
  id: string;
  rent: number;
  title: string;
}

export interface MapSearchProps {
  google: any;
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
  google,
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
          position={{ lat: l.lat, lng: l.lng }}
          onClick={() => onSelectedListingChange(l.id)}
        />
      )),
    [listings]
  );

  return (
    <>
      <Box sx={{ width: '600px', height: '400px', position: 'relative' }}>
        <Map
          google={google}
          zoom={zoom}
          scrollwheel
          initialCenter={pos}
          disableDefaultUI
          styles={mapStyle}
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
        </Map>
        <Paper elevation={4} sx={{ position: 'absolute', right: 8, top: 8 }}>
          <ButtonGroup orientation='vertical' variant='outlined' aria-label='outlined button group'>
            <ZoomButton onClick={() => setZoom((z) => z + 1)}>
              <AddIcon />
            </ZoomButton>
            <ZoomButton onClick={() => setZoom((z) => z - 1)}>
              <RemoveIcon />
            </ZoomButton>
          </ButtonGroup>
        </Paper>
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
      <Typography>{zoom}</Typography>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD4ecsun_itWQdd-KVPEuuZjXCKET21mUQ',
})(MapSearch);
