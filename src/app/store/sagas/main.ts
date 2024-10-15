import { all } from 'redux-saga/effects';
import { token } from './tokenSaga';
import { profile } from './profileSaga';
import { cart } from './cartSaga';

export function* sagas() {
  yield all([token(), profile(), cart()]);
}
