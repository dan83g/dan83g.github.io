import React, { FC } from 'react';
import { ProfileWidget } from '@widgets/profile';
import s from './styles.module.sass';

const ProfilePage: FC = () => {
  return (
    <div className={s.root}>
      <ProfileWidget />
    </div>
  );
};

export default ProfilePage;
