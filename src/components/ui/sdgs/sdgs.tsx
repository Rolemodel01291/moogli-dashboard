import { forwardRef } from 'react';

import clsxm from '@/utils/clsxm';

import { SdgsProps, sdgsVariant } from './utils';

const SDGs = forwardRef<HTMLSpanElement, SdgsProps>(
  ({ className, style, variant, size = 200, ...rest }, ref) => {
    const renderImage = () => (
      <img
        alt={sdgsVariant(variant).alt}
        className='h-auto w-[76%] object-cover'
        src={sdgsVariant(variant).src}
      />
    );

    const renderSdgs = () => {
      return (
        <span
          className={clsxm(
            sdgsVariant(variant).color,
            'flex items-center justify-center',
            className
          )}
          data-testid='sdgs-container'
          ref={ref}
          style={{
            width: size,
            height: size,
            ...style,
          }}
          {...rest}
        >
          {renderImage()}
        </span>
      );
    };
    return renderSdgs();
  }
);

SDGs.displayName = 'SDGs';

export default SDGs;
