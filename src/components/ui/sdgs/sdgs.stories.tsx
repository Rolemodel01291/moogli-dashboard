import SDGs from './sdgs';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Core/Components/SDGs',
  argTypes: {
    size: {
      options: [120, 160, 200, 240, 320, 480],
      control: { type: 'radio' },
    },
    variant: {
      options: [
        'no poverty',
        'zero hunger',
        'good health and well-being',
        'quality education',
        'gender equality',
        'clean water and sanitation',
        'affordable and clean energy',
        'decent work and economic growth',
        'industry inovation infrastrucuture',
        'reduced inequalities',
        'sustainable cities and communities',
        'responsible consumption and production',
        'climate action',
        'life below water',
        'life on land',
        'peace justice and strong institutions',
        'partnership for the goals',
      ],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof SDGs>;

const Template: ComponentStory<typeof SDGs> = (args) => <SDGs {...args} />;

export const Example = Template.bind({});
Example.args = {
  size: 200,
  variant: 'no poverty',
};
