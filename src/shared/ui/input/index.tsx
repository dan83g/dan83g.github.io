import React, { InputHTMLAttributes, FC } from 'react';
import cn from 'clsx';
import s from './styles.module.sass';

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> & {
  value: string;
  onChange: (value: string) => void;
  onEnter?: () => void;
};

export const Input: FC<InputProps> = (props) => {
  const { className, value, onChange, onEnter, disabled, ...other } = props;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEnter();
    }
  };

  return (
    <input
      className={cn(className, s.input, 'input', {
        [s.input_disabled]: disabled,
      })}
      disabled={disabled}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyUp={handleKeyDown}
      type={'text'}
      {...other}
    />
  );
};
