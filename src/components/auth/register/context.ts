import { createContext, useContext } from 'react';

import { UserType } from '@/auth-provider';

interface State {
  step: number;
  type: UserType;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  onModalClose: () => void;
  nextStep: () => void;
  previousStep: () => void;
  handleValueChange: (key: string, value: string) => void;
  handleSelectType: (type: UserType) => void;
}

const RegisterContext = createContext<State | undefined>(undefined);
RegisterContext.displayName = 'RegisterContext';

export function useRegister() {
  const context = useContext(RegisterContext);
  if (context === undefined) {
    throw new Error(`useRegister must be used within a RegisterProvider`);
  }
  return context;
}

export default RegisterContext;
