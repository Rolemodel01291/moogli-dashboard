import { forwardRef } from 'react';

import clsxm from '@/utils/clsxm';

import { InputTextSizes, menuItemSizes } from './utils';

export interface SelectMenuItemProps
  extends React.ComponentPropsWithoutRef<'li'> {
  /** The label to use in the menu item. `label="2022"` */
  label: string;

  selectorSize: InputTextSizes;
}

const SelectMenuGroup = forwardRef<HTMLLIElement, SelectMenuItemProps>(
  ({ className, label, selectorSize = 'md', ...rest }, ref) => {
    return (
      <li
        className={clsxm(
          `block w-full cursor-pointer bg-white py-4 px-6 text-center 
          text-body font-normal text-neutrals-80 hover:bg-neutrals-20`,
          menuItemSizes(selectorSize),
          className
        )}
        ref={ref}
        {...rest}
      />
    );
  }
);

SelectMenuGroup.displayName = 'SelectMenuGroup';

export default SelectMenuGroup;
