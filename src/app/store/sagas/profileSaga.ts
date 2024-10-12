import { select, takeEvery } from 'redux-saga/effects';
import { profileActions, profileSelectors } from '../profile';

export function* setProfile(): Generator {
  const profile = yield select(profileSelectors.get);
  localStorage.setItem('profile', JSON.stringify(profile));
}

export function* clearProfile(): Generator {
  yield localStorage.removeItem('profile');
}

export function* profile() {
  yield takeEvery(profileActions.setProfile.type, setProfile);
  yield takeEvery(profileActions.clearProfile.type, clearProfile);
}
