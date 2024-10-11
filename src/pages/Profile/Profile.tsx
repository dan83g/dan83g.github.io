import React, { FC } from 'react';
import { ProfileForm } from 'src/features/forms/ProfileForm/ProfileForm';
import s from './Profile.module.sass';

export const Profile: FC = () => {
  return (
    <div className={s.root}>
      <ProfileForm />
    </div>
  );
};
