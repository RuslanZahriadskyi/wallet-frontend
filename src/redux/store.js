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


import { modalReducer, modalLogout } from './operations/operations-reducer'; // defaults to localStorage for web
import { statisticsReducer } from './statistics';

import {
  modalReducer,
  operationReducer,
} from './operations/operations-reducer';
import { categoryReducer } from './category/category-reducer';
import { statisticsReducer } from './operations/operations-reducer';

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
    statistics: statisticsReducer,
    auth: allOperations,
    modal: operationsReducer.modalReducer,
    logoutModalAction: operationsReducer.modalLogout,
        operations,
    categories: categoryReducer,
  },
  middleware,
});

let persistor = persistStore(store);

export { store, persistor };
