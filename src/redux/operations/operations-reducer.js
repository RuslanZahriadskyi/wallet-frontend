import { createReducer } from '@reduxjs/toolkit';
import {
  getOperationsSuccess,
  addNewOperationSuccess,
} from './operations-action';
import { openModal, closeModal, logoutModalAction } from './operations-action';

const setTrue = () => true;
const setFalse = () => false;

const operationReducer = createReducer([], {
  [getOperationsSuccess]: (_, { payload }) => payload,
  [addNewOperationSuccess]: (state, { payload }) => [...state, payload],
});

const modalTransaction = createReducer(false, {
  [openModal]: setTrue,
  [closeModal]: setFalse,
});

const modalLogout = createReducer(false, {
  [logoutModalAction]: (state, _) => !state,
});

export { operationReducer, modalTransaction, modalLogout };
