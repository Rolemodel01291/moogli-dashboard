import { createElement, forwardRef } from 'react';

import clsxm from '@/utils/clsxm';

export interface NavItemProps extends React.ComponentPropsWithoutRef<'a'> {
  /** The icon component to use in the button. `icon={PlusIcon}` */
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  disabled?: boolean;
  isActive?: boolean;
}

const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ icon, title, disabled, isActive, ...rest }, ref) => {
    return (
      <a
        className={clsxm(
          'relative flex flex-col items-center p-4 text-caption font-medium text-neutrals-100 hover:text-neutrals-90 focus:text-neutrals-0 focus:outline-none',
          isActive && 'text-neutrals-0',
          disabled
            ? 'cursor-not-allowed text-neutrals-200 hover:text-neutrals-200'
            : 'cursor-pointer'
        )}
        ref={ref}
        {...rest}
      >
        {icon &&
          createElement(icon, {
            className: 'h-6 w-6',
            'aria-hidden': true,
            fill: 'currentColor',
          })}
        {title}
        {isActive && (
          <svg
            aria-hidden='true'
            className='absolute bottom-0 w-4'
            enableBackground='new 0 0 16 9'
            viewBox='0 0 16 9'
            xmlSpace='preserve'
          >
            <path
              d='M9.473,0.729c-0.767-0.972-2.18-0.972-2.947,0L0,9h16L9.473,0.729z'
              fill='currentColor'
            />
          </svg>
        )}
      </a>
    );
  }
);

NavItem.displayName = 'NavItem';
export default NavItem;
