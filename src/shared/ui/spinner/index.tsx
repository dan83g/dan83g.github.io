import React, { FC } from 'react';
import { MdOutlineMonetizationOn } from 'react-icons/md';
import s from './styles.module.sass';

export interface ISpinner {
  loading?: boolean;
}

export const Spinner: FC<ISpinner> = ({ loading = false }) => {
  return loading ? (
    <div className={s.loading}>
      <MdOutlineMonetizationOn className={s.spinner} />
    </div>
  ) : null;
};
