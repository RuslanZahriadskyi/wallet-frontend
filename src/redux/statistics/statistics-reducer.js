import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import actions from './statistics-actions';

const {
  fetchStatisticsRequest,
  fetchStatisticsSuccess,
  fetchStatisticsError,

  fetchBalanceRequest,
  fetchBalanceSuccess,
  fetchBalanceError,
} = actions;

const items = createReducer([], {
  [fetchStatisticsRequest]: (_, { payload }) => payload,
  [fetchStatisticsSuccess]: (_, { payload }) => [...payload.monthOutlay],
  [fetchStatisticsError]: (_, { payload }) => payload,
});

const income = createReducer(null, {
  [fetchStatisticsRequest]: (_, { payload }) => payload,
  [fetchStatisticsSuccess]: (_, { payload }) => payload.income,
  [fetchStatisticsError]: (_, { payload }) => payload,
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
  income,
  outlay,
  balance,
});

export default statisticsReducer;
