import { createContext } from 'react';

export interface MultiStepFormContextState {
  step: number;
  // eslint-disable-next-line no-unused-vars
  register: (schema?: Record<any, any>) => void;
}

export const MultiStepFormContext = createContext<MultiStepFormContextState>({
  step: 0,
  register: () => {},
});
