import { createElement, forwardRef, useCallback, useState } from 'react';

import { SliderBaseProps } from './utils/types';

import * as SliderPrimitive from '@radix-ui/react-slider';
import clsx from 'clsx';

type InputSliderProps = SliderPrimitive.SliderProps & SliderBaseProps;

const Score = ({ value }: { value: number }) => (
  <div className='absolute bottom-7 hidden flex-col items-center group-focus:flex'>
    <div className='flex items-center justify-center rounded-full bg-brand-main-500 px-4 py-1.5 text-caption font-medium text-neutrals-0'>
      {value}
    </div>
    <svg
      className='-mt-1'
      fill='none'
      height='11'
      viewBox='0 0 18 11'
      width='18'
    >
      <path
        d='M10.5119 10.2543C9.71431 11.1752 8.28569 11.1752 7.48814 10.2543L1.47364 3.30931C0.351889 2.01402 1.27199 0 2.9855 0L15.0145 0C16.728 0 17.6481 2.01402 16.5264 3.30931L10.5119 10.2543Z'
        fill='#454BBA'
      />
    </svg>
  </div>
);

const InputSlider = forwardRef<HTMLInputElement, InputSliderProps>(
  (
    {
      className,
      disabled,
      onValueChange,
      iconLeft,
      iconRight,
      wrapperClasses,
      ...rest
    },
    ref
  ) => {
    const [count, setCount] = useState<number>(() =>
      rest.defaultValue ? rest.defaultValue[0] : 0
    );
    const values = rest.value ?? rest.defaultValue;

    const slide = useCallback(
      (v: number[]) => {
        onValueChange?.(v);
        setCount(v[0]);
      },
      [onValueChange]
    );
    const handleValueChange = useCallback(
      (v: number[]) => {
        slide(v);
      },
      [slide]
    );

    return (
      <div
        className={clsx(
          wrapperClasses,
          disabled ? 'text-neutrals-80' : 'text-neutrals-400',
          'relative flex items-center justify-center space-x-4'
        )}
      >
        {iconLeft &&
          createElement(iconLeft, {
            className: 'h-4 w-4',
            'aria-hidden': true,
            fill: 'currentColor',
          })}
        <SliderPrimitive.Slider
          className={clsx(
            'relative flex h-32 w-full touch-none select-none items-center',
            className
          )}
          disabled={disabled}
          onValueChange={handleValueChange}
          orientation='horizontal'
          ref={ref}
          {...rest}
        >
          <SliderPrimitive.Track className='relative h-[6px] flex-grow rounded-full bg-neutrals-40'>
            <SliderPrimitive.Range
              className={clsx(
                disabled
                  ? 'bg-neutrals-60 hover:bg-neutrals-60'
                  : 'bg-brand-main-500 hover:bg-brand-main-600',
                'absolute h-full rounded-full'
              )}
            />
          </SliderPrimitive.Track>
          {values?.map((_, i) => (
            <SliderPrimitive.Thumb
              key={i}
              className={clsx(
                disabled
                  ? 'border-neutrals-60 hover:disabled:border-neutrals-60'
                  : 'border-brand-main-500 hover:border-brand-main-600',
                'group flex h-6 w-6 flex-col items-center justify-center rounded-full border-2 bg-neutrals-0 focus:outline-none'
              )}
            >
              <Score value={count} />
            </SliderPrimitive.Thumb>
          ))}
        </SliderPrimitive.Slider>
        {iconRight &&
          createElement(iconRight, {
            className: 'h-4 w-4',
            'aria-hidden': true,
            fill: 'currentColor',
          })}
      </div>
    );
  }
);

InputSlider.displayName = 'InputSlider';
export default InputSlider;
