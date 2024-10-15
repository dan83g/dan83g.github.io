import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './Basket.module.sass';

interface BasketProps {
  count: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onDeleteClick?: () => void;
}

const Basket = ({ count, onIncrease, onDecrease, onDeleteClick }: BasketProps) => {
  const { t } = useTranslation();

  return (
    <div className={s.root}>
      {count === 0 ? (
        <button onClick={onIncrease}>{t`components.Basket.toCart`}</button>
      ) : (
        <div>
          <button onClick={onDecrease}>-</button>
          <input className={s.input} type="text" value={count} readOnly />
          <button onClick={onIncrease}>+</button>
          <button className={s.delete} onClick={onDeleteClick}>{t`components.Basket.deleteFromCart`}</button>
        </div>
      )}
    </div>
  );
};

export default Basket;
