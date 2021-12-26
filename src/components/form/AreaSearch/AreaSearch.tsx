import Room from '@mui/icons-material/Room';
import { AutocompleteProps } from '@mui/material';
import { GoogleAPI, GoogleApiWrapper } from 'google-maps-react';
import React, { useMemo } from 'react';
import Search from '../Search/Search';

export interface AreaSearchProps
  extends Omit<
    AutocompleteProps<AreaSearchOption, false, false, false>,
    'options' | 'renderInput' | 'ref'
  > {
  label?: string;
  google: GoogleAPI;
  name: string;
  /**
   * Specifies how long the field should wait before it makes a request to the server
   */
  searchDelay?: number;
}
export interface AreaSearchOption {
  label: string;
  id: string;
  name: string;
}

const AreaSearch = ({ google, ...rest }: AreaSearchProps) => {
  const placeService = useMemo(() => new google.maps.places.AutocompleteService(), []);
  const session = useMemo(() => new google.maps.places.AutocompleteSessionToken(), []);

  const loc = useMemo(() => new google.maps.LatLng({ lat: -33.8688, lng: 151.2195 }), []);

  const searchFn = async (inputValue: string) => {
    const results = await placeService.getPlacePredictions({
      componentRestrictions: { country: 'au' },
      location: loc,
      radius: 100,
      input: inputValue,
      sessionToken: session,
      types: ['(cities)'],
    });

    return results.predictions.map((p) => ({
      label: `${p.structured_formatting.main_text}, ${p.structured_formatting.secondary_text}`,
      id: p.place_id,
      name: p.structured_formatting.main_text,
    }));
  };
  return <Search searchFn={searchFn} startAdornment={<Room />} {...rest} />;
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD4ecsun_itWQdd-KVPEuuZjXCKET21mUQ',
})(AreaSearch);
