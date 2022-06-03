import { forwardRef, useEffect } from 'react';

import { AllowDown } from '@/icons';
import clsxm from '@/utils/clsxm';

import InputGroup from './input-group';
import SelectIcon from './select-icon';
import { disabledStyles, inputTextSizes, SelectorProps } from './utils';
import { SelectMenuGroup, SelectMenuItem } from '.';

import { useSelect } from 'downshift';

const InputSelect = forwardRef<HTMLInputElement, SelectorProps>(
  (
    {
      className,
      type = 'text',
      style,
      selectorSize = 'md',
      disabled,
      handleChange,
      options,
      initialValue,
      ...rest
    },
    ref
  ) => {
    const items = [...options];

    const {
      isOpen,
      selectedItem,
      getToggleButtonProps,
      getMenuProps,
      getItemProps,
    } = useSelect({ items });

    useEffect(() => {
      handleChange(selectedItem);
    }, [selectedItem, handleChange]);

    return (
      <div
        className={clsxm(
          disabled ? 'text-neutrals-60' : 'text-neutrals-80',
          'w-full max-w-xs'
        )}
      >
        <InputGroup className='w-full'>
          <button
            className={clsxm(
              inputTextSizes(selectorSize),
              `peer block w-full cursor-pointer rounded-full border-0  
              bg-neutrals-20 text-left text-body font-normal 
              text-neutrals-80 caret-transparent hover:bg-neutrals-30 
              focus:border-0 focus:bg-white focus:ring-neutrals-80`,
              disabledStyles,
              selectedItem &&
                isOpen &&
                'border-1 border-neutrals-80 bg-white text-neutrals-400',
              !selectedItem &&
                isOpen &&
                'border-1 border-neutrals-80 bg-white text-neutrals-80',
              selectedItem && !isOpen && 'bg-neutrals-20 text-neutrals-400',
              !selectedItem && !isOpen && 'bg-neutrals-20 text-neutrals-80',
              className
            )}
            disabled={disabled}
            ref={ref}
            style={style}
            type={type}
            value={selectedItem}
            {...rest}
            {...getToggleButtonProps()}
          >
            {selectedItem
              ? selectedItem
              : initialValue
              ? initialValue
              : 'Placeholder'}
          </button>

          <SelectIcon
            disabled={disabled}
            icon={AllowDown}
            inputSize={selectorSize}
            selectedItem={selectedItem}
            {...getToggleButtonProps()}
          />
        </InputGroup>

        <div className='relative'>
          <SelectMenuGroup {...getMenuProps()}>
            {isOpen &&
              items.map((item, index) => (
                <SelectMenuItem
                  key={`${item}${index}`}
                  className='text-left text-body text-neutrals-400'
                  {...getItemProps({ item, index })}
                >
                  {item}
                </SelectMenuItem>
              ))}
          </SelectMenuGroup>
        </div>
      </div>
    );
  }
);

InputSelect.displayName = 'InputSelect';

export default InputSelect;
