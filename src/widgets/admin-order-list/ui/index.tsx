/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, ReactElement, useEffect, useInsertionEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdOutlineBorderColor, MdOutlineDeleteForever, MdOutlineMonetizationOn } from 'react-icons/md';
import { useTokentStore } from '@entities/token';
import { useAdminOrdersStore, getOrders, OrderCard, patchOrder, deleteOrder, OrderStatus } from '@entities/order';
import { OrderProductList } from '@entities/product/ui/order-product-list';
import { API_PAGE_SIZE } from '@shared/config';
import { useIntersectionObserver } from '@shared/hooks/use-intersection-observer';
import { Dropdown, IOption } from '@shared/ui/drop-down';
import { IconButton } from '@shared/ui/icon-button';
import s from './styles.module.sass';

export const AdminOrderList: FC = (): ReactElement => {
  const { t } = useTranslation();
  const { token } = useTokentStore();
  const orderStore = useAdminOrdersStore();
  const { observerRef, isIntersecting } = useIntersectionObserver(orderStore.isLoading);
  const [dropDownValue, setDropDownValue] = useState<IOption>(undefined);
  const [statusOptions, setStatusOptions] = useState<IOption[]>([]);

  useEffect(() => {
    setStatusOptions(
      Object.values(OrderStatus).map((key) => {
        return { key: key, value: t(`orderStatuses.${key}`) };
      })
    );
  }, [t]);

  useInsertionEffect(() => {
    if (orderStore.orders.length === 0) getNext(token, 1);
  }, [token, orderStore.orders.length]);

  useEffect(() => {
    if (isIntersecting && orderStore.paging.total > orderStore.paging.pageNumber * API_PAGE_SIZE)
      getNext(token, orderStore.paging.pageNumber + 1);
  }, [isIntersecting, orderStore.paging.pageNumber, orderStore.paging.total, token]);

  const getNext = async (token: string, pageNum: number) => {
    orderStore.setIsLoading(true);
    const response = await getOrders(token, {
      pagination: { pageNumber: pageNum, pageSize: API_PAGE_SIZE },
      sorting: { type: 'ASC', field: 'id' },
    });
    if (response.data.length > 0) orderStore.addOrders(response.data, response.pagination);
    orderStore.setIsLoading(false);
  };

  const updateOrderStatus = async (token: string, id: string, value: IOption) => {
    setDropDownValue(value);
    try {
      orderStore.modOrder(await patchOrder(token, id, { status: value.key as OrderStatus }));
    } catch (error) {
      console.log(error);
    }
  };

  const delOrder = async (token: string, id: string) => {
    try {
      await deleteOrder(token, id);
      orderStore.delOrder(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s.root}>
      {orderStore.orders?.length > 0 &&
        orderStore.orders.map((i) => {
          return (
            <div key={i.id}>
              <OrderCard id={i.id} price={orderStore.getOrderTotalPrice(i)} status={i.status} createdAt={i.createdAt}>
                <div className={s.admin_bar}>
                  <Dropdown
                    options={statusOptions}
                    value={dropDownValue}
                    onChange={(value) => updateOrderStatus(token, i.id, value)}
                  >
                    <MdOutlineBorderColor />
                  </Dropdown>
                  <IconButton onClick={() => delOrder(token, i.id)} title={t('barActions.delete')}>
                    <MdOutlineDeleteForever />
                  </IconButton>
                </div>
                <OrderProductList key={i.id} products={i.products} />
              </OrderCard>
            </div>
          );
        })}
      {orderStore.isLoading && (
        <div className={s.loading}>
          <MdOutlineMonetizationOn className={s.spinner} />
        </div>
      )}
      <div ref={observerRef} />
    </div>
  );
};
