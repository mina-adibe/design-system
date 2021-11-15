import React from 'react';
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  FormControlLabel,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';

export interface CheckboxProps extends MuiCheckboxProps {
  label: string;
  name: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, name }) => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <FormFieldWrapper errorObject={errors[name]}>
      <FormControlLabel control={<MuiCheckbox {...register(name)} />} label={label} />
    </FormFieldWrapper>
  );
};

export default Checkbox;
