import { select, takeEvery, put } from 'redux-saga/effects';
import { profileActions } from '../profile';
import { signUp } from 'src/features/auth/sign-up/api/requests';
import { tokenActions } from '../token';
import { ISignUpResponse } from 'src/features/auth/sign-up/api/types';

export function* setProfile(): Generator {
  const profile = yield select((state) => state.profile.profile);
  localStorage.setItem('profile', JSON.stringify(profile));
}

export function* clearProfile(): Generator {
  yield localStorage.removeItem('profile');
}

export function* doSagaAuth(data: { type: string; payload: { email: string; password: string } }): Generator {
  try {
    const responseData = yield signUp(data.payload.email, data.payload.password);
    const profile = (responseData as ISignUpResponse).profile;
    const token = (responseData as ISignUpResponse).token;
    yield put(profileActions.setProfile(profile));
    yield put(tokenActions.setToken(token));
  } catch (error) {
    yield put(profileActions.setErrorMessage(`${error.message}`));
    yield put(profileActions.setErrorCode(`${error.code}`));
  }
}

export function* profile() {
  yield takeEvery(profileActions.setProfile.type, setProfile);
  yield takeEvery(profileActions.clearProfile.type, clearProfile);
  yield takeEvery(profileActions.doSagaAuth.type, doSagaAuth);
}
