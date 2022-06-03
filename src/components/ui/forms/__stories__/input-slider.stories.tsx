import { LightSunIcon as LeftIcon } from '@/icons/bordered';
import { LightSunIcon as RightIcon } from '@/icons/filled';

import { InputSlider } from '../components';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Core/Components/Form/InputSlider',
  component: InputSlider,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof InputSlider>;

const Template: ComponentStory<typeof InputSlider> = ({
  disabled,
  iconLeft,
  iconRight,
}) => {
  return (
    <form>
      <InputSlider
        aria-label='Slider'
        defaultValue={[50]}
        disabled={disabled}
        iconLeft={iconLeft}
        iconRight={iconRight}
        max={100}
        step={1}
      />
    </form>
  );
};

export const Example: ComponentStory<typeof InputSlider> = Template.bind({});
Example.args = {
  disabled: false,
};

export const WithIcon: ComponentStory<typeof InputSlider> = Template.bind({});
WithIcon.args = {
  disabled: false,
  iconLeft: LeftIcon,
  iconRight: RightIcon,
};
