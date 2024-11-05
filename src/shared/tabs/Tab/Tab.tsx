import React, { FC, ReactNode } from 'react';
import cn from 'clsx';
import s from './Tab.module.sass';

export interface ITab {
  tabKey: string;
  caption: string;
  children?: ReactNode;
  isActive?: boolean;
  onClick?(): void;
}

export const Tab: FC<ITab> = ({ caption, isActive, onClick }) => {
  return (
    <>
      <button className={cn(s.button, { [s.active]: isActive })} onClick={() => onClick()}>
        {caption}
      </button>
    </>
  );
};
