import { createContext, useContext } from 'react';

import type { UserType } from '@/auth-provider';

export type TEntityRegistration = {
  type: UserType;
  name: string;
  registrationNumber: string;
  website: string;
  address: string;
  contactName: string;
  contactPhoneNumber: string;
  contactRole: string;
};

interface State {
  step: number;
  name: string;
  contactName: string;
  contactRole: string;
  contactPhoneNumber: string;
  website: string;
  address: string;
  registrationNumber: string;
  nextStep: () => void;
  previousStep: () => void;
  handleValueChange: (key: string, value: string) => void;
}

const VerificationContext = createContext<State | undefined>(undefined);
VerificationContext.displayName = 'VerificationContext';

export function useVerification() {
  const context = useContext(VerificationContext);
  if (context === undefined) {
    throw new Error(
      `useVerification must be used within a VerificationProvider`
    );
  }
  return context;
}

export default VerificationContext;
