import { forwardRef } from 'react';

import clsxm from '@/utils/clsxm';

export type SelectMenuGroupProps = React.ComponentPropsWithoutRef<'ul'>;

const SelectMenuGroup = forwardRef<HTMLUListElement, SelectMenuGroupProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <ul
        className={clsxm(
          `absolute mt-2 block w-full  cursor-pointer 
          divide-y overflow-hidden rounded-2xl border-0 
          bg-white text-body font-normal text-neutrals-80 
          caret-transparent shadow-bLeft-xs ring-neutrals-50 
          hover:bg-accent-mariner-100`,
          className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </ul>
    );
  }
);

SelectMenuGroup.displayName = 'SelectMenuGroup';

export default SelectMenuGroup;
