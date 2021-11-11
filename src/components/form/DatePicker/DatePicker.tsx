import { DatePicker as MuiDatePicker, DatePickerProps as MuiDatePickerProps } from '@mui/lab';
import { TextField } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';

export interface DatePickerProps extends MuiDatePickerProps {
  name: string;
  label?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ name, label }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ...field } }) => (
        <FormFieldWrapper errorMessage={errors[name]} label={label}>
          <MuiDatePicker
            value={value || null}
            onChange={(date) => onChange(date || undefined)}
            {...field}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormFieldWrapper>
      )}
    />
  );
};

export default DatePicker;
