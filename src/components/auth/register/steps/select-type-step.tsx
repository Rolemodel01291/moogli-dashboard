import { Button, IconButton, OptionListItemBox } from '@/components/ui/button';
import {
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupRoot,
} from '@/components/ui/forms';
import {
  BuildingBankMediumIcon,
  BuildingFactoryMediumIcon,
  CloseBoldIcon,
} from '@/icons/bordered';

import { useRegister } from '../context';

import { Dialog } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

export default function SelectTypeStep() {
  const navigate = useNavigate();
  const { type, handleSelectType, nextStep, onModalClose } = useRegister();

  const onHaveAccountClick = () => {
    onModalClose();
    navigate('/login');
  };

  return (
    <>
      <div>
        <Dialog.Title as='div' className='mb-[50px] flex flex-col'>
          <div className='relative mb-8'>
            <IconButton
              className='absolute left-0 text-neutrals-100'
              icon={CloseBoldIcon}
              onClick={() => {
                onModalClose();
                handleSelectType('');
              }}
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
            By continuing, you’re agree to the{' '}
            <a
              className='text-brand-main-500 hover:text-brand-main-600'
              href='/'
            >
              Terms of Service
            </a>
          </span>
        </Dialog.Title>
        <RadioGroupRoot
          aria-label='View density'
          onValueChange={handleSelectType}
          value={type}
        >
          <div className='flex w-full flex-col space-y-4'>
            <RadioGroupItem value='Municipality'>
              <OptionListItemBox
                className='group flex items-center text-neutrals-80 disabled:border-neutrals-40 disabled:text-neutrals-40'
                icon={BuildingBankMediumIcon}
                id='municipality'
                size='lg'
              >
                Municipality
                <div className='relative ml-auto h-5 w-5 rounded-full bg-neutrals-60'>
                  <div className='absolute h-5 w-5 rounded-full bg-neutrals-60 group-hover:bg-neutrals-70' />
                  <RadioGroupIndicator>
                    <div className='absolute h-5 w-5 rounded-full bg-brand-main-500' />
                  </RadioGroupIndicator>
                </div>
              </OptionListItemBox>
            </RadioGroupItem>
            <RadioGroupItem value='Company'>
              <OptionListItemBox
                className='group flex items-center text-neutrals-80 disabled:border-neutrals-40 disabled:text-neutrals-40'
                icon={BuildingFactoryMediumIcon}
                id='company'
                size='lg'
              >
                Company
                <div className='relative ml-auto h-5 w-5 rounded-full bg-neutrals-60'>
                  <div className='absolute h-5 w-5 rounded-full bg-neutrals-60 group-hover:bg-neutrals-70' />
                  <RadioGroupIndicator>
                    <div className='absolute h-5 w-5 rounded-full bg-brand-main-500' />
                  </RadioGroupIndicator>
                </div>
              </OptionListItemBox>
            </RadioGroupItem>
          </div>
        </RadioGroupRoot>
      </div>
      <div className='flex flex-col justify-center'>
        <div className='mb-4 flex items-center justify-center space-x-2'>
          <span className='h-[6px] w-6 rounded bg-brand-main-500' />
          <span className='h-[6px] w-[6px] rounded bg-neutrals-40' />
          <span className='h-[6px] w-[6px] rounded bg-neutrals-40' />
          <span className='h-[6px] w-[6px] rounded bg-neutrals-40' />
        </div>
        <Button
          block
          className='mb-3 font-normal'
          disabled={type === ''}
          onClick={nextStep}
          size='lg'
          variant='primary'
        >
          Continue
        </Button>
        <Button
          block
          className='font-normal text-neutrals-80 hover:text-neutrals-90'
          onClick={onHaveAccountClick}
          size='lg'
          variant='tertiary'
        >
          I already have account
        </Button>
      </div>
    </>
  );
}
