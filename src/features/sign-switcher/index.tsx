import React, { FC } from 'react';
import { MdLogin, MdLogout } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useTokentStore } from '@entities/token';
import { useProfileStore } from '@entities/profile';
import { ROUTES } from '@shared/config';
import s from './styles.module.sass';

export const Login: FC = () => {
  const navigate = useNavigate();
  const { token, clearToken } = useTokentStore();
  const { clearProfile } = useProfileStore();

  const onSignInClick = () => {
    navigate(ROUTES.AUTH);
  };

  const onSignOutClick = () => {
    clearToken();
    clearProfile();
    navigate(ROUTES.HOME);
  };

  return (
    <>
      {token ? (
        <button className={s.root} type="button" onClick={onSignOutClick}>
          <MdLogout />
        </button>
      ) : (
        <button className={s.root} type="button" onClick={onSignInClick}>
          <MdLogin />
        </button>
      )}
    </>
  );
};
