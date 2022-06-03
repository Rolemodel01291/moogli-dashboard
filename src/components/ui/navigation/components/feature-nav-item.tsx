import { forwardRef } from 'react';

import { IconButton } from '@/components/ui/button';
import type { IconButtonProps } from '@/components/ui/button/components/icon-button/utils';

interface FeatureNavItemProps
  extends Omit<IconButtonProps, 'variant' | 'size'> {
  /** Notification Badge  */
  notificationBadge?: boolean;
}

const FeatureNavItem = forwardRef<HTMLButtonElement, FeatureNavItemProps>(
  ({ notificationBadge, icon, ...rest }, ref) => (
    <div className='relative'>
      <IconButton
        className='text-neutrals-100 hover:bg-white/5 hover:text-neutrals-0 focus:text-neutrals-0 disabled:text-neutrals-200'
        icon={icon}
        size='sm'
        variant='tertiary'
        {...rest}
        ref={ref}
      />
      {notificationBadge && (
        <div className='absolute top-[11px] right-[10px] left-[23px] h-2 w-2 rounded-full bg-semantic-alert-600' />
      )}
    </div>
  )
);

FeatureNavItem.displayName = 'FeatureNavItem';
export default FeatureNavItem;
