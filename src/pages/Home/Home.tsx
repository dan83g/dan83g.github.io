import React, { FC } from 'react';
import { ProductList } from 'src/entities/ProductList/ui';
import s from './Home.module.sass';

export const Home: FC = () => {
  return (
    <>
      <div className={s.root}>
        <ProductList />
      </div>
    </>
  );
};
