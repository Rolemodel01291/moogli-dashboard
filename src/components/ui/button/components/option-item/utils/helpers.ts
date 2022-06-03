import { createElement } from 'react';

import { ButtonProps } from '../../button/utils';

import clsx from 'clsx';

export function buttonSizes(size?: 'sm' | 'md' | 'lg') {
  switch (size) {
    case 'sm': {
      return 'px-[15px] py-[8.5px] !text-caption border';
    }
    case 'md': {
      return 'px-[19px] py-[11px] !text-callout border';
    }
    case 'lg': {
      return 'px-[18.5px] py-[14.5px] !text-body border-[1.5px]';
    }
    default: {
      return 'px-[19px] py-[11px] !text-callout border';
    }
  }
}

export function buttonIconClasses(size?: 'sm' | 'md' | 'lg') {
  switch (size) {
    case 'sm': {
      return 'mr-2 h-5 w-5';
    }
    case 'md': {
      return 'mr-2.5 h-6 w-6';
    }
    case 'lg': {
      return 'mr-2.5 h-6 w-6';
    }
    default: {
      return 'mr-1.5 h-5 w-5';
    }
  }
}

export function renderButtonIcon({
  icon,
  size,
  additionalClasses,
}: {
  icon?: ButtonProps['icon'];
  size?: 'sm' | 'md' | 'lg';
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
