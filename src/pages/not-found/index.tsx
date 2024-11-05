import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import s from './styles.module.sass';

export const NotFound: FC = () => {
  const { t } = useTranslation();
  return <div className={s.root}>{t('error.ERR_PAGE_NOT_FOUND')}</div>;
};
