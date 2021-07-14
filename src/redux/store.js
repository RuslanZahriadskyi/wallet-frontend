import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

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

import { categoryReducer } from './category/category-reducer';

import { authReducer } from './auth';
import { operationsReducer } from './operations'; // defaults to localStorage for web

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
    modal: operationsReducer.modalReducer,
    logoutModalAction: operationsReducer.modalLogout,
    operations: operationsReducer.operationReducer,
    categories: categoryReducer,
  },
  middleware,
});

let persistor = persistStore(store);

export { store, persistor };
