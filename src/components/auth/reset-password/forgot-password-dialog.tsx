import { Fragment, useCallback, useMemo, useState } from 'react';

import { firebaseAuth } from '@/auth-provider';

import ForgotPasswordContext from './context';
import { EmailVerification, ForgotPassword } from './steps';

import { Dialog, Transition } from '@headlessui/react';
import { useAuthSendPasswordResetEmail } from '@react-query-firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function ForgotPasswordDialog() {
  const navigate = useNavigate();
  const { mutate: sendPasswordReset } =
    useAuthSendPasswordResetEmail(firebaseAuth);
  const [state, setState] = useState({
    step: 1,
    type: '',
    email: '',
  });
  const [open, setOpen] = useState(true);

  const onModalClose = useCallback(() => {
    navigate('/');
    setOpen(false);
  }, [navigate]);

  const onEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setState({ ...state, email: e.target.value });
    },
    [state]
  );

  const onCancel = useCallback(() => {
    navigate('/login');
    setOpen(false);
  }, [navigate]);

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

  const values = useMemo(
    () => ({
      ...state,
      onModalClose,
      onEmailChange,
      onCancel,
      nextStep,
      previousStep,
      sendPasswordReset,
    }),
    [
      state,
      onModalClose,
      onEmailChange,
      onCancel,
      nextStep,
      previousStep,
      sendPasswordReset,
    ]
  );

  function steps() {
    switch (state.step) {
      case 1:
        return <ForgotPassword />;
      case 2:
        return <EmailVerification />;
      default:
        return 'Unknown step';
    }
  }

  return (
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
              <ForgotPasswordContext.Provider value={values}>
                {steps()}
              </ForgotPasswordContext.Provider>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
