import React, { useState } from 'react';
import cn from 'clsx';
import { Button } from '../button';
import s from './styles.module.sass';

export interface IOption {
  key: string | number;
  value: string;
}

export type IDropdownProps = {
  disabled?: boolean;
  options: IOption[];
  value: IOption;
  onChange: (value: IOption) => void;
  children?: React.ReactNode;
};

const getDropdownMenuHeight = (optionHeight: number, optionLength: number) => optionHeight * optionLength - 9;

export const Dropdown = ({ onChange, options, value, disabled, children }: IDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownMenuStyle = {
    height: isOpen && !disabled ? getDropdownMenuHeight(50, options.length) : 0,
    border: 'none',
  };

  const handleDropdownClick = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  };

  const handleOptionClick = (option: IOption) => () => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setIsOpen(false);
        }
      }}
      className={s.dropdown}
    >
      <Button
        className={cn(s.dropdown_toggle, {
          [s.focused]: isOpen,
        })}
        id="DropdownMenuButton"
        type="button"
        disabled={disabled}
        onClick={handleDropdownClick}
      >
        {children}
      </Button>
      <ul
        style={dropdownMenuStyle}
        className={s.dropdown_menu}
        role={'menuitem'}
        aria-expanded="false"
        aria-labelledby="DropdownMenuButton"
      >
        {options.map((option) => (
          <li
            key={option.key}
            onClick={handleOptionClick(option)}
            className={cn(s.dropdown_menu_item, {
              [s.dropdown_menu_item__active]: value?.key === option.key,
            })}
          >
            {option.value}
          </li>
        ))}
      </ul>
      {isOpen && <div className={s.backdrop} onClick={() => setIsOpen(false)} />}
    </div>
  );
};
