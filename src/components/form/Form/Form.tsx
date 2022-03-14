import { yupResolver } from '@hookform/resolvers/yup';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { PropsWithChildren, useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm, UseFormProps } from 'react-hook-form';
import { object } from 'yup';

export interface FormProps<T extends Record<string, any> = {}> {
  onSubmit?: SubmitHandler<T>;
  schema?: Record<string, any>;
  errors?: Record<keyof T, string>;
  defaultValues?: UseFormProps<T>['defaultValues'];
}

const Form = <T,>({
  children,
  schema,
  onSubmit,
  errors,
  defaultValues,
}: PropsWithChildren<FormProps<T>>) => {
  const methods = useForm({
    resolver: schema ? yupResolver(object().shape(schema)) : undefined,
    defaultValues,
  });

  useEffect(() => {
    if (errors) {
      methods.clearErrors();
      Object.entries(errors).forEach(([k, v]) => {
        methods.setError(k as any, { message: `${v}` });
      });
    }
  }, [errors]);

  return (
    <FormProvider {...methods}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <form onSubmit={onSubmit && methods.handleSubmit(onSubmit)}>{children}</form>
      </LocalizationProvider>
    </FormProvider>
  );
};

export default Form;
