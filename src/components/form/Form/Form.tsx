import { PropsWithChildren, useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ObjectSchema } from 'yup';

export interface FormProps<T extends Record<string, any> = {}> {
  onSubmit?: SubmitHandler<T>;
  schema?: ObjectSchema<T>;
  errors?: Record<keyof T, string>;
}

const Form = <T,>({ children, schema, onSubmit, errors }: PropsWithChildren<FormProps<T>>) => {
  const methods = useForm({
    resolver: schema ? yupResolver(schema) : undefined,
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
      <form onSubmit={onSubmit && methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
