import { useState } from 'react';

import { InputToggle } from '../components';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Core/Components/Form/InputToggle',
  component: InputToggle,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof InputToggle>;

export const Example: ComponentStory<typeof InputToggle> = ({
  label,
  disabled,
}) => {
  const [enabled, setEnabled] = useState<boolean>(false);

  const handleChange = (value: boolean) => {
    setEnabled(value);
  };

  return (
    <InputToggle
      checked={enabled}
      disabled={disabled}
      label={label}
      onChange={handleChange}
    />
  );
};
Example.args = {
  label: 'Label',
  disabled: false,
};
