import { forwardRef } from 'react';

import { AlertCircleIcon, CheckCircleIcon } from '@/icons';
import LoadingWavePurple from '@/styles/lottie-files/loading-wave-purple.json';
import clsxm from '@/utils/clsxm';

import {
  disabledStyles,
  InputBaseProps,
  loadingIconSizes,
  renderIconPosition,
  renderInputIcon,
} from './utils';

import Lottie from 'react-lottie';

export interface InputIconProps
  extends InputBaseProps,
    React.ComponentPropsWithoutRef<'div'> {
  /* Showing success icon */
  isSuccess?: boolean;
  /* Showing error icon */
  isError?: boolean;
}

const InputIcon = forwardRef<HTMLDivElement, InputIconProps>(
  (
    {
      className,
      children,
      icon,
      disabled,
      inputSize = 'md',
      isLoading,
      isSuccess,
      isError,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        className={clsxm(
          'absolute inset-y-0 flex items-center justify-center text-neutrals-80 peer-focus:text-neutrals-400',
          isSuccess && 'text-brand-main-500',
          isError && 'text-semantic-negative2-500',
          renderIconPosition(
            isLoading || isSuccess || isError ? 'right' : 'left',
            inputSize
          ),
          disabledStyles,
          className
        )}
        ref={ref}
        {...rest}
      >
        {isLoading ? (
          <Lottie
            height='auto'
            options={{
              autoplay: true,
              animationData: LoadingWavePurple,
              loop: true,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
            width={loadingIconSizes(inputSize)}
          />
        ) : (
          renderInputIcon({
            icon: isSuccess
              ? CheckCircleIcon
              : isError
              ? AlertCircleIcon
              : icon,
            size: inputSize,
            iconPosition: isSuccess || isError ? 'right' : 'left',
          })
        )}
      </div>
    );
  }
);

InputIcon.displayName = 'InputIcon';

export default InputIcon;
