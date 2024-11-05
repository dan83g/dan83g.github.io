import React from 'react';
import { ProductCard } from 'src/entities/product';
import { useTranslation } from 'react-i18next';
import { Button } from '@shared/ui/button';
import { createOrder, useOrdersStore } from '@entities/order';
import { useCartStore, ICartProduct } from '@entities/product';
import { CartActionBar } from 'src/shared/ui/cart-action-bar';
import { useTokentStore } from 'src/entities/token';
import { CURRENCY_SYMBOL } from 'src/shared/config/currency';
import s from './styles.module.sass';

const CartPage = () => {
  const { t } = useTranslation();
  const { token } = useTokentStore();

  const { cart, getTotalPrice, getOrderItems, incrementQuantity, decrementQuantity, removeItem, clearCart } =
    useCartStore();
  const { addOrder } = useOrdersStore();

  const onOrderClick = async () => {
    try {
      addOrder(await createOrder(token, { products: getOrderItems() }));
      clearCart();
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
              cartActionBar={
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
          {t('pages.Cart.totalPrice')} : {getTotalPrice()} {CURRENCY_SYMBOL}
        </span>
        {cart.length > 0 && (
          <Button type="button" onClick={onOrderClick}>
            {t('pages.Cart.orderButtonTitle')}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CartPage;
