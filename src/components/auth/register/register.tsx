import { Fragment, useCallback, useMemo, useState } from 'react';

import { ConfirmationDialog } from '../confirmation-dialog';

import RegisterContext from './context';
import {
  CreatePasswordStep,
  EmailUsernameStep,
  EmailVerificationStep,
  SelectTypeStep,
} from './steps';

import { Dialog, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

interface RegistrationStepProps {
  readonly step: number;
}

function RegistrationSteps({ step }: RegistrationStepProps) {
  switch (step) {
    case 1:
      return <SelectTypeStep />;
    case 2:
      return <EmailUsernameStep />;
    case 3:
      return <CreatePasswordStep />;
    case 4:
      return <EmailVerificationStep />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Register() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [confirmationDialog, setConfirmationDialog] = useState(false);
  const [registerState, setRegisterState] = useState({
    step: 1,
    type: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleSelectType = useCallback(
    (type: string) => {
      setRegisterState({
        ...registerState,
        type,
      });
    },
    [registerState]
  );

  const handleValueChange = useCallback(
    (key: string, value: string) => {
      setRegisterState({
        ...registerState,
        [key]: value,
      });
    },
    [registerState]
  );

  const nextStep = useCallback(() => {
    setRegisterState({
      ...registerState,
      step: registerState.step + 1,
    });
  }, [registerState]);

  const previousStep = useCallback(() => {
    setRegisterState({
      ...registerState,
      step: registerState.step - 1,
    });
  }, [registerState]);

  const onModalClose = useCallback(() => {
    setOpen(false);
    if (registerState.type !== '') setConfirmationDialog(true);
    if (registerState.type === '' || registerState.step === 4) navigate('/');
  }, [navigate, registerState.step, registerState.type]);

  const value = useMemo(
    () => ({
      ...registerState,
      onModalClose,
      nextStep,
      previousStep,
      handleValueChange,
      handleSelectType,
    }),
    [
      registerState,
      onModalClose,
      nextStep,
      previousStep,
      handleValueChange,
      handleSelectType,
    ]
  );

  return (
    <>
      <Transition appear as={Fragment} show={open}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          onClose={onModalClose}
        >
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-tangaroa/30' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              aria-hidden='true'
              className='inline-block h-screen align-middle'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='my-8 inline-flex h-[675px] w-full max-w-[528px] transform flex-col justify-between overflow-hidden rounded-[40px] bg-neutrals-0 p-[50px] text-left align-middle shadow-center-md transition-all'>
                <RegisterContext.Provider value={value}>
                  <RegistrationSteps step={registerState.step} />
                </RegisterContext.Provider>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <ConfirmationDialog
        onClose={() => setConfirmationDialog(false)}
        onConfirm={() => {
          navigate('/');
          setOpen(false);
          setRegisterState({
            ...registerState,
            step: 1,
          });
        }}
        onDismiss={() => setOpen(true)}
        open={confirmationDialog}
      />
    </>
  );
}
