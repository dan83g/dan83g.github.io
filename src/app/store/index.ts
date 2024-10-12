import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { token } from './token';
import { profile } from './profile';
import { products } from './products';
import { cart } from './cart';
import { initialized } from './initialized';
import { sagas } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    token,
    profile,
    products,
    cart,
    initialized,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof store.getState>;
