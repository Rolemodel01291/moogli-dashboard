import { useCallback, useMemo, useState } from 'react';

import VerificationContext from './context';
import { ContactFormStep, GeneralFormStep } from './steps';

interface VerificationStepProps {
  readonly step: number;
}

function VerificationSteps({ step }: VerificationStepProps) {
  switch (step) {
    case 1:
      return <GeneralFormStep />;
    case 2:
      return <ContactFormStep />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Verification() {
  const [state, setState] = useState({
    step: 1,
    name: '',
    contactName: '',
    contactRole: '',
    contactPhoneNumber: '',
    website: '',
    address: '',
    registrationNumber: '',
  });

  const handleValueChange = useCallback(
    (key: string, value: string) => {
      setState({
        ...state,
        [key]: value,
      });
    },
    [state]
  );

  const nextStep = useCallback(() => {
    setState({
      ...state,
      step: state.step + 1,
    });
  }, [state]);

  const previousStep = useCallback(() => {
    setState({
      ...state,
      step: state.step - 1,
    });
  }, [state]);

  const value = useMemo(
    () => ({
      ...state,
      nextStep,
      previousStep,
      handleValueChange,
    }),
    [state, nextStep, previousStep, handleValueChange]
  );

  return (
    <div className='my-8 inline-flex min-h-[359px] w-[528px] flex-col justify-between rounded-[40px] bg-neutrals-0 p-[50px] text-left align-middle'>
      <VerificationContext.Provider value={value}>
        <VerificationSteps step={state.step} />
      </VerificationContext.Provider>
    </div>
  );
}
