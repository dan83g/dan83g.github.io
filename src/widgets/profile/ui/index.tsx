/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Divider } from 'src/shared/ui/divider';
import { useTokentStore } from 'src/entities/token/store';
import {
  useProfileStore,
  updateProfile,
  changePassword,
  ProfileForm,
  ChangePasswordForm,
  IProfileFormValues,
  ProfileFormActions,
  IUpdateProfileRequest,
  IChangePasswordRequest,
} from 'src/entities/profile';
import { IChangePasswordFormValues, ChangePasswordFormActions } from 'src/entities/profile/ui/password-form/types';

export const ProfileWidget: FC = (): ReactElement => {
  const { t } = useTranslation();
  const { token } = useTokentStore();
  const { profile, setProfile } = useProfileStore();

  const updateProfileHandle = async (
    values: Partial<IProfileFormValues>,
    actions: ProfileFormActions<Partial<IProfileFormValues>>
  ) => {
    try {
      setProfile(await updateProfile(token, values as IUpdateProfileRequest));
      toast.success(t('screens.ProfileScreen.updateProfile.success'));
    } catch (error) {
      actions.setErrors({ name: t(`errors.${error.code}`) });
    }
  };

  const changePasswordHandle = async (
    values: Partial<IChangePasswordFormValues>,
    actions: ChangePasswordFormActions<Partial<IChangePasswordFormValues>>
  ) => {
    try {
      const { success } = await changePassword(token, values as IChangePasswordRequest);
      if (success) {
        toast.success(t('screens.ProfileScreen.changePassword.success'));
      }
      actions.resetForm();
    } catch (error) {
      actions.setErrors({ newPassword: t(`errors.${error.code}`) });
    }
  };

  return (
    <div>
      <h4>{t('screens.ProfileScreen.title')}</h4>
      <ProfileForm
        name={profile.name}
        submitButtonCaption={t('screens.ProfileScreen.updateProfile.title')}
        onFormSubmit={updateProfileHandle}
      />
      <Divider />
      <h4>{t('forms.ChangePasswordForm.title')}</h4>
      <ChangePasswordForm
        submitButtonCaption={t('screens.ProfileScreen.changePassword.title')}
        onFormSubmit={changePasswordHandle}
      />
    </div>
  );
};
