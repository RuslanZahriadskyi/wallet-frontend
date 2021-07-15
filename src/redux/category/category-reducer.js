import { createReducer } from '@reduxjs/toolkit';
import { getCategorySuccess, addNewCategorySuccess } from './category-action';

const categoryReducer = createReducer([], {
  [getCategorySuccess]: (_, { payload }) => payload,
  [addNewCategorySuccess]: (state, { payload }) => [...state, payload],
});

export { categoryReducer };
