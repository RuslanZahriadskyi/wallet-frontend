import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import actions from './statisticts-actions';

const {
  fetchStatisticsRequest,
  fetchStatisticsSuccess,
  fetchStatisticsError,

  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesError,

  fetchBalanceRequest,
  fetchBalanceSuccess,
  fetchBalanceError,
} = actions;

const items = createReducer([], {
  [fetchStatisticsRequest]: (_, { payload }) => payload,
  [fetchStatisticsSuccess]: (_, { payload }) => [...payload.monthOutlay],
  [fetchStatisticsError]: (_, { payload }) => payload,
});

const categories = createReducer(null, {
  [fetchCategoriesRequest]: (_, { payload }) => payload,
  [fetchCategoriesSuccess]: (_, { payload }) => [...payload],
  [fetchCategoriesError]: (_, { payload }) => payload,
});

const income = createReducer(null, {
  [fetchStatisticsRequest]: (_, { payload }) => payload,
  [fetchStatisticsSuccess]: (_, { payload }) => payload.income,
});

const outlay = createReducer(null, {
  [fetchStatisticsRequest]: (_, { payload }) => payload,
  [fetchStatisticsSuccess]: (_, { payload }) => payload.outlay,
  [fetchStatisticsError]: (_, { payload }) => payload,
});

const balance = createReducer(null, {
  [fetchBalanceRequest]: (_, { payload }) => payload,
  [fetchBalanceSuccess]: (_, { payload }) => payload,
  [fetchBalanceError]: (_, { payload }) => payload,
});

const statisticsReducer = combineReducers({
  items,
  categories,
  income,
  outlay,
  balance,
});

export default statisticsReducer;
