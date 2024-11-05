import React, { FC } from 'react';
import { AdminProductList } from 'src/widgets/admin-product-list';
import s from './styles.module.sass';

const AdminProductPage: FC = () => {
  return (
    <>
      <div className={s.root}>
        <AdminProductList />
      </div>
    </>
  );
};

export default AdminProductPage;
