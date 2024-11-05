/* eslint-disable import/named */
import React, { FC, ReactElement, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Badge } from 'antd';
import { Button } from 'src/shared/ui/button';
import { ROUTES } from 'src/shared/config';
import { Dropdown, IOption } from 'src/shared/ui/drop-down';
import { useCartStore } from 'src/entities/product';
import {
  MdOutlineChecklist,
  MdOutlineShoppingCart,
  MdOutlineAccountCircle,
  MdOutlineAdminPanelSettings,
  MdReorder,
} from 'react-icons/md';
import s from './styles.module.sass';
import { IconType } from 'react-icons';

interface INavigateItem {
  id: string;
  label: string;
  Icon: IconType;
  url?: string;
}

const actions: INavigateItem[] = [
  {
    id: 'catalog' as const,
    label: 'navigation.catalog',
    Icon: MdReorder,
    url: ROUTES.HOME,
  },
  {
    id: 'cart' as const,
    label: 'navigation.cart',
    Icon: MdOutlineShoppingCart,
    url: ROUTES.CART,
  },
  {
    id: 'orders' as const,
    label: 'navigation.orders',
    Icon: MdOutlineChecklist,
    url: ROUTES.ORDERS,
  },
  {
    id: 'profile' as const,
    label: 'navigation.profile',
    Icon: MdOutlineAccountCircle,
    url: ROUTES.PROFILE,
  },
  {
    id: 'admin' as const,
    label: 'navigation.admin',
    Icon: MdOutlineAdminPanelSettings,
  },
];

export const pluralizeOptions = (options: IOption[]) => {
  return options.length > 0 ? options[0].value : '';
};

export const Navigation: FC = (): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [adminMenuValue, setAdminMenuValue] = useState<IOption>(undefined);

  const { cart } = useCartStore();

  const adminMenuOptions: IOption[] = useMemo(
    () => [
      { key: ROUTES.ADMIN_CATEGORIES, value: t('navigation.adminCategories') },
      { key: ROUTES.ADMIN_PRODUCTS, value: t('navigation.adminProducts') },
      { key: ROUTES.ADMIN_ORDERS, value: t('navigation.adminOrders') },
    ],
    [t]
  );

  const onChange = (value: IOption) => {
    setAdminMenuValue(value);
    navigate(value.key as string);
  };

  return (
    <div className={s.root}>
      <div className={s.toolbar}>
        {actions.map(({ id, label, Icon, url }) =>
          url ? (
            <Button key={label} type="button" onClick={() => navigate(url)}>
              <div key={label} className={s.toolbar__Action} onClick={() => navigate(url)}>
                <Badge count={id === 'cart' ? cart.length : 0} style={{ backgroundColor: '#108ee9' }}>
                  <Icon style={{ fontSize: 24 }} />
                </Badge>
                <span>{t(label)}</span>
              </div>
            </Button>
          ) : (
            <Dropdown key={label} options={adminMenuOptions} value={adminMenuValue} onChange={onChange}>
              <div className={s.toolbar__Action} onClick={() => navigate(url)}>
                <Badge count={id === 'cart' ? cart.length : 0} style={{ backgroundColor: '#108ee9' }}>
                  <Icon style={{ fontSize: 24 }} />
                </Badge>
                <span>{t(label)}</span>
              </div>
            </Dropdown>
          )
        )}
      </div>
    </div>
  );
};
