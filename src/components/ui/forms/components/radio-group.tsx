import * as RadixRadioGroup from '@radix-ui/react-radio-group';

const RadioGroupRoot: React.FC<RadixRadioGroup.RadioGroupProps> = ({
  children,
  ...rest
}) => {
  return (
    <RadixRadioGroup.Root asChild {...rest}>
      {children}
    </RadixRadioGroup.Root>
  );
};
export interface RadioGroupItemProps
  extends RadixRadioGroup.RadioGroupItemProps {
  variant?: 'default' | 'bordered';
}
const RadioGroupIndicator: React.FC<
  RadixRadioGroup.RadioGroupIndicatorProps
> = ({ children, ...rest }) => {
  return (
    <RadixRadioGroup.Indicator asChild {...rest}>
      {children}
    </RadixRadioGroup.Indicator>
  );
};

const RadioGroupItem: React.FC<RadioGroupItemProps> = ({ children, value }) => {
  return (
    <RadixRadioGroup.Item asChild value={value}>
      {children}
    </RadixRadioGroup.Item>
  );
};

export { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot };
