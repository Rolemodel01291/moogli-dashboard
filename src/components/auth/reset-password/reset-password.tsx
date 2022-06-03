import { Fragment, useCallback, useEffect, useState } from 'react';

import { firebaseAuth } from '@/auth-provider';
import { Button, IconButton } from '@/components/ui/button';
import { InputGroup, InputText } from '@/components/ui/forms';
import { CheckIcon, EyeOffIcon, EyeOnIcon } from '@/icons';
import { CloseBoldIcon } from '@/icons/bordered';

import { Dialog, Transition } from '@headlessui/react';
import { useAuthConfirmPasswordReset } from '@react-query-firebase/auth';
import clsx from 'clsx';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const oobCode = params.get('oobCode');
  const { mutate: confirmPasswordReset, isLoading } =
    useAuthConfirmPasswordReset(firebaseAuth);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState({
    rule1: false,
    rule2: false,
    rule3: false,
  });

  const onModalClose = () => {
    navigate('/');
    setOpen(false);
  };

  const passwordValidate = useCallback(() => {
    if (newPassword.length > 6 && newPassword.length < 18) {
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
    if (newPassword.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*/)) {
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
    if (newPassword !== '' && newPassword === confirmPassword) {
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
  }, [confirmPassword, newPassword]);

  useEffect(() => {
    if (!oobCode) {
      navigate('/');
    }
  }, [navigate, oobCode]);

  useEffect(() => {
    passwordValidate();
  }, [newPassword, passwordValidate]);

  const onResetPassword = () => {
    if (!oobCode) return;

    confirmPasswordReset(
      { oobCode, newPassword },
      {
        onSuccess: () => {
          navigate('/reset-password/confirmation', {
            state: { success: true },
          });
        },
        onError: () => {
          navigate('/reset-password/confirmation', {
            state: { success: false },
          });
        },
      }
    );
  };

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
                      src='/assets/logo-figure-purple.svg'
                    />
                  </div>
                  <h1 className='mb-2 text-center text-title1 font-bold text-neutrals-400'>
                    Reset Your Password
                  </h1>
                  <span className='text-center text-caption text-neutrals-100'>
                    Please enter a new password
                  </span>
                </Dialog.Title>
                <form className='flex flex-col space-y-4'>
                  <InputGroup className='w-full'>
                    <InputText
                      className='w-full pr-14'
                      inputSize='lg'
                      name='password'
                      onChange={(e) => {
                        setNewPassword(e.target.value);
                      }}
                      placeholder='New Password'
                      type={showPassword ? 'text' : 'password'}
                      value={newPassword}
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
                        setConfirmPassword(e.target.value);
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
                <Button
                  block
                  className='mb-3 font-normal'
                  disabled={!allValidate}
                  isLoading={isLoading}
                  onClick={onResetPassword}
                  size='lg'
                  variant='primary'
                >
                  Complete
                </Button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
