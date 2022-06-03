import Avatar from './avatar';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Core/Components/Avatar',
  argTypes: {
    size: {
      options: [24, 32, 40, 48, 72, 96],
      control: { type: 'radio' },
    },
    name: {
      control: 'text',
    },
    src: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Example = Template.bind({});
Example.args = {
  size: 48,
  name: 'Hani Husamuddin',
  src: 'https://picsum.photos/id/2/400/400',
};
