import { Select, SelectProps } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { useFormContext } from 'react-hook-form';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';

export interface DropdownProps<T> extends SelectProps<T> {
  label: string;
  name: string;
}

const Dropdown = <T,>({ children, label, name }: PropsWithChildren<DropdownProps<T>>) => {
  const { register } = useFormContext();

  return (
    <FormFieldWrapper label={label}>
      <Select {...register(name)}>{children}</Select>
    </FormFieldWrapper>
  );
};

export default Dropdown;
