import { yupResolver } from '@hookform/resolvers/yup';
import React, { PropsWithChildren, ReactNode, useEffect, useMemo, useState } from 'react';
import { FormProvider, SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { object } from 'yup';
import { MultiStepFormContext, MultiStepFormContextState } from './MultiStepFormContext';

export interface MultistepFormProps<T extends Record<string, any> = {}> {
  onSubmit?: SubmitHandler<T>;
  errors?: Record<keyof T, string>;
  // eslint-disable-next-line no-unused-vars
  onStepChange?: (step: number) => void;
  // eslint-disable-next-line no-unused-vars
  render: (props: MultistepFormRenderProps<T>) => ReactNode;
}

interface MultistepFormRenderProps<T = any> {
  form: ReactNode;
  step: number;
  numSteps: number;
  isConfirmationPage: boolean;
  goForward: () => void;
  goBack: () => void;
  methods: UseFormReturn<T>;
}

const MultistepForm = <T,>({
  errors,
  onSubmit,
  children,
  render,
  onStepChange,
}: PropsWithChildren<MultistepFormProps<T>>) => {
  const [step, setStep] = useState(0);
  const [numSteps, setNumSteps] = useState(0);
  const [schemas, setSchemas] = useState<{ [key: number]: Record<any, any> }>({});

  useEffect(() => {
    if (onStepChange) {
      onStepChange(step);
    }
  }, [step]);

  const builtSchema = useMemo(() => {
    const schemaObject = object().shape(schemas[step]);
    return schemaObject;
  }, [schemas, step]);

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
    const form = children;

    /**
     * triggers form validation. If validation passes then the form will progress to the next step.
     */
    const goForward = async () => {
      const res = await methods.trigger();
      if (res) {
        if (step < numSteps) {
          if (onSubmit && step === numSteps - 1) {
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
      numSteps,
      isConfirmationPage: step > numSteps - 1,
      goForward,
      goBack,
      methods,
    };
  }, [step, numSteps, methods, children]);

  const ctx = useMemo<MultiStepFormContextState>(
    () => ({
      step,
      register: (stepSchema) => {
        setNumSteps((s) => {
          if (stepSchema) setSchemas((sch) => ({ ...sch, [s]: stepSchema }));
          return s + 1;
        });
      },
    }),
    [step]
  );

  return (
    <FormProvider {...methods}>
      <MultiStepFormContext.Provider value={ctx}>
        <form>{render(renderProps)}</form>
      </MultiStepFormContext.Provider>
    </FormProvider>
  );
};

export default MultistepForm;
