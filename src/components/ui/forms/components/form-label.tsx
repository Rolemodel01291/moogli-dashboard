import { forwardRef, LabelHTMLAttributes } from 'react';

import clsxm from '@/utils/clsxm';

export type FormLabelProps = LabelHTMLAttributes<HTMLLabelElement>;

const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, style, children, ...rest }, ref) => {
    return (
      <label
        className={clsxm('inline-block text-caption2 font-medium', className)}
        ref={ref}
        style={style}
        {...rest}
      >
        {children}
      </label>
    );
  }
);

FormLabel.displayName = 'FormLabel';

export default FormLabel;
