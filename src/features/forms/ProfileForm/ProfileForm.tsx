import React, { FC } from 'react';
import { UserForm } from '../UserForm/UserForm';
import { ChangePasswordForm } from '../ChangePasswordForm/ChangePasswordForm';
import { Divider } from 'src/shared/ui/divider';

export const ProfileForm: FC = () => {
  return (
    <div>
      <UserForm />
      <Divider />
      <ChangePasswordForm />
    </div>
  );
};
