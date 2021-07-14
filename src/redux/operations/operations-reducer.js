import { createReducer } from '@reduxjs/toolkit';
import { openModal, closeModal } from './operations-action';
import {
  getOperationsSuccess,
  addNewOperationSuccess,
  getSatatisticsPerMonthRequest,
} from './operations-action';

const setTrue = () => true;
const setFalse = () => false;

const operationReducer = createReducer([], {
  [getOperationsSuccess]: (_, { payload }) => payload,
  [addNewOperationSuccess]: (state, { payload }) => [...state, payload],
});

const statisticsReducer = createReducer([], {
  [getSatatisticsPerMonthRequest]: (_, { payload }) => payload,
});

const modalReducer = createReducer(false, {
  [openModal]: setTrue,
  [closeModal]: setFalse,
});

export { modalReducer, operationReducer, statisticsReducer };
