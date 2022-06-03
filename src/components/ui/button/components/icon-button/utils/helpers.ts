import { createElement } from 'react';

import type { ButtonSizes } from '../../button/utils';

import type { IconButtonProps } from './types';

import clsx from 'clsx';

export function buttonSizes(size?: ButtonSizes) {
  switch (size) {
    case 'xxs': {
      return 'p-[5px] border';
    }
    case 'xs': {
      return 'p-[5px] border';
    }
    case 'sm': {
      return 'p-[7px] border';
    }
    case 'md': {
      return 'p-[11px] border';
    }
    case 'lg': {
      return 'p-[14.5px] border-[1.5px]';
    }
    case 'xl': {
      return 'p-[18px] border-2';
    }
    default: {
      return 'p-4';
    }
  }
}

export function buttonIconClasses(size?: ButtonSizes) {
  switch (size) {
    case 'xxs': {
      return ['h-3 w-3'];
    }
    case 'xs': {
      return ['h-5 w-5'];
    }
    case 'sm': {
      return ['h-6 w-6'];
    }
    case 'md': {
      return ['h-6 w-6'];
    }
    case 'lg': {
      return ['h-6 w-6'];
    }
    case 'xl': {
      return ['h-6 w-6'];
    }
    default: {
      return ['h-6 w-6'];
    }
  }
}

export function renderButtonIcon({
  icon,
  size,
  additionalClasses,
}: {
  icon?: IconButtonProps['icon'];
  size?: ButtonSizes;
  additionalClasses?: string;
}) {
  if (icon) {
    return createElement(icon, {
      className: clsx(buttonIconClasses(size), additionalClasses),
      'aria-hidden': true,
      fill: 'currentColor',
    });
  }

  return null;
}
