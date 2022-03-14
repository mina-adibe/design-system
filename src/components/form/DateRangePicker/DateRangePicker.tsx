import {
  StaticDateRangePicker as MuiDateRangePicker,
  DateRangePickerProps as MuiDateRangePickerProps,
} from '@mui/lab';
import { TextField, Box } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';

export interface DateRangePickerProps
  extends Omit<MuiDateRangePickerProps<any>, 'onChange' | 'value' | 'renderInput'> {
  name: string;
  label?: string;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ name, label, ...rest }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[null, null]}
      render={({ field: { value, onChange, ...field } }) => (
        <FormFieldWrapper errorObject={errors[name]} label={label}>
          <MuiDateRangePicker
            displayStaticWrapperAs='desktop'
            calendars={1}
            value={value}
            onChange={(date) => onChange(date)}
            {...field}
            {...rest}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </FormFieldWrapper>
      )}
    />
  );
};

export default DateRangePicker;
