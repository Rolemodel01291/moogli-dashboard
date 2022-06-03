import { createElement } from 'react';

import clsxm from '../../../../../utils/clsxm';

import { IconPosition, InputTextProps, InputTextSizes } from './types';

export const disabledStyles =
  'disabled:cursor-not-allowed disabled:bg-neutrals-10 disabled:placeholder:text-neutrals-60 disabled:text-neutrals-60';

export function loadingIconSizes(size?: InputTextSizes) {
  switch (size) {
    case 'sm': {
      return 22;
    }
    case 'md': {
      return 24;
    }
    case 'lg': {
      return 28;
    }
    default: {
      return 24;
    }
  }
}

export function inputTextSizes(size?: InputTextSizes) {
  switch (size) {
    case 'sm': {
      return 'px-5 py-2.5 text-caption border';
    }
    case 'md': {
      return 'px-6 py-3.5 text-callout border';
    }
    case 'lg': {
      return 'px-6 py-4 text-body border-[1.5px]';
    }
    default: {
      return 'px-6 py-3.5 text-callout';
    }
  }
}

export function menuItemSizes(size?: InputTextSizes) {
  switch (size) {
    case 'sm': {
      return 'py-1';
    }
    case 'md': {
      return 'py-2';
    }
    case 'lg': {
      return 'py-3';
    }
    default: {
      return 'px-6 py-3.5 text-callout';
    }
  }
}

export function inputIconClasses(
  size?: InputTextSizes,
  iconPosition?: IconPosition
) {
  switch (size) {
    case 'sm': {
      return [
        iconPosition === 'right'
          ? 'ml-2 -mr-0.5 h-[22px] w-[22px]'
          : '-ml-0.5 mr-2 h-[18px] w-[18px]',
      ];
    }
    case 'md': {
      return [iconPosition === 'right' ? 'ml-2 h-6 w-6' : 'mr-2 h-5 w-5'];
    }
    case 'lg': {
      return [iconPosition === 'right' ? 'ml-3 h-7 w-7' : 'mr-3 h-6 w-6'];
    }
    default: {
      return [iconPosition === 'right' ? 'ml-2 h-6 w-6' : 'mr-2 h-5 w-5'];
    }
  }
}

export function selectIconClasses(size?: InputTextSizes) {
  switch (size) {
    case 'sm': {
      return ['h-[6.53px] w-[13.13] '];
    }
    case 'md': {
      return ['h-[7.25px] w-[14.58]'];
    }
    case 'lg': {
      return ['h-[8.7px] w-[17.5px]'];
    }
    default: {
      return ['ml-2 h-6 w-6'];
    }
  }
}

export function renderIconPosition(
  iconPosition: 'left' | 'right' = 'left',
  size: InputTextSizes
) {
  switch (size) {
    case 'sm': {
      return [iconPosition === 'right' ? 'right-0 pr-3' : 'left-0 pl-4'];
    }
    case 'md': {
      return [iconPosition === 'right' ? 'right-0 pr-4' : 'left-0 pl-5'];
    }
    case 'lg': {
      return [iconPosition === 'right' ? 'right-0 pr-4' : 'left-0 pl-5'];
    }
    default: {
      return 'left-0 pl-5';
    }
  }
}

export function renderSelectPosition(
  iconPosition: 'left' | 'right' = 'left',
  size: InputTextSizes
) {
  switch (size) {
    case 'sm': {
      return [iconPosition === 'right' ? 'right-0 pr-[23px]' : 'left-0 pl-4'];
    }
    case 'md': {
      return [
        iconPosition === 'right' ? 'right-0 pr-[22.71px]' : 'left-0 pl-5',
      ];
    }
    case 'lg': {
      return [
        iconPosition === 'right' ? 'right-0 pr-[18.44px]' : 'left-0 pl-5',
      ];
    }
    default: {
      return 'left-0 pl-5';
    }
  }
}

export function renderInputIcon({
  icon,
  iconPosition,
  size,
  additionalClasses,
}: {
  icon?: InputTextProps['icon'];
  size?: InputTextSizes;
  iconPosition?: IconPosition;
  additionalClasses?: string;
}) {
  if (icon) {
    return createElement(icon, {
      className: clsxm(inputIconClasses(size, iconPosition), additionalClasses),
      'aria-hidden': true,
      fill: 'currentColor',
    });
  }

  return null;
}

export function renderSelectIcon({
  icon,
  size,
  additionalClasses,
}: {
  icon?: InputTextProps['icon'];
  size?: InputTextSizes;
  iconPosition?: IconPosition;
  additionalClasses?: string;
}) {
  if (icon) {
    return createElement(icon, {
      className: clsxm(selectIconClasses(size), additionalClasses),
      'aria-hidden': true,
      fill: 'currentColor',
    });
  }

  return null;
}
