import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addNewOperationSuccess } from '../operations/operations-action';

import actions from './statistics-actions';

const { fetchStatisticsSuccess, fetchBalanceSuccess } = actions;

const items = createReducer([], {
  [fetchStatisticsSuccess]: (_, { payload }) => [...payload.monthOutlay],
});

const income = createReducer(null, {
  [fetchStatisticsSuccess]: (_, { payload }) => payload.income,
});

const outlay = createReducer(null, {
  [fetchStatisticsSuccess]: (_, { payload }) => payload.outlay,
});

const balance = createReducer(null, {
  [fetchBalanceSuccess]: (_, { payload }) => payload,
});

const statisticsReducer = combineReducers({
  items,
  income,
  outlay,
  balance,
});

export default statisticsReducer;
