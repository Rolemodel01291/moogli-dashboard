import { forwardRef, InputHTMLAttributes } from 'react';

import clsxm from '@/utils/clsxm';

type InputRangeProps = InputHTMLAttributes<HTMLInputElement>;

const InputRange = forwardRef<HTMLInputElement, InputRangeProps>(
  ({ className, max, min, step, ...rest }, ref) => {
    return (
      <input
        className={clsxm(
          'focus:shadow-none h-1.5 w-full cursor-pointer appearance-none overflow-hidden rounded-full bg-neutrals-40 p-0 focus:outline-none focus:ring-0 disabled:bg-neutrals-70',
          className
        )}
        max={max}
        min={min}
        ref={ref}
        step={step}
        type='range'
        {...rest}
      />
    );
  }
);

InputRange.displayName = 'InputRange';
export default InputRange;
