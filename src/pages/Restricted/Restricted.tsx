import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import s from './Restricted.module.sass';

export const Restricted: FC = () => {
  const { t } = useTranslation();
  return <div className={s.root}>{t('errors.ERR_NO_PERMISSIONS')}</div>;
};
