import React, { FC } from 'react';
import { MdLogin, MdLogout } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { tokenSelectors, tokenActions } from 'src/app/store/token';
import { profileActions } from 'src/app/store/profile';
import { RootState } from 'src/app/store';
import s from './Login.module.sass';

export const Login: FC = () => {
  const navigate = useNavigate();
  const token = useSelector<RootState, RootState['token']>(tokenSelectors.get);
  const dispatch = useDispatch();

  const onSignInClick = () => {
    navigate('auth');
  };

  const onSignOutClick = () => {
    dispatch(tokenActions.clear());
    dispatch(profileActions.clearProfile());
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
