import React, { useContext, useEffect } from 'react';
import { MultiStepFormContext } from './MultiStepFormContext';

export interface FormStepProps {
  /**
   * The step number for this page of the form. There should not be two FormSteps with the same
   * step
   */
  step: number;
  /**
   * If true, the formStep is treated as the confirmation page after the user submits, and will not
   * be counted in the total number of steps
   */
  confirmationPage?: boolean;
  /**
   * The yup validation schema for the fields on this step
   */
  schema?: Record<string, any>;
}

const FormStep: React.FC<FormStepProps> = ({ step, children, confirmationPage, schema }) => {
  const ctx = useContext(MultiStepFormContext);

  useEffect(() => {
    if (!confirmationPage) ctx.register(schema);
  }, []);

  return <>{ctx.step === step ? children : null}</>;
};

export default FormStep;
