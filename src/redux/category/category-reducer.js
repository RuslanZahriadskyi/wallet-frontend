import { createReducer } from '@reduxjs/toolkit';
import { logoutSuccess } from '../auth/auth-actions';
import { getCategorySuccess, addNewCategorySuccess } from './category-action';

const categoryReducer = createReducer([], {
  [getCategorySuccess]: (_, { payload }) => payload,
  [addNewCategorySuccess]: (state, { payload }) => [...state, payload],
  [logoutSuccess]: () => [],
});

export { categoryReducer };
