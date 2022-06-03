import { InputCheckbox } from '../components';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Core/Components/Form/InputCheckbox',
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof InputCheckbox>;

export const Example: ComponentStory<typeof InputCheckbox> = ({ disabled }) => {
  return (
    <form>
      <div className='inline-flex flex-row items-center'>
        <InputCheckbox disabled={disabled} />
        <span className='ml-1 text-caption'>Label</span>
      </div>
    </form>
  );
};
Example.args = {
  disabled: false,
};
