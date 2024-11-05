import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TabView } from '@shared/ui/tab-view';
import { Tab } from '@shared/ui/tab';
import s from './styles.module.sass';

// export interface IAdmin {
//   visible: boolean;
// }

// export const Admin: FC<IAdmin> = ({ visible }) => {
export const Admin: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={s.root}>
      <TabView initialTabKey={'products'}>
        <Tab tabKey="products" caption={t('forms.AuthForm.signIn.headerTitle')}>
          <></>
        </Tab>
        <Tab tabKey="categories" caption={t('forms.AuthForm.signUp.headerTitle')}>
          <></>
        </Tab>
        <Tab tabKey="orders" caption={t('forms.AuthForm.signUp.headerTitle')}>
          <></>
        </Tab>
      </TabView>
    </div>
  );
};
