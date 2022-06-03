import { Button, IconButton } from '@/components/ui/button';
import { InputGroup, InputIcon, InputText } from '@/components/ui/forms';
import { ArrowWideLeftBoldIcon } from '@/icons/bordered';
import { useEmailRegistered, useUsernameRegistered } from '@/utils/hooks/user';

import { useRegister } from '../context';

import { Dialog } from '@headlessui/react';

export default function EmailUsernameStep() {
  const { email, username, handleValueChange, nextStep, previousStep } =
    useRegister();
  const { isEmailRegistered, isLoading: isEmailFetching } =
    useEmailRegistered(email);
  const { isUsernameRegistered, isLoading: isUsernameFetching } =
    useUsernameRegistered(username);

  const isButtonDisabled =
    isEmailFetching ||
    isUsernameFetching ||
    isEmailRegistered === true ||
    isUsernameRegistered === true ||
    !email ||
    !username ||
    isEmailRegistered === 'invalid' ||
    isUsernameRegistered === 'invalid';

  return (
    <>
      <div>
        <Dialog.Title as='div' className='mb-[50px] flex flex-col'>
          <div className='relative mb-8'>
            <IconButton
              className='absolute left-0 text-neutrals-100'
              icon={ArrowWideLeftBoldIcon}
              onClick={previousStep}
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
            Get Access to the Extranet
          </h1>
          <span className='text-center text-caption text-neutrals-100'>
            Fill out the information below
          </span>
        </Dialog.Title>
        <form className='flex flex-col space-y-4'>
          <InputGroup className='w-full'>
            <InputIcon
              inputSize='lg'
              isError={
                isEmailRegistered === true || isEmailRegistered === 'invalid'
              }
              isLoading={isEmailFetching}
              isSuccess={isEmailRegistered === false}
            />
            <InputText
              inputSize='lg'
              onChange={(e) => {
                handleValueChange('email', e.target.value);
              }}
              placeholder='Email'
              type='email'
              value={email}
            />
          </InputGroup>
          <p className='pl-6 text-caption text-semantic-negative2-500'>
            {isEmailRegistered === true
              ? 'This email is already used. Try another one please.'
              : isEmailRegistered === 'invalid'
              ? 'This email is invalid. Try another one please.'
              : null}
          </p>
          <InputGroup className='w-full'>
            <InputIcon
              inputSize='lg'
              isError={
                isUsernameRegistered === true ||
                isUsernameRegistered === 'invalid'
              }
              isLoading={isUsernameFetching}
              isSuccess={isUsernameRegistered === false}
            />
            <InputText
              inputSize='lg'
              onChange={(e) => {
                handleValueChange('username', e.target.value);
              }}
              placeholder='Username'
              value={username}
            />
          </InputGroup>
          <p className='pl-6 text-caption text-semantic-negative2-500'>
            {isUsernameRegistered === 'invalid'
              ? 'Username can only contain lowercase (a-z), numbers, underscores, and periods.'
              : isUsernameRegistered === true
              ? 'This username is already used. Try another one please.'
              : null}
          </p>
        </form>
      </div>
      <div className='flex flex-col justify-center'>
        <div className='mb-4 flex items-center justify-center space-x-2'>
          <span className='h-[6px] w-[6px] rounded bg-neutrals-40' />
          <span className='h-[6px] w-6 rounded bg-brand-main-500' />
          <span className='h-[6px] w-[6px] rounded bg-neutrals-40' />
          <span className='h-[6px] w-[6px] rounded bg-neutrals-40' />
        </div>
        <Button
          block
          className='mb-3 font-normal'
          disabled={isButtonDisabled}
          onClick={nextStep}
          size='lg'
          variant='primary'
        >
          Continue
        </Button>
      </div>
    </>
  );
}
