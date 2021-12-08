import Room from '@mui/icons-material/Room';
import { Autocomplete, TextField } from '@mui/material';
import { GoogleAPI, GoogleApiWrapper } from 'google-maps-react';
import React, { useEffect, useMemo, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';

export interface AreaSearchProps {
  label?: string;
  google: GoogleAPI;
  name: string;
  placeholder?: string;
  /**
   * Specifies how long the field should wait before it makes a request to the server
   */
  searchDelay?: number;
}

const AreaSearch: React.FC<AreaSearchProps> = ({
  label,
  name,
  google,
  placeholder,
  searchDelay = 200,
}) => {
  const [inputValue, setInputValue] = React.useState('');

  const [results, setResults] = React.useState<{ label: string; value: string }[]>([]);

  const placeService = useMemo(() => new google.maps.places.AutocompleteService(), []);
  const session = useMemo(() => new google.maps.places.AutocompleteSessionToken(), []);

  const loc = useMemo(() => new google.maps.LatLng({ lat: -33.8688, lng: 151.2195 }), []);

  const searchTimeout = useRef<number>();

  const {
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    window.clearTimeout(searchTimeout.current);
    if (inputValue) {
      searchTimeout.current = window.setTimeout(() => {
        placeService
          .getPlacePredictions({
            componentRestrictions: { country: 'au' },
            location: loc,
            radius: 100,
            input: inputValue,
            sessionToken: session,
            types: ['(cities)'],
          })
          .then((res) => {
            setResults(
              res.predictions.map((p) => ({
                label: `${p.structured_formatting.main_text}, ${p.structured_formatting.secondary_text}`,
                value: p.place_id,
              }))
            );
          });
      }, searchDelay);
    } else {
      setResults([]);
    }
  }, [inputValue]);

  return (
    <FormFieldWrapper label={label} errorObject={errors[name]} sx={{ width: '100%' }}>
      <Autocomplete
        sx={{ width: '100%' }}
        disablePortal
        onInputChange={(e, v) => setInputValue(v)}
        inputValue={inputValue}
        noOptionsText={inputValue ? 'No results' : 'Type to search'}
        filterOptions={(x) => x}
        id='combo-box-demo'
        options={results}
        renderInput={({ InputProps, ...params }) => (
          <TextField
            {...params}
            placeholder={placeholder}
            InputProps={{
              ...InputProps,
              startAdornment: <Room />,
            }}
          />
        )}
      />
    </FormFieldWrapper>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD4ecsun_itWQdd-KVPEuuZjXCKET21mUQ',
})(AreaSearch);
