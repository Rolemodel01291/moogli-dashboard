import { createContext, useContext } from 'react';

import type { ActionCodeSettings } from 'firebase/auth';

interface State {
  step: number;
  email: string;
  onModalClose: () => void;
  onCancel: () => void;
  sendPasswordReset: ({
    email,
    actionCodeSettings,
  }: {
    email: string;
    actionCodeSettings?: ActionCodeSettings;
  }) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextStep: () => void;
  previousStep: () => void;
}

const ForgotPasswordContext = createContext<State | undefined>(undefined);
ForgotPasswordContext.displayName = 'ForgotPasswordContext';

export function useForgotPassword() {
  const context = useContext(ForgotPasswordContext);
  if (context === undefined) {
    throw new Error(
      `useForgotPassword must be used within a ForgotPasswordProvider`
    );
  }
  return context;
}

export default ForgotPasswordContext;
