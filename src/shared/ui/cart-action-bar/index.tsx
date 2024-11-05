import React from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import s from './styles.module.sass';

export interface ICartActionBarProps {
  quantity: number;
  onAddToCart?: () => void;
  onRemoveFromCart?: () => void;
  onIncrease?: () => void;
  onDecrease?: () => void;
}

export const CartActionBar = ({
  quantity,
  onAddToCart,
  onRemoveFromCart,
  onIncrease,
  onDecrease,
}: ICartActionBarProps) => {
  const { t } = useTranslation();

  return (
    <div className={s.root}>
      {quantity === 0 ? (
        <button className={s.button} onClick={onAddToCart}>{t`components.AddToCart.toCart`}</button>
      ) : (
        <>
          <div className={s['input-group']}>
            <button className={cn(s['value-button'], s.increment)} onClick={onDecrease}>
              -
            </button>
            <input className={s.input} type="text" value={quantity} readOnly />
            <button className={cn(s['value-button'], s.decrement)} onClick={onIncrease}>
              +
            </button>
          </div>
          <button className={s.button} onClick={onRemoveFromCart}>{t`components.AddToCart.deleteFromCart`}</button>
        </>
      )}
    </div>
  );
};
