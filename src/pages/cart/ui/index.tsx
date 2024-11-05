import React from 'react';
import { ProductCard } from 'src/entities/product';
import { useTranslation } from 'react-i18next';
import { Button } from '@shared/ui/button';
import { createOrder } from '@entities/order';
import { useCartStore, ICartProduct } from '@entities/product';
import { CartActionBar } from 'src/shared/ui/cart-action-bar';
import s from './styles.module.sass';
import { useTokentStore } from 'src/entities/token';

export const Cart = () => {
  const { t } = useTranslation();
  const { token } = useTokentStore();

  const { cart, getTotalPrice, getOrderItems, incrementQuantity, decrementQuantity, removeItem } = useCartStore();

  const onOrderClick = async () => {
    try {
      await createOrder(token, { products: getOrderItems() });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s.root}>
      <div className={s.products}>
        {cart.map((i: ICartProduct) => {
          return (
            <ProductCard
              id={i.id}
              key={i.id}
              name={i.name}
              photo={i.photo}
              price={i.price}
              desc={i.desc}
              actionBar={
                <CartActionBar
                  quantity={i.quantity}
                  onIncrease={() => incrementQuantity(i.id)}
                  onDecrease={() => decrementQuantity(i.id)}
                  onRemoveFromCart={() => removeItem(i.id)}
                />
              }
            />
          );
        })}
      </div>
      <div className={s.footer}>
        <span className={s['total-price']}>
          {t('pages.Cart.totalPrice')} : {getTotalPrice()}
        </span>
        <Button type="button" onClick={onOrderClick} disabled={cart.length === 0}>
          {t('pages.Cart.orderButtonTitle')}
        </Button>
      </div>
    </div>
  );
};
