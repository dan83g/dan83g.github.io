import React, { FC, useState } from 'react';
import { ModalFormWrapper } from 'src/shared/windows/ModalFormWrapper/ModalFormWrapper';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TabView } from 'src/shared/tabs/TabView/TabView';
import { Tab } from 'src/shared/tabs/Tab/Tab';
import { AuthForm, AuthFormActions, IAuthFormValues } from 'src/entities/auth-form';
import { useDispatch } from 'react-redux';
import { signUp } from 'src/features/auth/sign-up/api/requests';
import { profileActions, useProfileSelector } from 'src/app/store/profile';
import { NavigationState } from '../Navigation/Navigation';
import { signIn } from 'src/features/auth/sign-in/api/requests';
import { ROUTES } from '@shared/config';
import { useTokentStore } from 'src/entities/token';
import s from './Auth.module.sass';

interface IAuth {
  visible: boolean;
}

export const Auth: FC<IAuth> = ({ visible }) => {
  const { setToken } = useTokentStore();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isProfileLoaded = useProfileSelector((state) => state.profile.isProfileLoaded);

  const [isVisible, setIsVisible] = useState<boolean>(visible);
  const onCloseModal = () => {
    setIsVisible(false);
    navigate(ROUTES.HOME);
  };

  const onSignIn = async (values: IAuthFormValues, actions: AuthFormActions<IAuthFormValues>) => {
    try {
      const response = await signIn(values.email, values.password);
      setToken(response.token);
      dispatch(profileActions.setProfile(response.profile));
    } catch (error) {
      dispatch(profileActions.setErrorMessage(`${error.message}`));
      dispatch(profileActions.setErrorCode(`${error.code}`));
      actions.setErrors({ email: t(`errors.${error.code}`) });
    }
  };

  const onSignUp = async (values: IAuthFormValues, actions: AuthFormActions<IAuthFormValues>) => {
    try {
      const response = await signUp(values.email, values.password);
      setToken(response.token);
      dispatch(profileActions.setProfile(response.profile));
    } catch (error) {
      dispatch(profileActions.setErrorMessage(`${error.message}`));
      dispatch(profileActions.setErrorCode(`${error.code}`));
      actions.setErrors({ email: t(`errors.${error.code}`) });
    }
  };

  if (isProfileLoaded) return <Navigate to={(location.state as NavigationState)?.from || ROUTES.HOME} replace />;

  return (
    <ModalFormWrapper isVisible={isVisible} onClose={onCloseModal}>
      <TabView initialTabKey={'sign-in'}>
        <Tab tabKey="sign-in" caption={t('forms.AuthForm.signIn.headerTitle')}>
          <AuthForm onFormSubmit={onSignIn} submitButtonCaption={t('forms.AuthForm.signIn.buttonTitle')} />
        </Tab>
        <Tab tabKey="sign-up" caption={t('forms.AuthForm.signUp.headerTitle')}>
          <AuthForm onFormSubmit={onSignUp} submitButtonCaption={t('forms.AuthForm.signUp.buttonTitle')} />
        </Tab>
      </TabView>
    </ModalFormWrapper>
  );
};
