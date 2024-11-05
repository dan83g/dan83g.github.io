import React, { FC } from 'react';
import { AdminCategoryList } from '@widgets/admin-catergory-list';
import s from './styles.module.sass';

const AdminCategoryPage: FC = () => {
  return (
    <>
      <div className={s.root}>
        <AdminCategoryList />
      </div>
    </>
  );
};

export default AdminCategoryPage;
