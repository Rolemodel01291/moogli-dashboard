import { createElement } from 'react';

import {
  ButtonIconPositions,
  ButtonProps,
  ButtonSizes,
  ButtonVariants,
} from './types';

import clsx from 'clsx';

export function disabledStyles(variant: ButtonVariants) {
  switch (variant) {
    case 'primary': {
      return 'disabled:cursor-not-allowed disabled:bg-neutrals-40';
    }
    case 'secondary': {
      return 'disabled:cursor-not-allowed disabled:border-neutrals-40 disabled:text-neutrals-40';
    }
    case 'subtle': {
      return 'disabled:cursor-not-allowed disabled:border-neutrals-10 disabled:text-neutrals-40';
    }
    case 'tertiary': {
      return 'disabled:cursor-not-allowed disabled:text-neutrals-40';
    }
    default: {
      return 'disabled:cursor-not-allowed disabled:bg-neutrals-40';
    }
  }
}

export function buttonBlockStyles(
  block?: boolean,
  iconPosition: ButtonIconPositions = 'left'
) {
  return [
    block ? 'flex' : 'inline-flex',
    iconPosition === 'right' ? 'flex-row-reverse' : 'flex-row',
  ];
}

export function buttonSizes(size?: ButtonSizes) {
  switch (size) {
    case 'xxs': {
      return 'px-[17px] py-[3.5px] !text-caption3 border';
    }
    case 'xs': {
      return 'px-[15px] py-1.5 !text-caption2 border';
    }
    case 'sm': {
      return 'px-[19px] py-[8.5px] !text-caption border';
    }
    case 'md': {
      return 'px-[23px] py-3 !text-callout border';
    }
    case 'lg': {
      return 'px-[22.5px] py-[14.5px] !text-body border-[1.5px]';
    }
    case 'xl': {
      return 'px-[30px] py-[18px] !text-body border-2';
    }
    default: {
      return 'px-[23px] py-3 !text-callout border';
    }
  }
}

export function loadingIconSizes(size?: ButtonSizes) {
  switch (size) {
    case 'xxs': {
      return 24;
    }
    case 'xs': {
      return 32;
    }
    case 'sm': {
      return 40;
    }
    case 'md': {
      return 48;
    }
    case 'lg': {
      return 56;
    }
    case 'xl': {
      return 60;
    }
    default: {
      return 48;
    }
  }
}

export function buttonWithIcon(
  size?: ButtonSizes,
  iconPosition: ButtonIconPositions = 'left'
) {
  switch (size) {
    case 'xxs': {
      return [iconPosition === 'right' ? 'pr-[7px]' : 'pl-[7px]'];
    }
    case 'xs': {
      return [iconPosition === 'right' ? 'pr-[7px]' : 'pl-[7px]'];
    }
    case 'sm': {
      return [iconPosition === 'right' ? 'pr-[9px]' : 'pl-[9px]'];
    }
    case 'md': {
      return [iconPosition === 'right' ? 'pr-[11px]' : 'pl-[11px]'];
    }
    case 'lg': {
      return [iconPosition === 'right' ? 'pr-[10.5px]' : 'pl-[10.5px]'];
    }
    case 'xl': {
      return [iconPosition === 'right' ? 'pr-3.5' : 'pl-3.5'];
    }
    default: {
      return [iconPosition === 'right' ? 'pr-3' : 'pl-3'];
    }
  }
}

export function buttonIconClasses(
  size?: ButtonSizes,
  iconPosition: ButtonIconPositions = 'left'
) {
  switch (size) {
    case 'xxs': {
      return [iconPosition === 'right' ? 'ml-1' : 'mr-1', 'h-3 w-3'];
    }
    case 'xs': {
      return [iconPosition === 'right' ? 'ml-1' : 'mr-1', 'h-5 w-5'];
    }
    case 'sm': {
      return [iconPosition === 'right' ? 'ml-[5px]' : 'mr-[5px]', 'h-5 w-5'];
    }
    case 'md': {
      return [iconPosition === 'right' ? 'ml-1.5' : 'mr-1.5', 'h-5 w-5'];
    }
    case 'lg': {
      return [iconPosition === 'right' ? 'ml-1.5' : 'mr-1.5', 'h-6 w-6'];
    }
    case 'xl': {
      return [iconPosition === 'right' ? 'ml-2' : 'mr-2', 'h-6 w-6'];
    }
    default: {
      return [iconPosition === 'right' ? 'ml-2 -mr-1' : 'mr-2', 'h-6 w-6'];
    }
  }
}

export function buttonVariant(variant?: ButtonVariants) {
  switch (variant) {
    case 'primary': {
      return 'text-neutrals-0 border-transparent bg-brand-main-500 hover:bg-brand-main-600 focus:ring-brand-main-500';
    }
    case 'secondary': {
      return 'border-brand-main-500 text-brand-main-500 hover:border-brand-main-600 hover:text-brand-main-600 focus:outline-none';
    }
    case 'subtle': {
      return 'border-brand-main-100 text-brand-main-500 hover:border-brand-main-200 hover:text-brand-main-600 focus:ring-brand-main-500';
    }
    case 'tertiary': {
      return 'text-brand-main-500 hover:text-brand-main-600 border-transparent';
    }
    default: {
      return 'text-neutrals-0 border-transparent bg-brand-main-500 hover:bg-brand-main-600 focus:ring-brand-main-500';
    }
  }
}

export function renderButtonIcon({
  icon,
  size,
  additionalClasses,
  iconPosition = 'left',
}: {
  icon?: ButtonProps['icon'];
  size?: ButtonSizes;
  additionalClasses?: string;
  iconPosition?: ButtonIconPositions;
}) {
  if (icon) {
    return createElement(icon, {
      className: clsx(buttonIconClasses(size, iconPosition), additionalClasses),
      'aria-hidden': true,
      fill: 'currentColor',
    });
  }

  return null;
}
