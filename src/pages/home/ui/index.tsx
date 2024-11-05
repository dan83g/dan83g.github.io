import React, { FC } from 'react';
import { ProductList } from 'src/widgets/product-list/ui';
import s from './styles.module.sass';

const HomePage: FC = () => {
  return (
    <>
      <div className={s.root}>
        <ProductList />
      </div>
    </>
  );
};

export default HomePage;
