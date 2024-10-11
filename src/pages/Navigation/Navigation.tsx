import React, { FC, ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Portal } from 'src/shared/Portal/Portal';
import { ProductForm } from 'src/features/forms/ProductForm/ProductForm';
import Modal from 'src/widgets/Modal/Modal';
import s from './Navigation.module.sass';

const navigationItems = [
  { name: 'navigation.home', path: '/' },
  { name: 'navigation.profile', path: '/profile' },
  { name: 'navigation.cart', path: '/cart' },
  { name: 'navigation.product', path: '/product' },
];

export const Navigation: FC = (): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={s.root}>
      {navigationItems.map((i) => (
        <div className={s.navitem} key={i.name} onClick={() => navigate(i.path)}>
          {i.name === 'navigation.product' ? (
            <div
              onClick={(e) => {
                e.stopPropagation();
                setIsVisible(true);
              }}
            >
              {t(i.name)}
            </div>
          ) : (
            t(i.name)
          )}
        </div>
      ))}
      {isVisible && (
        <Portal>
          <Modal visible={isVisible} onClose={() => setIsVisible(false)}>
            <ProductForm />
          </Modal>
        </Portal>
      )}
    </div>
  );
};
