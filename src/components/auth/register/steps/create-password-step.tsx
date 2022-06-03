import { useCallback, useEffect, useState } from 'react';

import { Button, IconButton } from '@/components/ui/button';
import { InputGroup, InputText } from '@/components/ui/forms';
import { useAuth } from '@/context/auth/auth-context';
import { CheckIcon, EyeOffIcon, EyeOnIcon } from '@/icons';
import { ArrowWideLeftBoldIcon } from '@/icons/bordered';

import { useRegister } from '../context';

import { Dialog } from '@headlessui/react';
import clsx from 'clsx';

export default function CreatePasswordStep() {
  const {
    nextStep,
    previousStep,
    password,
    confirmPassword,
    email,
    username,
    type,
    handleValueChange,
  } = useRegister();
  const { register } = useAuth();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    rule1: false,
    rule2: false,
    rule3: false,
  });

  const onCompleteStep = async () => {
    nextStep();
    await register({ email, username, password, type: type.toLowerCase() });
  };

  const passwordValidate = useCallback(() => {
    if (password.length > 6 && password.length < 18) {
      setPasswordValidation((prevState) => ({
        ...prevState,
        rule1: true,
      }));
    } else {
      setPasswordValidation((prevState) => ({
        ...prevState,
        rule1: false,
      }));
    }
    if (password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*/)) {
      setPasswordValidation((prevState) => ({
        ...prevState,
        rule2: true,
      }));
    } else {
      setPasswordValidation((prevState) => ({
        ...prevState,
        rule2: false,
      }));
    }
    if (password !== '' && password === confirmPassword) {
      setPasswordValidation((prevState) => ({
        ...prevState,
        rule3: true,
      }));
    } else {
      setPasswordValidation((prevState) => ({
        ...prevState,
        rule3: false,
      }));
    }
  }, [confirmPassword, password]);

  useEffect(() => {
    passwordValidate();
  }, [password, passwordValidate]);

  const handleVisiblePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleVisibleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const allValidate =
    passwordValidation.rule1 &&
    passwordValidation.rule2 &&
    passwordValidation.rule3;

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
              src='/assets/logo-figure-purple.svg'
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
            <InputText
              className='w-full pr-14'
              inputSize='lg'
              name='password'
              onChange={(e) => {
                handleValueChange(e.target.name, e.target.value);
              }}
              placeholder='Password'
              type={showPassword ? 'text' : 'password'}
              value={password}
            />
            <IconButton
              className={clsx(
                showPassword
                  ? 'text-brand-main-500 hover:text-brand-main-500'
                  : 'text-neutrals-400 hover:text-neutrals-400',
                'absolute inset-y-0 right-0 ml-3 pr-4'
              )}
              icon={showPassword ? EyeOnIcon : EyeOffIcon}
              onClick={handleVisiblePassword}
              size='sm'
              variant='tertiary'
            />
          </InputGroup>
          <InputGroup className='w-full'>
            <InputText
              className='w-full pr-14'
              inputSize='lg'
              name='confirmPassword'
              onChange={(e) => {
                handleValueChange(e.target.name, e.target.value);
              }}
              placeholder='Confirm Password'
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
            />
            <IconButton
              className={clsx(
                showConfirmPassword
                  ? 'text-brand-main-500 hover:text-brand-main-500'
                  : 'text-neutrals-400 hover:text-neutrals-400',
                'absolute inset-y-0 right-0 ml-3 pr-4'
              )}
              icon={showConfirmPassword ? EyeOnIcon : EyeOffIcon}
              onClick={handleVisibleConfirmPassword}
              size='sm'
              variant='tertiary'
            />
          </InputGroup>
          <div className='flex flex-col space-y-1 pl-6'>
            <div className='flex items-center'>
              {passwordValidation.rule1 ? (
                <CheckIcon
                  className='h-3 w-3'
                  fill='rgb(var(--tw-color-brand-main-500)'
                />
              ) : (
                <span className='h-3 w-3 rounded-full bg-neutrals-40' />
              )}
              <p className='ml-[10px] text-caption text-neutrals-400'>
                number of characters from 6 to 18
              </p>
            </div>
            <div className='flex items-center'>
              {passwordValidation.rule2 ? (
                <CheckIcon
                  className='h-3 w-3'
                  fill='rgb(var(--tw-color-brand-main-500)'
                />
              ) : (
                <span className='h-3 w-3 rounded-full bg-neutrals-40' />
              )}
              <p className='ml-[10px] text-caption text-neutrals-400'>
                at least 1 capital letter and 1 number
              </p>
            </div>
            <div className='flex items-center'>
              {passwordValidation.rule3 ? (
                <CheckIcon
                  className='h-3 w-3'
                  fill='rgb(var(--tw-color-brand-main-500)'
                />
              ) : (
                <span className='h-3 w-3 rounded-full bg-neutrals-40' />
              )}
              <p className='ml-[10px] text-caption text-neutrals-400'>
                both passwords match
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className='flex flex-col justify-center'>
        <div className='mb-4 flex items-center justify-center space-x-2'>
          <span className='h-[6px] w-[6px] rounded bg-neutrals-40' />
          <span className='h-[6px] w-[6px] rounded bg-neutrals-40' />
          <span className='h-[6px] w-6 rounded bg-brand-main-500' />
          <span className='h-[6px] w-[6px] rounded bg-neutrals-40' />
        </div>
        <Button
          block
          className='mb-3 font-normal'
          disabled={!allValidate}
          onClick={onCompleteStep}
          size='lg'
          variant='primary'
        >
          Continue
        </Button>
      </div>
    </>
  );
}
