import { Autocomplete, AutocompleteProps, TextField } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';

export interface SearchProps<T>
  extends Omit<AutocompleteProps<T, false, false, false>, 'options' | 'renderInput' | 'ref'> {
  label?: string;
  name: string;
  /**
   * Specifies how long the field should wait before it makes a request to the server
   */
  searchDelay?: number;
  // eslint-disable-next-line no-unused-vars
  searchFn: (query: string) => Promise<T[]>;
  startAdornment?: React.ReactNode;
}
export interface AreaSearchOption {
  label: string;
  id: string;
  name: string;
}

const Search = <T extends { label: string }>({
  label,
  name,
  searchFn,
  placeholder,
  searchDelay = 200,
  startAdornment,
  ...rest
}: SearchProps<T>) => {
  const [inputValue, setInputValue] = React.useState('');

  const [results, setResults] = React.useState<T[]>([]);

  const searchTimeout = useRef<number>();

  const {
    formState: { errors, isSubmitting },
    control,
  } = useFormContext();

  useEffect(() => {
    window.clearTimeout(searchTimeout.current);
    if (inputValue) {
      searchTimeout.current = window.setTimeout(() => {
        searchFn(inputValue).then(setResults);
      }, searchDelay);
    } else {
      setResults([]);
    }
    return () => window.clearTimeout(searchTimeout.current);
  }, [inputValue]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ...field } }) => (
        <FormFieldWrapper label={label} errorObject={errors[name]} sx={{ width: '100%' }}>
          <Autocomplete<T, false, false, false>
            sx={{ width: '100%' }}
            onInputChange={(e, v) => setInputValue(v)}
            inputValue={inputValue}
            noOptionsText={inputValue ? 'No results' : 'Type to search'}
            filterOptions={(x) => x}
            blurOnSelect
            disabled={isSubmitting}
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
                  startAdornment,
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

export default Search;
