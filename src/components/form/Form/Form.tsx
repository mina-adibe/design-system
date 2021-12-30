import { yupResolver } from '@hookform/resolvers/yup';
import { PropsWithChildren, useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm, UseFormProps } from 'react-hook-form';
import { AnyObjectSchema } from 'yup';
import Lazy from 'yup/lib/Lazy';

export interface FormProps<T extends Record<string, any> = {}> {
  onSubmit?: SubmitHandler<T>;
  schema?: AnyObjectSchema | Lazy<any>;
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
    resolver: schema ? yupResolver(schema) : undefined,
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
      <form onSubmit={onSubmit && methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
