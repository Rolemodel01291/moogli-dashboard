import { forwardRef } from 'react';

import { ButtonBaseProps } from '../button/utils';

import { buttonSizes, renderButtonIcon } from './utils';

import clsx from 'clsx';

export interface OptionListItemBoxProps
  extends Omit<
      ButtonBaseProps,
      'type' | 'style' | 'iconPosition' | 'variant' | 'isLoading'
    >,
    React.ComponentPropsWithoutRef<'button'> {
  /** The size of the option list box. Available sizes: `"sm" | "md" | "lg"` */
  size?: 'sm' | 'md' | 'lg';
}

const OptionListItemBox = forwardRef<HTMLButtonElement, OptionListItemBoxProps>(
  (
    { className, block, size = 'md', icon, disabled, children, ...rest },
    ref
  ) => {
    return (
      <button
        className={clsx(
          buttonSizes(size),
          'rounded-full border focus:outline-none',
          className
        )}
        disabled={disabled}
        ref={ref}
        type='button'
        {...rest}
      >
        {renderButtonIcon({
          icon,
          size,
        })}
        {children}
      </button>
    );
  }
);

OptionListItemBox.displayName = 'OptionListItemBox';
export default OptionListItemBox;
