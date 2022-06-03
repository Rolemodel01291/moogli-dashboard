import { BuildingFactoryMediumIcon } from '@/icons/bordered';

import { OptionListItemBox } from '../../button';
import {
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupRoot,
} from '../components';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import clsx from 'clsx';

export default {
  title: 'Core/Components/Form/RadioGroup',
  component: RadioGroupRoot,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof OptionListItemBox>;

export const Example: ComponentStory<typeof OptionListItemBox> = ({
  disabled,
}) => {
  return (
    <form>
      <RadioGroupRoot aria-label='View density' defaultValue='small'>
        <div className='flex w-80 flex-col space-y-4'>
          <RadioGroupItem value='small'>
            <OptionListItemBox
              className='group flex items-center text-neutrals-80 disabled:border-neutrals-40 disabled:text-neutrals-40'
              disabled={disabled}
              icon={BuildingFactoryMediumIcon}
              id='r1'
              size='sm'
            >
              Small
              <div className='relative ml-auto h-4 w-4 rounded-full bg-neutrals-60'>
                <div
                  className={clsx(
                    disabled
                      ? 'bg-neutrals-40'
                      : 'bg-neutrals-60 group-hover:bg-neutrals-70',
                    'absolute h-4 w-4 rounded-full '
                  )}
                />
                <RadioGroupIndicator>
                  <div
                    className={clsx(
                      disabled ? 'bg-neutrals-40' : 'bg-brand-main-500',
                      'radio-small absolute h-4 w-4 rounded-full'
                    )}
                  />
                </RadioGroupIndicator>
              </div>
            </OptionListItemBox>
          </RadioGroupItem>
          <RadioGroupItem value='medium'>
            <OptionListItemBox
              className='group flex items-center text-neutrals-80 disabled:border-neutrals-40 disabled:text-neutrals-40'
              disabled={disabled}
              icon={BuildingFactoryMediumIcon}
              id='r2'
            >
              Medium
              <div className='relative ml-auto h-5 w-5 rounded-full bg-neutrals-60'>
                <div
                  className={clsx(
                    disabled
                      ? 'bg-neutrals-40'
                      : 'bg-neutrals-60 group-hover:bg-neutrals-70',
                    'absolute h-5 w-5 rounded-full '
                  )}
                />
                <RadioGroupIndicator>
                  <div
                    className={clsx(
                      disabled ? 'bg-neutrals-40' : 'bg-brand-main-500',
                      'absolute h-5 w-5 rounded-full '
                    )}
                  />
                </RadioGroupIndicator>
              </div>
            </OptionListItemBox>
          </RadioGroupItem>
          <RadioGroupItem value='large'>
            <OptionListItemBox
              className='group flex items-center border-[1.5px] text-neutrals-80 disabled:border-neutrals-40 disabled:text-neutrals-40'
              disabled={disabled}
              icon={BuildingFactoryMediumIcon}
              id='r3'
              size='lg'
            >
              Large
              <div className='relative ml-auto h-5 w-5 rounded-full bg-neutrals-60'>
                <div
                  className={clsx(
                    disabled
                      ? 'bg-neutrals-40'
                      : 'bg-neutrals-60 group-hover:bg-neutrals-70',
                    'absolute h-5 w-5 rounded-full '
                  )}
                />
                <RadioGroupIndicator>
                  <div
                    className={clsx(
                      disabled ? 'bg-neutrals-40' : 'bg-brand-main-500',
                      'absolute h-5 w-5 rounded-full '
                    )}
                  />
                </RadioGroupIndicator>
              </div>
            </OptionListItemBox>
          </RadioGroupItem>
        </div>
      </RadioGroupRoot>
    </form>
  );
};

Example.args = {
  disabled: false,
};
