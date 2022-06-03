/* eslint-disable complexity */
import { useState } from 'react';

import { EyeOffIcon, EyeOnIcon, SearchIcon } from '@/icons';

import { IconButton } from '../../button';
import { FormLabel, InputGroup, InputIcon, InputText } from '../components';
import { InputBaseProps } from '../components/utils';

import { ComponentMeta, Story } from '@storybook/react';
import clsx from 'clsx';

export default {
  title: 'Core/Components/Form/InputText',
  argTypes: {
    isLoading: {
      control: 'boolean',
    },
    isSuccess: {
      control: 'boolean',
    },
    isError: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    inputSize: {
      options: ['sm', 'md', 'lg'],
    },
  },
} as ComponentMeta<typeof InputText>;

export const Example: Story<
  InputBaseProps & { isSuccess: boolean; isError: boolean }
> = ({ disabled, inputSize, isLoading, isSuccess, isError }) => {
  return (
    <div className='space-y-2'>
      <InputGroup className='w-full max-w-xs'>
        <InputIcon
          inputSize={inputSize}
          isError={isError}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
        <InputText
          className={clsx(isSuccess || isError ? 'pr-11' : '', 'w-full')}
          disabled={disabled}
          id='textDummy'
          inputSize={inputSize}
          isLoading={isLoading}
          name='textDummy'
          placeholder='Type here...'
        />
      </InputGroup>
    </div>
  );
};
Example.args = {
  inputSize: 'md',
  isSuccess: false,
  isError: false,
};

export const WithIcons: Story<
  InputBaseProps & { isSuccess: boolean; isError: boolean }
> = ({ disabled, isLoading, isSuccess, isError }) => {
  return (
    <div className='mt-6 mb-12 grid grid-cols-[repeat(auto-fill,minmax(calc(1116px_/_4_-_24px),1fr))] gap-6'>
      <div className='space-y-2'>
        <FormLabel htmlFor='textDummy'>Small</FormLabel>
        <InputGroup className='w-full max-w-xs'>
          <InputIcon
            inputSize='sm'
            isError={isError}
            isLoading={isLoading}
            isSuccess={isSuccess}
          />
          <InputText
            className={clsx(
              isSuccess || isError ? 'pr-10' : '',
              'w-full pl-[42px]'
            )}
            disabled={disabled}
            id='textDummy'
            inputSize='sm'
            isLoading={isLoading}
            name='textDummy'
            placeholder='Type here...'
          />
          <InputIcon disabled={disabled} icon={SearchIcon} inputSize='sm' />
        </InputGroup>
      </div>
      <div className='space-y-2'>
        <FormLabel className='text-callout' htmlFor='textDummy'>
          Medium
        </FormLabel>
        <InputGroup className='w-full max-w-xs'>
          <InputIcon
            isError={isError}
            isLoading={isLoading}
            isSuccess={isSuccess}
          />
          <InputText
            className={clsx(
              isSuccess || isError ? 'pr-11' : '',
              'w-full pl-[50px]'
            )}
            disabled={disabled}
            id='textDummy'
            isLoading={isLoading}
            name='textDummy'
            placeholder='Type here...'
          />
          <InputIcon disabled={disabled} icon={SearchIcon} />
        </InputGroup>
      </div>
      <div className='space-y-2'>
        <FormLabel className='text-body' htmlFor='textDummy'>
          Large
        </FormLabel>
        <InputGroup className='w-full max-w-xs'>
          <InputIcon
            inputSize='lg'
            isError={isError}
            isLoading={isLoading}
            isSuccess={isSuccess}
          />
          <InputText
            className={clsx(
              isSuccess || isError ? 'pr-14' : '',
              'w-full pl-[54px]'
            )}
            disabled={disabled}
            id='textDummy'
            inputSize='lg'
            isLoading={isLoading}
            name='textDummy'
            placeholder='Type here...'
          />
          <InputIcon disabled={disabled} icon={SearchIcon} inputSize='lg' />
        </InputGroup>
      </div>
    </div>
  );
};
WithIcons.args = {
  isSuccess: false,
  isError: false,
};

export const Password: Story<
  InputBaseProps & { isSuccess: boolean; isError: boolean }
> = ({ disabled, isLoading }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleVisiblePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='space-y-2'>
      <InputGroup className='w-full max-w-xs'>
        <InputText
          className='w-full pr-11'
          disabled={disabled}
          id='textDummy'
          isLoading={isLoading}
          name='textDummy'
          placeholder='Type here...'
          type={showPassword ? 'text' : 'password'}
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
    </div>
  );
};
Password.args = {
  disabled: false,
};
