import { yupResolver } from '@hookform/resolvers/yup';
import { FormEvent, ReactElement, ReactNode, useEffect, useMemo, useState } from 'react';
import { FormProvider, SubmitHandler, useForm, UseFormReturn, UseFormProps } from 'react-hook-form';
import { object } from 'yup';
import { MultiStepFormContext, MultiStepFormContextState } from './MultiStepFormContext';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';

export interface MultistepFormProps<T extends Record<string, any> = {}> {
  onSubmit?: SubmitHandler<T>;
  errors?: Record<keyof T, string>;
  // eslint-disable-next-line no-unused-vars
  onStepChange?: (step: number, values: Partial<T>) => void;
  // eslint-disable-next-line no-unused-vars
  render: (props: MultistepFormRenderProps<T>) => ReactNode;
  defaultValues?: UseFormProps<T>['defaultValues'];
  // eslint-disable-next-line no-unused-vars
  children: (props: MultistepFormChildrenRenderProps) => ReactElement;
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

interface MultistepFormChildrenRenderProps<T = any> {
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
  defaultValues,
}: MultistepFormProps<T>) => {
  const [step, setStep] = useState(0);
  const [numSteps, setNumSteps] = useState(0);
  const [schemas, setSchemas] = useState<{ [key: number]: Record<any, any> }>({});

  useEffect(() => {
    if (onStepChange) {
      onStepChange(step, methods.getValues() as Partial<T>);
    }
  }, [step]);

  const builtSchema = useMemo(() => {
    const schemaObject = object().shape(schemas[step]);
    return schemaObject;
  }, [schemas, step]);

  const methods = useForm({
    resolver: builtSchema ? yupResolver(builtSchema) : undefined,
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

  const renderProps: MultistepFormRenderProps = useMemo(() => {
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
      form: children({ goBack, goForward, methods }),
      step,
      numSteps,
      isConfirmationPage: step > numSteps - 1,
      goForward,
      goBack,
      methods,
    };
  }, [step, numSteps, methods, children]);

  const handleStepSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    renderProps.goForward();
  };

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
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MultiStepFormContext.Provider value={ctx}>
          <form onSubmit={handleStepSubmit}>{render(renderProps)}</form>
        </MultiStepFormContext.Provider>
      </LocalizationProvider>
    </FormProvider>
  );
};

export default MultistepForm;
