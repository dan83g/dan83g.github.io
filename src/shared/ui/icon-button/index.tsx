import React, { Children } from 'react';
import { Button } from '../button';
import s from './styles.module.sass';

export interface IIconButton {
  children: React.ReactNode;
  title: string;
  onClick?: () => void;
}

export const IconButton = ({ children, onClick, title }: IIconButton) => {
  const icon = Children.only(children);
  return (
    <Button className={s.button} onClick={onClick} title={title}>
      {icon}
    </Button>
  );
};
