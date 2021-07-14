import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { modalReducer, modalLogout } from './operations/operations-reducer'; // defaults to localStorage for web

const middleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
});

let store = configureStore({
  reducer: {
    modal: modalReducer,
    logoutModalAction: modalLogout,
  },
  middleware,
});

let persistor = persistStore(store);

export { store, persistor };
