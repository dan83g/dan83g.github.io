import React, { FC } from 'react';
import { ProductForm } from 'src/features/forms/ProductForm/ProductForm';
import s from './Product.module.sass';

export const Product: FC = () => {
  return (
    <div className={s.root}>
      <ProductForm />
    </div>
  );
};
