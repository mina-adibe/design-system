import { FormControl, FormControlProps, FormHelperText, FormLabel, styled } from '@mui/material';
import React from 'react';

const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
  marginLeft: theme.spacing(0.5),
  fontSize: theme.typography.body2.fontSize,
  fontWeight: 500,
}));

export interface FormFieldWrapperProps extends FormControlProps {
  label?: string;
  errorMessage?: string;
}

const FormFieldWrapper: React.FC<FormFieldWrapperProps> = ({
  children,
  label,
  required,
  errorMessage,
  ...rest
}) => {
  return (
    <FormControl required={required} error={Boolean(errorMessage)} {...rest}>
      {label && <StyledFormLabel>{label}</StyledFormLabel>}
      {children}
      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};

export default FormFieldWrapper;
