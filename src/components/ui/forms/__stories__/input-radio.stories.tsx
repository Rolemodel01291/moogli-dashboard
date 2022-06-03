import { InputRadio } from '../components';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Core/Components/Form/InputRadio',
  component: InputRadio,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof InputRadio>;

export const Example: ComponentStory<typeof InputRadio> = ({
  disabled,
  checked,
}) => {
  return (
    <form className='flex flex-col space-y-1'>
      <div className='inline-flex flex-row items-center'>
        <InputRadio disabled={disabled} id='label-1' name='radioExample' />
        <label className='ml-1 text-caption' htmlFor='label-1'>
          Label 1
        </label>
      </div>
      <div className='inline-flex flex-row items-center'>
        <InputRadio checked={checked} disabled={disabled} name='radioExample' />
        <label className='ml-1 text-caption' htmlFor='label-2'>
          Label 1
        </label>
      </div>
    </form>
  );
};

Example.args = {
  disabled: false,
};
