import { forwardRef } from 'react';

import LoadingWaveLight from '@/styles/lottie-files/loading-wave-light.json';
import LoadingWavePurple from '@/styles/lottie-files/loading-wave-purple.json';
import clsxm from '@/utils/clsxm';

import {
  buttonVariant,
  disabledStyles,
  loadingIconSizes,
} from '../button/utils';

import type { IconButtonProps } from './utils';
import { buttonSizes, renderButtonIcon } from './utils';

import Lottie from 'react-lottie';

/**
 * Button component used for primary, secondary, subtle, and tertiary actions.
 *
 * @link https://tailwindui.com/components/application-ui/elements/buttons#component-80fd0d5ac7982f1a83b171bb0fb9e116
 */
const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      style,
      type,
      size = 'md',
      variant = 'primary',
      icon,
      isLoading,
      disabled,
      ...rest
    },
    ref
  ) => (
    <button
      className={clsxm(
        buttonSizes(size),
        buttonVariant(variant),
        disabledStyles(variant),
        isLoading ? '!py-0' : '',
        'items-center justify-center rounded-full font-medium focus:outline-none',
        className
      )}
      disabled={disabled}
      ref={ref}
      style={style}
      type={type ?? 'button'}
      {...rest}
    >
      {!isLoading &&
        renderButtonIcon({
          icon,
          size,
        })}
      {isLoading ? (
        <Lottie
          height='auto'
          options={{
            autoplay: true,
            animationData:
              variant === 'primary' ? LoadingWaveLight : LoadingWavePurple,
            loop: true,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
          width={loadingIconSizes(size)}
        />
      ) : (
        ''
      )}
    </button>
  )
);

IconButton.displayName = 'IconButton';
export default IconButton;
