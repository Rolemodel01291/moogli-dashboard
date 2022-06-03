import * as React from 'react';

import ArrowRightIcon from '@/icons/arrow-right';

import IconButton from '../components/icon-button/icon-button';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Core/Components/Buttons/IconButton',
  component: IconButton,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'subtle'],
    },
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    children: {
      control: 'submit',
    },
    onClick: {
      action: 'clicked',
    },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = ({
  variant,
  size,
  disabled,
  isLoading,
  icon,
  onClick,
}) => (
  <IconButton
    disabled={disabled}
    icon={icon}
    isLoading={isLoading}
    onClick={onClick}
    size={size}
    type='button'
    variant={variant}
  />
);

export const Example: ComponentStory<typeof IconButton> = Template.bind({});
Example.args = {
  variant: 'primary',
  size: 'md',
  icon: ArrowRightIcon,
  disabled: false,
  isLoading: false,
};
