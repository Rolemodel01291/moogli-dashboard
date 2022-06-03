import { useState } from 'react';

import { host } from '@/auth-provider';
import { Button } from '@/components/ui/button';

import { useForgotPassword } from '../context';

import { Dialog } from '@headlessui/react';
import Countdown, { zeroPad } from 'react-countdown';

export default function EmailVerificationStep() {
  const { email, sendPasswordReset } = useForgotPassword();
  const [duration, setDuration] = useState(() => Date.now() + 100000);
  const [sendEmailButton, setSendEmailButton] = useState<
    'idle' | 'true' | 'false'
  >('idle');

  function onResendEmail() {
    sendPasswordReset({
      email,
      actionCodeSettings: { url: `${host}/reset-password` },
    });
    setSendEmailButton('true');
    setDuration(Date.now() + 100000);
  }

  return (
    <>
      <div>
        <Dialog.Title as='div' className='mb-[50px] flex flex-col'>
          <div className='relative mb-8'>
            <img
              alt='moogli icon'
              className='mx-auto h-10'
              src='assets/logo-figure-purple.svg'
            />
          </div>
          <h1 className='mb-2 text-center text-title1 font-bold text-neutrals-400'>
            Forgot Password
          </h1>
          <span className='text-center text-caption text-neutrals-100'>
            To continue, please click the link and change your password
          </span>
        </Dialog.Title>
        <div className='space-y-3'>
          <p className='text-center text-body text-neutrals-400'>
            We sent a link to the email:
          </p>
          <p className='text-center text-body font-medium text-neutrals-400'>
            {email}
          </p>
        </div>
      </div>
      <span className='text-center text-body text-neutrals-100'>
        Send email again in:{' '}
        <Countdown
          key={duration}
          date={duration}
          onComplete={() => setSendEmailButton('false')}
          renderer={({ minutes, seconds, completed, api }) => {
            if (completed) {
              return (
                <span className='text-body font-medium text-brand-main-500'>
                  Now
                </span>
              );
            } else {
              api.start();
              return (
                <span className='font-medium'>
                  {zeroPad(minutes, 1)}:{zeroPad(seconds)}
                </span>
              );
            }
          }}
        />
      </span>
      <div className='flex flex-col justify-center'>
        <Button
          block
          className='mb-3 font-normal'
          disabled={sendEmailButton === 'true' || sendEmailButton === 'idle'}
          onClick={onResendEmail}
          size='lg'
          variant='primary'
        >
          Send Email Again
        </Button>
      </div>
    </>
  );
}
