import { createReducer } from '@reduxjs/toolkit';
import {
  getOperationsSuccess,
  addNewOperationSuccess,
  getSatatisticsPerMonthRequest,
} from './operations-action';
import { combineReducers } from 'redux';
import { openModal, closeModal, logoutModalAction } from './operations-action';

const setTrue = () => true;
const setFalse = () => false;

const operationReducer = createReducer([], {
  [getOperationsSuccess]: (_, { payload }) => payload,
  [addNewOperationSuccess]: (state, { payload }) => [...state, payload],
});


const modalReducer = createReducer(false, {
  [openModal]: setTrue,
  [closeModal]: setFalse,
});



const modalLogout = createReducer(false, {
  [logoutModalAction]: (state, _) => !state,
});

// const loading = createReducer(false, {
//   []: () => true,
//   []: () => false,
//   []: () => false,
//   []: () => true,
//   []: () => false,
//   []: () => false,
//   []: () => true,
//   []: () => false,
//   []: () => false,
// });

export default combineReducers({ modalReducer, modalLogout, operationReducer, statisticsReducer });

