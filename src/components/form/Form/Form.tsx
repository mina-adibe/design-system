import React, { PropsWithChildren, useEffect } from 'react';
import { FormProvider, Resolver, useForm, SubmitHandler } from 'react-hook-form';

export interface FormProps<T = {}> {
  onSubmit?: SubmitHandler<T>;
  schema?: Resolver<T>;
  errors?: Record<keyof T, string>;
}

const Form = <T,>({ children, schema, onSubmit, errors }: PropsWithChildren<FormProps<T>>) => {
  const methods = useForm({
    resolver: schema,
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
