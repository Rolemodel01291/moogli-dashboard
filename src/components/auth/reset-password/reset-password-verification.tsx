import { Fragment, useState } from 'react';

import { Button, IconButton } from '@/components/ui/button';
import { AlertCircleIcon, CheckCircleIcon } from '@/icons';
import { ArrowWideLeftBoldIcon } from '@/icons/bordered';

import { Dialog, Transition } from '@headlessui/react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ResetPasswordVerification() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { success: boolean };
  const [open, setOpen] = useState(true);

  const onModalClose = () => {
    navigate('/');
    setOpen(false);
  };

  const onButtonClick = () => {
    if (state.success) {
      navigate('/login');
    } else {
      navigate('/forgot-password');
    }
  };

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
              <div>
                <Dialog.Title as='div' className='flex flex-col'>
                  <div className='relative mb-8'>
                    {!state.success && (
                      <IconButton
                        className='absolute left-0 text-neutrals-100'
                        icon={ArrowWideLeftBoldIcon}
                        onClick={() => navigate('/forgot-password')}
                        size='sm'
                        variant='tertiary'
                      />
                    )}
                    <img
                      alt='moogli icon'
                      className='mx-auto h-10'
                      src='../../assets/logo-figure-purple.svg'
                    />
                  </div>
                  <h1 className='mb-2 text-center text-title1 font-bold text-neutrals-400'>
                    {state.success ? 'You have done it!' : 'Oops.'}
                  </h1>
                  <span className='text-center text-caption text-neutrals-100'>
                    {state.success
                      ? 'Your password has been successfully reset'
                      : 'Something went wrong. Please try again'}
                  </span>
                </Dialog.Title>
              </div>
              <div className='flex justify-center'>
                {state.success ? (
                  <CheckCircleIcon
                    className='h-[120px] w-[120px]'
                    fill='rgb(var(--tw-color-brand-main-500)'
                  />
                ) : (
                  <AlertCircleIcon
                    className='h-[120px] w-[120px]'
                    fill='rgb(var(--tw-color-semantic-negative2-500)'
                  />
                )}
              </div>
              <Button
                block
                className='mb-3 font-normal'
                onClick={onButtonClick}
                size='lg'
                variant={state.success ? 'primary' : 'secondary'}
              >
                {state.success ? 'Login' : 'Try again'}
              </Button>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
