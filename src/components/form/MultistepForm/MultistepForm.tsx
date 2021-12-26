import { yupResolver } from '@hookform/resolvers/yup';
import React, { PropsWithChildren, ReactNode, useEffect, useMemo, useState } from 'react';
import { FormProvider, SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { object, ObjectSchema } from 'yup';

export interface MultistepFormProps<T extends Record<string, any> = {}> {
  onSubmit?: SubmitHandler<T>;
  schema?: Array<Record<string, any>>;
  errors?: Record<keyof T, string>;
  // eslint-disable-next-line no-unused-vars
  onStepChange?: (step: number) => void;
  // eslint-disable-next-line no-unused-vars
  render: (props: MultistepFormRenderProps<T>) => ReactNode;
}

interface MultistepFormRenderProps<T = any> {
  form: ReactNode;
  step: number;
  isConfirmationPage: boolean;
  numSteps: number;
  goForward: () => void;
  goBack: () => void;
  methods: UseFormReturn<T>;
}

const MultistepForm = <T,>({
  schema = [],
  errors,
  onSubmit,
  children,
  render,
  onStepChange,
}: PropsWithChildren<MultistepFormProps<T>>) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (onStepChange) {
      onStepChange(step);
    }
  }, [step]);

  const builtSchema = useMemo(() => {
    const s = schema
      .slice(0, step + 1)
      .reduce((obj, item) => ({ ...obj, ...item }), {} as Record<keyof T, ObjectSchema<any>>);

    return object().shape(s);
  }, [step]);

  const methods = useForm({
    resolver: builtSchema ? yupResolver(builtSchema) : undefined,
  });

  useEffect(() => {
    if (errors) {
      methods.clearErrors();
      Object.entries(errors).forEach(([k, v]) => {
        methods.setError(k as any, { message: `${v}` });
      });
    }
  }, [errors]);

  const renderProps: MultistepFormRenderProps = useMemo(() => {
    const form = React.Children.toArray(children)[step];
    // (
    //   <SwipeableViews
    //     disabled
    //     index={step}
    //     slideStyle={{ padding: '8px' }}
    //     style={{ margin: '-8px' }}
    //     {...swipeableViewsProps}
    //   >
    //     {children}
    //   </SwipeableViews>
    // );

    /**
     * triggers form validation. If validation passes then the form will progress to the next step.
     */
    const goForward = async () => {
      const res = await methods.trigger();
      if (res) {
        if (step < schema.length) {
          if (onSubmit && step === schema.length - 1) {
            methods.handleSubmit(onSubmit)();
          }
          setStep((s) => s + 1);
        }
      }
    };

    const goBack = () => {
      if (step > 0) {
        setStep((s) => s - 1);
      }
    };

    return {
      form,
      step,
      numSteps: schema.length,
      isConfirmationPage: step > schema.length - 1,
      goForward,
      goBack,
      methods,
    };
  }, [step, methods, children, schema]);

  return (
    <FormProvider {...methods}>
      <form>{render(renderProps)}</form>
    </FormProvider>
  );
};

export default MultistepForm;
