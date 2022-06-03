import { Fragment, useEffect, useState } from 'react';

import { Button, IconButton } from '@/components/ui/button';
import { InputGroup, InputIcon, InputText } from '@/components/ui/forms';
import { useAuth } from '@/context/auth/auth-context';
import { useAsync } from '@/hooks/use-async';
import { EyeOffIcon, EyeOnIcon } from '@/icons';
import { CloseBoldIcon } from '@/icons/bordered';
import { useEmailRegistered } from '@/utils/hooks/user';

import { ConfirmationDialog } from '../confirmation-dialog';

import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const { login, user } = useAuth();
  const { run, reset, error, isSuccess, isLoading, isError } = useAsync<
    void | never,
    Error
  >();
  const [open, setOpen] = useState(true);
  const [confirmationDialog, setConfirmationDialog] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const { isEmailRegistered, isLoading: isEmailFetching } =
    useEmailRegistered(email);

  const handleVisiblePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (isPasswordEmpty) {
      setTimeout(() => {
        setIsPasswordEmpty(false);
      }, 3000);
    }
  }, [isPasswordEmpty]);

  useEffect(() => {
    if (isSuccess || user) {
      navigate('/dashboard');
    }
  }, [isSuccess, navigate, user]);

  const onSignIn = async () => {
    if (password === '') {
      setIsPasswordEmpty(true);
      return;
    }
    setIsPasswordEmpty(false);
    await run(login({ email, password }));
  };

  const onModalClose = () => {
    setOpen(false);
    if (email !== '') setConfirmationDialog(true);
    if (email === '') navigate('/');
  };

  const onForgotPassword = () => {
    navigate('/forgot-password');
    setOpen(false);
  };

  const isButtonDisabled =
    isEmailFetching ||
    isEmailRegistered === false ||
    !email ||
    !password ||
    isEmailRegistered === 'invalid';

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
                      Hi, Welcome Back!
                    </h1>
                    <span className='text-center text-caption text-neutrals-100'>
                      Don’t have an account yet?{' '}
                      <Link
                        className='text-brand-main-500 underline hover:text-brand-main-600'
                        to='/register'
                      >
                        Create Account
                      </Link>
                    </span>
                  </Dialog.Title>
                  <form className='flex flex-col space-y-4'>
                    <InputGroup className='w-full'>
                      <InputIcon
                        inputSize='lg'
                        isError={
                          isEmailRegistered === false ||
                          isEmailRegistered === 'invalid'
                        }
                        isLoading={isEmailFetching}
                        isSuccess={isEmailRegistered === true}
                      />
                      <InputText
                        inputSize='lg'
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        placeholder='Email'
                        type='email'
                        value={email}
                      />
                    </InputGroup>
                    <p className='pl-6 text-caption text-semantic-negative2-500'>
                      {isEmailRegistered === false
                        ? 'This email is not registered. Try to Create Account.'
                        : isEmailRegistered === 'invalid'
                        ? 'This email is invalid. Try another one please.'
                        : null}
                    </p>
                    {error?.message === 'Email not verified' && (
                      <p className='pl-6 text-caption text-semantic-negative2-500'>
                        This email is not verified yet. Please click on the link
                        we sent you by email.
                      </p>
                    )}
                    {isEmailRegistered === true ? (
                      <>
                        <InputGroup className='w-full'>
                          <InputIcon inputSize='lg' isError={isError} />
                          <InputText
                            className='w-full pr-14'
                            inputSize='lg'
                            name='password'
                            onChange={(e) => {
                              reset();
                              setPassword(e.target.value);
                            }}
                            placeholder='Password'
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                          />
                          {isError ? null : (
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
                          )}
                        </InputGroup>
                        {error?.message === 'Incorrect password' && (
                          <p className='pl-6 text-caption text-semantic-negative2-500'>
                            The entered password is incorrect. Please try again
                            or reset the password.
                          </p>
                        )}
                        {isPasswordEmpty && (
                          <p className='pl-6 text-caption text-semantic-negative2-500'>
                            The Password is required
                          </p>
                        )}
                      </>
                    ) : null}
                  </form>
                </div>
                <div className='flex flex-col justify-center space-y-3'>
                  <Button
                    block
                    className='font-normal'
                    disabled={isButtonDisabled}
                    isLoading={isLoading}
                    onClick={onSignIn}
                    size='lg'
                    variant='primary'
                  >
                    Login
                  </Button>
                  <Button
                    block
                    className='font-normal text-neutrals-80'
                    onClick={onForgotPassword}
                    size='lg'
                    variant='tertiary'
                  >
                    Forgot Password?
                  </Button>
                </div>
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
        }}
        onDismiss={() => setOpen(true)}
        open={confirmationDialog}
      />
    </>
  );
}
