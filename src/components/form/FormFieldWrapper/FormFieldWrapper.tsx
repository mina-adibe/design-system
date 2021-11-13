import { FormControl, FormControlProps, FormHelperText, FormLabel, styled } from '@mui/material';
import React, { ReactNode } from 'react';
import { ErrorOption } from 'react-hook-form';

const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
  marginLeft: theme.spacing(0.5),
  marginBottom: theme.spacing(0.5),
  fontSize: theme.typography.body2.fontSize,
  fontWeight: 500,
}));

export interface FormFieldWrapperProps extends FormControlProps {
  label?: ReactNode;
  errorObject?: ErrorOption;
}

const FormFieldWrapper: React.FC<FormFieldWrapperProps> = ({
  children,
  label,
  required,
  errorObject,
  ...rest
}) => {
  return (
    <FormControl required={required} error={Boolean(errorObject)} {...rest}>
      {label && <StyledFormLabel>{label}</StyledFormLabel>}
      {children}
      {errorObject && <FormHelperText>{errorObject?.message}</FormHelperText>}
    </FormControl>
  );
};

export default FormFieldWrapper;
