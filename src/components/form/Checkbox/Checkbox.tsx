import React from 'react';
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  FormControlLabel,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';

export interface CheckboxProps extends MuiCheckboxProps {
  label: string;
  name: string;
}

const Checkbox = ({ label, name }: CheckboxProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FormFieldWrapper errorObject={errors[name]}>
      <FormControlLabel
        control={
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <MuiCheckbox
                {...field}
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
            )}
          />
        }
        label={label}
      />
    </FormFieldWrapper>
  );
};

export default Checkbox;
