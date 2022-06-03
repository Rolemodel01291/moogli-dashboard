import { forwardRef } from 'react';

import { AlertCircleIcon } from '@/icons';
import clsxm from '@/utils/clsxm';

import { InputBaseProps, renderInputIcon } from './utils';

export interface InputIconProps
  extends InputBaseProps,
    React.ComponentPropsWithoutRef<'div'> {
  /* Showing error icon */
  isError?: boolean;
}

const ErrorIcon = forwardRef<HTMLDivElement, InputIconProps>(
  (
    {
      className,
      children,
      icon,
      disabled,
      inputSize = 'md',
      isLoading,
      isError,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        className={clsxm(
          'flex items-center text-neutrals-80 peer-focus:text-neutrals-400',
          isError && 'text-semantic-negative2-500',
          className
        )}
        ref={ref}
        {...rest}
      >
        {renderInputIcon({
          icon: isError ? AlertCircleIcon : icon,
          size: inputSize,
          iconPosition: 'left',
        })}
      </div>
    );
  }
);

ErrorIcon.displayName = 'ErrorIcon';

export default ErrorIcon;
