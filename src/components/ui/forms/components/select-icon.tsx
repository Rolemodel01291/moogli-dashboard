import { forwardRef } from 'react';

import clsxm from '@/utils/clsxm';

import {
  disabledStyles,
  InputBaseProps,
  renderSelectIcon,
  renderSelectPosition,
} from './utils';

export interface InputIconProps
  extends InputBaseProps,
    React.ComponentPropsWithoutRef<'button'> {
  /* Showing error style */
  isError?: boolean;

  selectedItem: string | undefined;

  onArrowClick: () => void;
}

const SelectIcon = forwardRef<HTMLButtonElement, InputIconProps>(
  (
    {
      className,
      children,
      icon,
      disabled,
      inputSize,
      isError,
      selectedItem,
      onArrowClick,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        className={clsxm(
          'absolute inset-y-0 flex items-center justify-center ',
          renderSelectPosition('right', inputSize ?? 'md'),
          disabledStyles,
          selectedItem && 'text-neutrals-400',
          isError && 'text-neutrals-80',
          disabled && 'text-neutrals-60',
          className
        )}
        onClick={() => {
          onArrowClick();
        }}
        ref={ref}
        {...rest}
      >
        {renderSelectIcon({
          icon,
          size: inputSize,
          iconPosition: 'right',
        })}
      </button>
    );
  }
);

SelectIcon.displayName = 'SelectIcon';

export default SelectIcon;
