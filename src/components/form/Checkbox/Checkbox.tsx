import React from 'react';
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  FormControlLabel,
} from '@mui/material';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';

export interface CheckboxProps extends MuiCheckboxProps {
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  return (
    <FormFieldWrapper>
      <FormControlLabel control={<MuiCheckbox />} label={label} />
    </FormFieldWrapper>
  );
};

export default Checkbox;
