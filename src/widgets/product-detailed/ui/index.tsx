/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTokentStore } from 'src/entities/token/store';
import { Spinner } from 'src/shared/ui/spinner';
import { getProduct, useCartStore, IProduct } from 'src/entities/product';
import { ProductCardDetailed } from 'src/entities/product/ui/product-card-detailed';
import s from './styles.module.sass';

export const ProductDetailed: FC = (): ReactElement => {
  const { token } = useTokentStore();
  const { addToCart } = useCartStore();
  const { productId } = useParams();
  const [product, setProduct] = useState<IProduct>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadProduct = async (token: string, id: string) => {
    setIsLoading(true);
    setProduct(await getProduct(token, id));
    setIsLoading(false);
  };

  useEffect(() => {
    loadProduct(token, productId);
  }, []);

  const handleOnBuyNowClick = () => {
    addToCart(product);
  };

  const handleAddToCartClick = () => {
    addToCart(product);
  };

  return (
    <div className={s.root}>
      {product && (
        <ProductCardDetailed
          id={product.id}
          name={product.name}
          photo={product.photo}
          price={product.price}
          desc={product.desc}
          onBuyNowClick={handleOnBuyNowClick}
          onCartAddClick={handleAddToCartClick}
        />
      )}
      <Spinner loading={isLoading} />
    </div>
  );
};
