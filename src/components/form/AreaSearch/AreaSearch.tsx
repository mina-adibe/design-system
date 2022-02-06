import { GoogleAPI, GoogleApiWrapper } from 'google-maps-react';
import React, { useMemo, useState } from 'react';

export interface AreaSearchProps {
  google: GoogleAPI;
  children: (props: RenderFnProps) => React.ReactElement;
}
export interface AreaSearchOption {
  id: string;
  mainText: string;
  secondaryText: string;
  description: string;
  types: string[];
}

interface RenderFnProps {
  results: AreaSearchOption[];
  search: (query: string) => Promise<void>;
}

const AreaSearch = ({ google, children }: AreaSearchProps) => {
  const [results, setResults] = useState<AreaSearchOption[]>([]);
  const placeService = useMemo(() => new google.maps.places.AutocompleteService(), []);
  const session = useMemo(() => new google.maps.places.AutocompleteSessionToken(), []);

  const loc = useMemo(() => new google.maps.LatLng({ lat: -33.8688, lng: 151.2195 }), []);

  const searchFn = async (inputValue: string) => {
    const searchResults = await placeService.getPlacePredictions({
      componentRestrictions: { country: 'au' },
      location: loc,
      radius: 100,
      input: inputValue,
      sessionToken: session,
      types: ['(cities)'],
    });

    const mappedResults = searchResults.predictions.map((p) => ({
      id: p.place_id,
      mainText: p.structured_formatting.main_text,
      secondaryText: p.structured_formatting.secondary_text,
      description: p.description,
      types: p.types,
    }));

    setResults(mappedResults);
  };
  return children({ results, search: searchFn });
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD4ecsun_itWQdd-KVPEuuZjXCKET21mUQ',
})(AreaSearch);
