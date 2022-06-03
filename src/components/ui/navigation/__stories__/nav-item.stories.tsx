import { DashboardBasicBoldIcon } from '@/icons/bordered';

import NavItem from '../components/nav-item';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Core/Components/Navigation/NavItem',
  component: NavItem,
  argTypes: {
    notificationBadge: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = ({ isActive, disabled }) => {
  return (
    <nav className='bg-neutrals-500'>
      <div className='sm:px-6 lg:px-8 mx-auto max-w-7xl px-2'>
        <div className='flex space-x-4'>
          <NavItem
            disabled={disabled}
            icon={DashboardBasicBoldIcon}
            isActive={isActive}
            title='SectionName'
          />
          <NavItem
            disabled={disabled}
            icon={DashboardBasicBoldIcon}
            isActive={isActive}
            title='SectionName'
          />
        </div>
      </div>
    </nav>
  );
};

export const Example: ComponentStory<typeof NavItem> = Template.bind({});
Example.args = {
  isActive: false,
  disabled: false,
};
