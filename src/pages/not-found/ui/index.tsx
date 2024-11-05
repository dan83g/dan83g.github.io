import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { MdErrorOutline } from 'react-icons/md';
import s from './styles.module.sass';

const NotFoundPage: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={s.root}>
      <MdErrorOutline className={s.icon} />
      {t('errors.ERR_PAGE_NOT_FOUND')}
    </div>
  );
};

export default NotFoundPage;
