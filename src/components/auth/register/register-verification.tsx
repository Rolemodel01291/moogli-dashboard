import { Fragment, useEffect, useState } from 'react';

import { firebaseAuth } from '@/auth-provider';
import { Button } from '@/components/ui/button';
import { AlertCircleIcon, CheckCircleIcon } from '@/icons';
import LoadingWaveDark from '@/styles/lottie-files/loading-wave-dark.json';

import { Dialog, Transition } from '@headlessui/react';
import { useAuthApplyActionCode } from '@react-query-firebase/auth';
import Lottie from 'react-lottie';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function EmailConfirmation() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { mutate: applyActionCode, isLoading } =
    useAuthApplyActionCode(firebaseAuth);
  const oobCode = params.get('oobCode');
  const [emailVerified, setEmailVerified] = useState(false);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (oobCode) {
      applyActionCode(oobCode, {
        onSuccess: () => {
          setEmailVerified(true);
        },
        onError: () => {
          setEmailVerified(false);
        },
      });
    }
  }, [applyActionCode, oobCode]);

  const onModalClose = () => {
    navigate('/');
    setOpen(false);
  };

  const onButtonClick = () => {
    if (emailVerified) {
      navigate('/login');
    } else {
      navigate('/register');
    }
  };

  const loadingComponent = (
    <div>
      <Dialog.Title as='div' className='mb-[50px] flex flex-col'>
        <div className='relative mb-8'>
          <img
            alt='moogli icon'
            className='mx-auto h-10'
            src='../../../assets/logo-figure-purple.svg'
          />
        </div>
        <h1 className='mb-2 text-center text-title1 font-bold text-neutrals-400'>
          Please wait
        </h1>
        <span className='text-center text-caption text-neutrals-100'>
          We&apos;re verifying your email...
        </span>
      </Dialog.Title>
      <div className='flex justify-center'>
        <Lottie
          height='auto'
          isClickToPauseDisabled
          options={{
            autoplay: true,
            animationData: LoadingWaveDark,
            loop: true,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
          width={120}
        />
      </div>
    </div>
  );

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
              {isLoading ? (
                loadingComponent
              ) : (
                <>
                  <div>
                    <Dialog.Title as='div' className='flex flex-col'>
                      <div className='relative mb-8'>
                        <img
                          alt='moogli icon'
                          className='mx-auto h-10'
                          src='../../../assets/logo-figure-purple.svg'
                        />
                      </div>
                      <h1 className='mb-2 text-center text-title1 font-bold text-neutrals-400'>
                        {emailVerified ? 'You have done it!' : 'Oops.'}
                      </h1>
                      <span className='text-center text-caption text-neutrals-100'>
                        {emailVerified
                          ? 'Your account has been successfully created'
                          : 'Something went wrong. Please try again'}
                      </span>
                    </Dialog.Title>
                  </div>
                  <div className='flex justify-center'>
                    {emailVerified ? (
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
                    variant={emailVerified ? 'primary' : 'secondary'}
                  >
                    {emailVerified ? 'Join the Extranet' : 'Try again'}
                  </Button>
                </>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
