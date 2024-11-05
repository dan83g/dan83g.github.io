import React, { ReactElement } from 'react';
import cn from 'clsx';
import { ICRUDActionBarProps } from '@shared/ui/crud-action-bar';
import { ICategory } from '../../types';
import s from './styles.module.sass';

export interface ICategoryCard extends ICategory {
  crudActionBar: ReactElement<ICRUDActionBarProps>;
}

export const CategoryCard = ({ name, photo, crudActionBar = null }: Partial<ICategoryCard>) => {
  return (
    <div className={cn(s['category-card'])}>
      <img src={photo} alt={name} className={s['category-card__image']} />
      <p>{name}</p>
      <div className={s['category-card__actions']}>{crudActionBar}</div>
    </div>
  );
};
