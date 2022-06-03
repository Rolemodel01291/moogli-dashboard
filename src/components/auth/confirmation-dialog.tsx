import { Fragment } from 'react';

import { Button } from '@/components/ui/button';

import { Dialog, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

interface ConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  onDismiss?: () => void;
  onConfirm?: () => void;
}

export function ConfirmationDialog({
  open,
  onClose,
  onDismiss,
  onConfirm,
}: ConfirmationDialogProps) {
  const navigate = useNavigate();

  const onModalClose = () => {
    onDismiss?.();
    onClose();
  };

  const onContinue = () => {
    onConfirm?.();
    navigate('/');
    onClose();
  };

  return (
    <Transition appear as={Fragment} show={open}>
      <Dialog
        as='div'
        className='fixed inset-0 z-10 overflow-y-auto'
        // Do nothing when the `Dialog` is dismissed (via the overlay or Escape key)
        onClose={() => {}}
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
            <div className='my-8 inline-flex h-[484px] w-full max-w-[528px] transform flex-col justify-between overflow-hidden rounded-[40px] bg-neutrals-0 p-[50px] text-left align-middle shadow-center-md transition-all'>
              <div>
                <Dialog.Title as='div' className='flex flex-col'>
                  <div className='relative mb-8'>
                    <img
                      alt='moogli icon'
                      className='mx-auto h-10'
                      src='assets/logo-figure-purple.svg'
                    />
                  </div>
                  <h1 className='mb-2 text-center text-title1 font-bold text-neutrals-400'>
                    Do you want to close?
                  </h1>
                  <span className='text-center text-caption text-neutrals-100'>
                    You will lose all the data entered
                  </span>
                </Dialog.Title>
              </div>
              <div className='flex flex-col justify-center space-y-3'>
                <Button
                  block
                  className='font-normal'
                  onClick={onContinue}
                  size='lg'
                  variant='primary'
                >
                  Continue
                </Button>
                <Button
                  block
                  className='font-normal text-neutrals-80'
                  onClick={onModalClose}
                  size='lg'
                  variant='tertiary'
                >
                  Nope, come back
                </Button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
