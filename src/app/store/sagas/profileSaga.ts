import { select, takeEvery, put } from 'redux-saga/effects';
import { profileActions } from '../profile';
import { registerSignUp, isAuthResult, AuthResult, apiProfileToProfile } from 'src/entities/Register/api/requests';
import { tokenActions } from '../token';
import { isAxiosError } from 'axios';
import { isIApiError, IApiError, IServerError } from 'src/shared/api/error/model';
import { productsActions } from '../products';

export function* setProfile(): Generator {
  const profile = yield select((state) => state.profile.profile);
  localStorage.setItem('profile', JSON.stringify(profile));
}

export function* clearProfile(): Generator {
  yield localStorage.removeItem('profile');
}

export function* doSagaAuth(data: { type: string; payload: { email: string; password: string } }): Generator {
  try {
    const response = yield registerSignUp(data.payload.email, data.payload.password);
    const token = (response as AuthResult).token;
    const profile = apiProfileToProfile((response as AuthResult).profile);
    profile.isAdmin = false;

    if (isAuthResult(response)) {
      yield put(profileActions.setProfile(profile));
      yield put(tokenActions.setToken(token));
      console.log('Пользователь успешно зарегистрирован');
    } else {
      yield put(profileActions.setErrorMessage('Пользователь успешно зарегистрирован'));
    }
  } catch (error: unknown) {
    if (isAxiosError(error) && isIApiError(error?.response?.data as unknown)) {
      const errors = (error?.response?.data as IApiError).errors.map((err: IServerError) => err.message).join(', ');
      const code = (error?.response?.data as IApiError).errors.find(() => true).extensions.code;

      yield put(profileActions.setErrorCode(code));
      yield put(profileActions.setErrorMessage(errors));
    } else {
      yield put(profileActions.setErrorMessage('Неизвестная ошибка'));
    }
  }
}

export function* profile() {
  yield takeEvery(profileActions.setProfile.type, setProfile);
  yield takeEvery(profileActions.clearProfile.type, clearProfile);
  yield takeEvery(profileActions.doSagaAuth.type, doSagaAuth);
}
