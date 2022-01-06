import { DatePicker as MuiDatePicker, DatePickerProps as MuiDatePickerProps } from '@mui/lab';
import { OutlinedInput } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';

export interface DatePickerProps
  extends Omit<MuiDatePickerProps, 'onChange' | 'value' | 'renderInput'> {
  name: string;
  label?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ name, label, ...rest }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ...field } }) => (
        <FormFieldWrapper errorObject={errors[name]} label={label}>
          <MuiDatePicker
            value={value || null}
            onChange={(date) => onChange(date || undefined)}
            {...field}
            {...rest}
            renderInput={({ inputRef, inputProps, InputProps }) => (
              <OutlinedInput ref={inputRef} inputProps={inputProps} {...InputProps} />
            )}
          />
        </FormFieldWrapper>
      )}
    />
  );
};

export default DatePicker;
