import { forwardRef } from 'react';

import clsxm from '@/utils/clsxm';

import { disabledStyles, InputTextProps, inputTextSizes } from './utils';

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      className,
      type = 'text',
      style,
      inputSize = 'md',
      isLoading,
      disabled,
      ...rest
    },
    ref
  ) => {
    return (
      <input
        className={clsxm(
          inputTextSizes(inputSize),
          'peer block w-full rounded-full border-0 bg-neutrals-20 font-normal text-neutrals-400 placeholder:text-neutrals-80 hover:bg-neutrals-30 focus:bg-white focus:ring-neutrals-50',
          disabledStyles,
          className
        )}
        disabled={disabled}
        ref={ref}
        style={style}
        type={type}
        {...rest}
      />
    );
  }
);

InputText.displayName = 'InputText';
export default InputText;
