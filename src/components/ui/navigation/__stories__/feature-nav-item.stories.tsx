import { BellBasicMediumIcon } from '@/icons/bordered';

import FeatureNavItem from '../components/feature-nav-item';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Core/Components/Navigation/FeatureNavItem',
  component: FeatureNavItem,
  argTypes: {
    notificationBadge: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof FeatureNavItem>;

const Template: ComponentStory<typeof FeatureNavItem> = ({
  notificationBadge,
  disabled,
}) => {
  return (
    <div className='w-24 bg-neutrals-500 p-4'>
      <FeatureNavItem
        disabled={disabled}
        icon={BellBasicMediumIcon}
        notificationBadge={notificationBadge}
      />
    </div>
  );
};

export const Example: ComponentStory<typeof FeatureNavItem> = Template.bind({});
Example.args = {
  notificationBadge: true,
  disabled: false,
};
