import React, { FC, useState } from 'react';
import { ModalFormWrapper } from 'src/shared/windows/ModalFormWrapper/ModalFormWrapper';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TabView } from 'src/shared/tabs/TabView/TabView';
import { Tab } from 'src/shared/tabs/Tab/Tab';
import { LoginForm } from 'src/features/forms/LoginForm/LoginForm';
import { RegisterForm, IRegisterFormValues } from 'src/features/forms/RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { registerSignUp, isAuthResult, AuthResult, apiProfileToProfile } from 'src/entities/Register/api/requests';
import { isIApiError, IApiError, IServerError } from 'src/shared/api/error/model';
import { tokenActions } from 'src/app/store/token';
import { profileActions, useProfileSelector } from 'src/app/store/profile';
import { AxiosError, isAxiosError } from 'axios';
import { NavigationState } from '../Navigation/Navigation';
import s from './Auth.module.sass';

interface IAuth {
  visible: boolean;
}

export const Auth: FC<IAuth> = ({ visible }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const profileErrorMessage = useProfileSelector((state) => state.profile.errorMessage);
  const profileErrorCode = useProfileSelector((state) => state.profile.errorCode);
  const isProfileLoaded = useProfileSelector((state) => state.profile.isProfileLoaded);

  const [isVisible, setIsVisible] = useState<boolean>(visible);
  const onCloseModal = () => {
    setIsVisible(false);
    navigate('/');
  };

  const onFormSubmitFunction = (values: IRegisterFormValues) => {
    registerSignUp(values.email, values.password)
      .then((result) => {
        if (isAuthResult(result)) {
          const token = (result as AuthResult).token;
          const profile = apiProfileToProfile((result as AuthResult).profile);
          dispatch(tokenActions.setToken(token));
          dispatch(profileActions.setProfile(profile));
          console.log('Пользователь успешно зарегистрирован');
        } else {
          dispatch(profileActions.setErrorMessage('Сервер вернул данные неизвестного формата'));
        }
      })
      .catch((error: Error | AxiosError) => {
        if (isAxiosError(error) && isIApiError(error?.response?.data as unknown)) {
          const errors = (error?.response?.data as IApiError).errors.map((err: IServerError) => err.message).join(', ');
          const code = (error?.response?.data as IApiError).errors.find(() => true).extensions.code;
          dispatch(profileActions.setErrorCode(code));
          dispatch(profileActions.setErrorMessage(errors));
        } else {
          dispatch(profileActions.setErrorMessage('Неизвестная ошибка'));
        }
      });
  };

  const onFormSubmitSaga = (values: IRegisterFormValues) => {
    dispatch(profileActions.doSagaAuth(values));
  };

  console.log((location.state as NavigationState)?.from);
  if (isProfileLoaded) return <Navigate to={(location.state as NavigationState)?.from || '/'} replace />;

  return (
    <ModalFormWrapper isVisible={isVisible} onClose={onCloseModal}>
      <TabView initialTabKey={'login'}>
        <Tab tabKey="login" caption={t('forms.LoginForm.title')}>
          <LoginForm />
        </Tab>
        <Tab tabKey="register" caption={t('forms.RegisterForm.title')}>
          <div>
            <RegisterForm onFormSubmit={onFormSubmitFunction} />
            {profileErrorCode && (
              <div className={s.error}>{t(`errors.${profileErrorCode}`) + '\n' + profileErrorMessage}</div>
            )}
          </div>
        </Tab>
        <Tab tabKey="register-saga" caption={t('forms.RegisterForm.title') + ' Saga'}>
          <div>
            <RegisterForm onFormSubmit={onFormSubmitSaga} />
            {profileErrorCode && (
              <div className={s.error}>{t(`errors.${profileErrorCode}`) + '\n' + profileErrorMessage}</div>
            )}
          </div>
        </Tab>
      </TabView>
    </ModalFormWrapper>
  );
};
