import React, { FC, useState } from 'react';
import { ModalFormWrapper } from 'src/shared/ui/modal-wrapper';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TabView } from 'src/shared/ui/tab-view';
import { Tab } from 'src/shared/ui/tab';
import { AuthForm, AuthFormActions, IAuthFormValues } from 'src/entities/profile/ui/auth-form';
import { signUp } from 'src/features/auth/sign-up/api/requests';
import { NavigationState } from 'src/widgets/protected-route';
import { signIn } from 'src/features/auth/sign-in/api/requests';
import { ROUTES } from '@shared/config';
import { useTokentStore } from 'src/entities/token';
import { useProfileStore } from 'src/entities/profile';
// import s from './styles.module.sass';

interface IAuth {
  visible: boolean;
}

const AuthPage: FC<IAuth> = ({ visible }) => {
  const { setToken } = useTokentStore();
  const { setProfile, isProfileLoaded } = useProfileStore();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const [isVisible, setIsVisible] = useState<boolean>(visible);
  const onCloseModal = () => {
    setIsVisible(false);
    navigate(ROUTES.HOME);
  };

  const onSignIn = async (values: IAuthFormValues, actions: AuthFormActions<IAuthFormValues>) => {
    try {
      const response = await signIn(values.email, values.password);
      setToken(response.token);
      setProfile(response.profile);
    } catch (error) {
      actions.setErrors({ email: t(`errors.${error.code}`) });
    }
  };

  const onSignUp = async (values: IAuthFormValues, actions: AuthFormActions<IAuthFormValues>) => {
    try {
      const response = await signUp(values.email, values.password);
      setToken(response.token);
      setProfile(response.profile);
    } catch (error) {
      actions.setErrors({ email: t(`errors.${error.code}`) });
    }
  };

  if (isProfileLoaded()) return <Navigate to={(location.state as NavigationState)?.from || ROUTES.HOME} replace />;

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

export default AuthPage;
