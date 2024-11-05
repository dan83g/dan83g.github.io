import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button } from '@shared/ui/button';
import { IProduct } from 'src/entities/product';
import s from './styles.module.sass';

export interface IProductCardDetailed extends IProduct {
  onBuyNowClick: () => void;
  onCartAddClick: () => void;
}

export const ProductCardDetailed = ({
  name,
  photo,
  desc,
  price,
  onBuyNowClick,
  onCartAddClick,
}: Partial<IProductCardDetailed>) => {
  const { t } = useTranslation();
  return (
    <div className={s.root}>
      <div className={s.left_block}>
        <img src={photo} alt={name} className={s.product_card__image} />
      </div>
      <div className={s.right_block}>
        <div className={s.product_card__text}>
          <h2 className={s.product_card__title}>{name}</h2>
          <p className={s.product_card__text}>{desc}</p>
          <p className={s.product_card__price}>${price}</p>
        </div>
        <div className={s.product_card__buttons}>
          <Button className={s.product_card__button} onClick={onBuyNowClick}>
            {t('components.AddToCart.buyNow')}
          </Button>
          <Button className={cn(s.product_card__button, s.product_card__add_button)} onClick={onCartAddClick}>
            {t('components.AddToCart.toCart')}
          </Button>
        </div>
      </div>
    </div>
  );
};
