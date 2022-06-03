import { forwardRef, InputHTMLAttributes } from 'react';

import clsxm from '@/utils/clsxm';

type InputCheckboxProps = InputHTMLAttributes<HTMLInputElement>;

const InputCheckbox = forwardRef<HTMLInputElement, InputCheckboxProps>(
  ({ className, disabled, ...rest }, ref) => {
    return (
      <input
        className={clsxm(
          'float-left mr-2 h-5 w-5 cursor-pointer rounded-md border-0 bg-neutrals-60 align-top text-brand-main-500 checked:bg-brand-main-500 hover:bg-neutrals-70 hover:checked:bg-brand-main-600 focus:outline-none focus:ring-0 focus:ring-transparent hover:focus:bg-neutrals-70 checked:hover:focus:bg-brand-main-600 disabled:bg-neutrals-40 hover:disabled:bg-neutrals-40',
          className
        )}
        disabled={disabled}
        ref={ref}
        type='checkbox'
        {...rest}
      />
    );
  }
);

InputCheckbox.displayName = 'InputCheckbox';
export default InputCheckbox;
