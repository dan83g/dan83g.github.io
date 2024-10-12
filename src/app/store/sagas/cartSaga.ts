import { select, takeEvery } from 'redux-saga/effects';
import { cartActions, cartSelectors } from '../cart';

export function* addProduct(): Generator {
  const cart = yield select(cartSelectors.get);
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function* cart() {
  yield takeEvery(cartActions.addProduct.type, addProduct);
}
