import { forwardRef } from 'react';

import { AvatarProps } from './utils';

const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  (
    { className, style, src, alt = undefined, name, size = 48, ...rest },
    ref
  ) => {
    const renderImage = () => (
      <img
        alt={name ?? alt}
        className='absolute h-full w-full object-cover'
        src={src}
      />
    );

    const renderAvatar = () => {
      return (
        <span
          className='relative block overflow-hidden rounded-full bg-brand-main-300'
          data-testid='avatar-container'
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
    return renderAvatar();
  }
);

Avatar.displayName = 'Avatar';

export default Avatar;
