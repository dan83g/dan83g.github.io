import React, { FC } from 'react';
import { AdminOrderList } from '@widgets/admin-order-list';
import s from './styles.module.sass';

const AdminOrderPage: FC = () => {
  return (
    <>
      <div className={s.root}>
        <AdminOrderList />
      </div>
    </>
  );
};

export default AdminOrderPage;
