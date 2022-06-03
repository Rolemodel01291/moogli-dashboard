import { host } from '@/auth-provider';
import { Button, IconButton } from '@/components/ui/button';
import { InputGroup, InputIcon, InputText } from '@/components/ui/forms';
import { CloseBoldIcon } from '@/icons/bordered';
import { useEmailRegistered } from '@/utils/hooks/user';

import { useForgotPassword } from '../context';

import { Dialog } from '@headlessui/react';

export default function ForgotPassword() {
  const {
    email,
    nextStep,
    onCancel,
    onModalClose,
    onEmailChange,
    sendPasswordReset,
  } = useForgotPassword();
  const { isEmailRegistered, isLoading: isEmailFetching } =
    useEmailRegistered(email);

  const isButtonDisabled =
    isEmailRegistered === false ||
    !email ||
    isEmailRegistered === 'invalid' ||
    isEmailFetching;

  return (
    <>
      <div>
        <Dialog.Title as='div' className='mb-[50px] flex flex-col'>
          <div className='relative mb-8'>
            <IconButton
              className='absolute left-0 text-neutrals-100'
              icon={CloseBoldIcon}
              onClick={onModalClose}
              size='sm'
              variant='tertiary'
            />
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
            We will send you a link to get back into your account.
          </span>
        </Dialog.Title>
        <form className='flex flex-col space-y-4'>
          <InputGroup className='w-full'>
            <InputIcon
              inputSize='lg'
              isError={
                isEmailRegistered === false || isEmailRegistered === 'invalid'
              }
              isLoading={isEmailFetching}
              isSuccess={isEmailRegistered === true}
            />
            <InputText
              inputSize='lg'
              onChange={onEmailChange}
              placeholder='Email'
              type='email'
              value={email}
            />
          </InputGroup>
          <p className='pl-6 text-caption text-semantic-negative2-500'>
            {isEmailRegistered === false
              ? 'This email is not registered. Try another one please.'
              : isEmailRegistered === 'invalid'
              ? 'This email is invalid. Try another one please.'
              : null}
          </p>
        </form>
      </div>
      <div className='flex flex-col justify-center space-y-3'>
        <Button
          block
          className='font-normal'
          disabled={isButtonDisabled}
          onClick={() => {
            sendPasswordReset({
              email,
              actionCodeSettings: {
                url: `${host}/reset-password`,
              },
            });
            nextStep();
          }}
          size='lg'
          variant='primary'
        >
          Continue
        </Button>
        <Button
          block
          className='font-normal text-neutrals-80'
          onClick={onCancel}
          size='lg'
          variant='tertiary'
        >
          Nevermind, I got it
        </Button>
      </div>
    </>
  );
}
