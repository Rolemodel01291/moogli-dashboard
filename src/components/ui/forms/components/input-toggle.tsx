import { forwardRef, useCallback } from 'react';

import CheckIcon from '@/icons/check-icon';
import clsxm from '@/utils/clsxm';

import { Switch } from '@headlessui/react';
import type { ComponentPropsWithoutRef } from 'react';

interface InputToggleProps
  extends Omit<
    ComponentPropsWithoutRef<'button'>,
    'size' | 'onClick' | 'onChange'
  > {
  /* Additional class name */
  className?: string;
  /* The label of the input */
  label?: string;
  checked: boolean;
  onChange?: (value: boolean) => void;
}

const InputToggle = forwardRef<HTMLButtonElement, InputToggleProps>(
  ({ className, label, checked, onChange, disabled, ...rest }, ref) => {
    const toggle = useCallback(() => onChange?.(!checked), [onChange, checked]);
    const handleClick = useCallback(() => {
      toggle();
    }, [toggle]);

    return (
      <Switch.Group>
        <div className='flex items-center'>
          {label && <Switch.Label className='mr-4'>{label}</Switch.Label>}
          <Switch
            checked={checked}
            className={clsxm(
              checked
                ? 'bg-brand-main-500 hover:bg-brand-main-600'
                : 'bg-neutrals-60 hover:bg-neutrals-70',
              ' relative inline-flex h-7 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-0 disabled:bg-neutrals-40',
              className
            )}
            disabled={disabled}
            onChange={handleClick}
            ref={ref}
            {...rest}
          >
            <span
              className={clsxm(
                checked
                  ? 'translate-x-[18px] text-brand-main-500 hover:text-brand-main-600'
                  : 'translate-x-[2px]',
                disabled ? 'text-neutrals-40 hover:text-neutrals-40' : '',
                'flex h-6 w-6 transform items-center justify-center rounded-full bg-white transition-transform'
              )}
            >
              <CheckIcon
                className={clsxm(checked ? 'block' : 'hidden', 'h-auto w-3')}
                fill='currentColor'
              />
            </span>
          </Switch>
        </div>
      </Switch.Group>
    );
  }
);

InputToggle.displayName = 'InputToggle';
export default InputToggle;
