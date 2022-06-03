import { useState } from 'react';

import { InputText, Selector } from '../components';
import { Allowed } from '../components/utils/types';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Core/Components/Form/InputSelect',
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    selectorSize: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof InputText>;

export const Example: ComponentStory<typeof Selector> = ({
  disabled,
  options,
  selectorSize,
}) => {
  const [value, setValue] = useState<Allowed>('');

  const handleChange = (selectedItem: Allowed) => {
    setValue(selectedItem);
  };
  return (
    <div>
      <Selector
        disabled={disabled}
        handleChange={handleChange}
        initialValue={value}
        options={options}
        placeholder='Placeholder'
        selectorSize={selectorSize}
      />
    </div>
  );
};

Example.args = {
  value: '',
  options: ['2021', '2022'],
  selectorSize: 'md',
  disabled: false,
};
