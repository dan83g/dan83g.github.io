import React, { FC } from 'react';
import { UserForm } from '../UserForm/UserForm';
import { ChangePasswordForm } from '../ChangePasswordForm/ChangePasswordForm';
import { Divider } from 'antd';

export const ProfileForm: FC = () => {
  return (
    <div>
      <UserForm />
      <Divider />
      <ChangePasswordForm />
    </div>
  );
};
