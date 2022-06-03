import * as React from 'react';

import ArrowRightIcon from '../../../../icons/arrow-right';
import Button from '../components/button/button';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Core/Components/Buttons/Button',
  component: Button,
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
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({
  variant,
  size,
  block,
  disabled,
  isLoading,
  icon,
  iconPosition,
  onClick,
}) => (
  <Button
    block={block}
    disabled={disabled}
    icon={icon}
    iconPosition={iconPosition}
    isLoading={isLoading}
    onClick={onClick}
    size={size}
    type='button'
    variant={variant}
  >
    Push Me
  </Button>
);

export const Example: ComponentStory<typeof Button> = Template.bind({});
Example.args = {
  variant: 'primary',
  size: 'md',
  disabled: false,
  isLoading: false,
};

export const WithIcon: ComponentStory<typeof Button> = Template.bind({});
WithIcon.args = {
  ...Example.args,
  icon: ArrowRightIcon,
  iconPosition: 'left',
};
