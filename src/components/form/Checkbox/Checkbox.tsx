import React from 'react';
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  FormControlLabel,
} from '@mui/material';
import { useFormContext } from 'react-hook-form';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';

export interface CheckboxProps extends MuiCheckboxProps {
  label: string;
  name: string;
}

const Checkbox = ({ label, name }: CheckboxProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormFieldWrapper errorObject={errors[name]}>
      <FormControlLabel {...register(name)} control={<MuiCheckbox />} label={label} />
    </FormFieldWrapper>
  );
};

export default Checkbox;
