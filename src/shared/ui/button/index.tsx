import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import cn from 'clsx';
import { Loader, LoaderSize } from '../loader';
import s from './styles.module.sass';

export type IButtonProps = PropsWithChildren<{
  loading?: boolean;
}> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<IButtonProps> = (props) => {
  const { loading, className, children, disabled, ...other } = props;
  return (
    <button
      className={cn(className, s.button, 'button', {
        [s.button_disabled]: loading || disabled,
        [s.button_load]: loading,
      })}
      disabled={disabled || loading}
      {...other}
    >
      {loading && <Loader className={s.loader} loading={loading} size={LoaderSize.s} />}
      {children}
    </button>
  );
};
