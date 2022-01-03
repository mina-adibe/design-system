import { FormControlLabel, FormControlLabelProps, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';

export interface RadioButtonProps {
  label: string;
  value: any;
  disabled?: boolean;
}

export interface RadioSelectionProps {
  name: string;
  label: string;
  options: (Partial<FormControlLabelProps> & { label: string; value: any })[];
}

const RadioSelection: React.FC<RadioSelectionProps> = ({ name, label, options }) => {
  const {
    control,
    formState: { errors, isSubmitting },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={options[0]?.value}
      render={({ field }) => (
        <FormFieldWrapper label={label} disabled={isSubmitting} errorObject={errors[name]}>
          <RadioGroup {...field}>
            {options.map((option) => (
              <FormControlLabel key={option.value} {...option} control={<Radio />} />
            ))}
          </RadioGroup>
        </FormFieldWrapper>
      )}
    />
  );
};

export default RadioSelection;
