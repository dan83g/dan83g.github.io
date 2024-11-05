import React, { FC } from 'react';
import { MdLogin, MdLogout } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { profileActions } from 'src/app/store/profile';
import { useTokentStore } from 'src/entities/token';
import { ROUTES } from '@shared/config';
import s from './Login.module.sass';

export const Login: FC = () => {
  const navigate = useNavigate();
  const { token, clearToken } = useTokentStore();

  const dispatch = useDispatch();

  const onSignInClick = () => {
    navigate(ROUTES.AUTH);
  };

  const onSignOutClick = () => {
    clearToken();
    dispatch(profileActions.clearProfile());
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
