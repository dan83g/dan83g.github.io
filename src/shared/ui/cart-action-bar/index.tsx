import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdDeleteOutline } from 'react-icons/md';
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
            <button className={s['input-group__value-button']} onClick={onDecrease}>
              -
            </button>
            <input className={s['input-group__input']} type="text" value={quantity} readOnly />
            <button className={s['input-group__value-button']} onClick={onIncrease}>
              +
            </button>
          </div>
          <button className={s.button} onClick={onRemoveFromCart} title={t`components.AddToCart.deleteFromCart`}>
            <MdDeleteOutline className={s.button__icon} />
          </button>
        </>
      )}
    </div>
  );
};
