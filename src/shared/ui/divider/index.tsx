import React, { FC } from 'react';
import s from './styles.module.sass';

export const Divider: FC = () => {
  return <hr className={s.root} />;
};
