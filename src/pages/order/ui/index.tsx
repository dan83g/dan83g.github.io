import React, { FC } from 'react';
import { OrderList } from '@widgets/order-list';
import s from './styles.module.sass';

const OrderPage: FC = () => {
  return (
    <>
      <div className={s.root}>
        <OrderList />
      </div>
    </>
  );
};

export default OrderPage;
