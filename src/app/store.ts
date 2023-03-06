import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import pemReducer from '../app/pem/pemSlice';

import pemMiddleware from './pem/pemMiddleware';

const middleware = [pemMiddleware];

export const store = configureStore({
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: true,
    }).concat(...middleware);
  },
  reducer: {
    pem: pemReducer,
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
