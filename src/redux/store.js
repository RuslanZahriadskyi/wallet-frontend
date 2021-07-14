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

import {
  modalReducer,
  operationReducer,
} from './operations/operations-reducer';
import { categoryReducer } from './category/category-reducer';
import { statisticsReducer } from './operations/operations-reducer';

const middleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
});

const operations = combineReducers({
  userOperations: operationReducer,
  statistics: statisticsReducer,
});

let store = configureStore({
  reducer: {
    operations,
    categories: categoryReducer,
    modal: modalReducer,
  },
  middleware,
});

let persistor = persistStore(store);

export { store, persistor };
