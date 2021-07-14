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
import authReducer from './auth/auth-reducer';
import { modalReducer, modalLogout } from './operations/operations-reducer'; // defaults to localStorage for web

const middleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const allOperations = persistReducer(authPersistConfig, authReducer);

let store = configureStore({
  reducer: {
    auth: allOperations,
    modal: modalReducer,
    logoutModalAction: modalLogout,
  },
  middleware,
});

let persistor = persistStore(store);

export { store, persistor };
