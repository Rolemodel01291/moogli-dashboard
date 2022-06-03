import { forwardRef } from 'react';

import clsxm from '@/utils/clsxm';

export type InputGroupProps = React.ComponentPropsWithoutRef<'div'>;

const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div
        className={clsxm('relative rounded-full', className)}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

InputGroup.displayName = 'InputGroup';

export default InputGroup;
