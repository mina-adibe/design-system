import { OutlinedInput, OutlinedInputProps } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { useFormContext } from 'react-hook-form';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';

export interface TextFieldProps extends OutlinedInputProps {
  /**
   * The label to display above the input.
   */
  label?: string;
  /**
   * Error message to display below the input. This will cause the input to render in an error state.
   */
  disabled?: boolean;
  required?: boolean;
  name: string;
}

/**
 * A text field component for entering text, numbers or other input. This component should be used
 * as a child of the `Form` component. In addition to the props listed, you can also pass any
 * <a target='_blank' href='https://mui.com/api/outlined-input/'>valid props</a> to the underlying
 * `OutlinedInput` component.
 */
const TextField: React.FC<TextFieldProps> = ({
  label,
  disabled,
  required,
  name,
  type,
  ...rest
}: PropsWithChildren<TextFieldProps>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormFieldWrapper
      label={label}
      errorMessage={errors[name]}
      disabled={disabled}
      required={required}
    >
      <OutlinedInput
        id='text-field'
        {...register(name, { valueAsNumber: type === 'number' })}
        type={type}
        {...rest}
      />
    </FormFieldWrapper>
  );
};

export default TextField;
