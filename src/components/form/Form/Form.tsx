import React, { PropsWithChildren } from 'react';
import { FormProvider, Resolver, useForm, SubmitHandler } from 'react-hook-form';

export interface FormProps<T = {}> {
  onSubmit?: SubmitHandler<T>;
  schema?: Resolver<T>;
}

const Form = <T,>({ children, schema, onSubmit }: PropsWithChildren<FormProps<T>>) => {
  const methods = useForm({
    resolver: schema,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit && methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
