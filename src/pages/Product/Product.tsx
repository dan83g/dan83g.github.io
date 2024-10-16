import React, { FC, useState } from 'react';
import { ProductForm } from 'src/features/forms/ProductForm/ProductForm';
import { ModalFormWrapper } from 'src/shared/windows/ModalFormWrapper/ModalFormWrapper';
import { useNavigate } from 'react-router-dom';

interface IProduct {
  visible: boolean;
}

export const Product: FC<IProduct> = ({ visible }) => {
  const [isVisible, setIsVisible] = useState<boolean>(visible);
  const navigate = useNavigate();
  const onCloseModal = () => {
    setIsVisible(false);
    navigate('/');
  };
  return (
    <ModalFormWrapper isVisible={isVisible} onClose={onCloseModal}>
      <ProductForm />
    </ModalFormWrapper>
  );
};
