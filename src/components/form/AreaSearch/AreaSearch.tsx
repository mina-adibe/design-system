import Room from '@mui/icons-material/Room';
import { Autocomplete, AutocompleteProps, TextField } from '@mui/material';
import { GoogleAPI, GoogleApiWrapper } from 'google-maps-react';
import React, { useEffect, useMemo, useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';

export interface AreaSearchProps
  extends Omit<
    AutocompleteProps<AreaSearchOption, false, false, false>,
    'options' | 'renderInput'
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
}

const AreaSearch: React.FC<AreaSearchProps> = ({
  label,
  name,
  google,
  placeholder,
  searchDelay = 200,
  ...rest
}) => {
  const [inputValue, setInputValue] = React.useState('');

  const [results, setResults] = React.useState<AreaSearchOption[]>([]);

  const placeService = useMemo(() => new google.maps.places.AutocompleteService(), []);
  const session = useMemo(() => new google.maps.places.AutocompleteSessionToken(), []);

  const loc = useMemo(() => new google.maps.LatLng({ lat: -33.8688, lng: 151.2195 }), []);

  const searchTimeout = useRef<number>();

  const {
    formState: { errors },
    control,
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
                id: p.place_id,
                name: p.structured_formatting.main_text,
              }))
            );
          });
      }, searchDelay);
    } else {
      setResults([]);
    }
  }, [inputValue]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ...field } }) => (
        <FormFieldWrapper label={label} errorObject={errors[name]} sx={{ width: '100%' }}>
          <Autocomplete<AreaSearchOption, false, false, false>
            sx={{ width: '100%' }}
            onInputChange={(e, v) => setInputValue(v)}
            inputValue={inputValue}
            noOptionsText={inputValue ? 'No results' : 'Type to search'}
            filterOptions={(x) => x}
            blurOnSelect
            getOptionLabel={(option) => option.label}
            isOptionEqualToValue={(o, v) => o.label === v.label}
            value={value === undefined ? null : value}
            onChange={(e, v) => onChange(v)}
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
            {...field}
            {...rest}
          />
        </FormFieldWrapper>
      )}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD4ecsun_itWQdd-KVPEuuZjXCKET21mUQ',
})(AreaSearch);
