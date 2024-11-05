import React, { FC } from 'react';
import { ProductDetailed } from '@widgets/product-detailed';
import s from './styles.module.sass';

const ProductPage: FC = () => {
  return (
    <>
      <div className={s.root}>
        <ProductDetailed />
      </div>
    </>
  );
};

export default ProductPage;
