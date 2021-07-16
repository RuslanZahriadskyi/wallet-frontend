import { createAction } from '@reduxjs/toolkit';

const openModal = createAction('operations/openModal');
const closeModal = createAction('operations/closeModal');
const addNewOperationRequest = createAction('operation/addOperationRequest');
const addNewOperationSuccess = createAction('operation/addOperationSuccess');
const addNewOperationError = createAction('operation/addOperationError');

const getOperationsRequest = createAction('operation/getOperationsRequest');
const getOperationsSuccess = createAction('operation/getOperationsSuccess');
const getOperationsError = createAction('operation/getOperationsError');

const getSatatisticsPerMonthRequest = createAction(
  'operation/getSatatisticsPerMonthRequest',
);
const getSatatisticsPerMonthSuccess = createAction(
  'operation/getSatatisticsPerMonthSuccess',
);
const getSatatisticsPerMonthError = createAction(
  'operation/getSatatisticsPerMonthError',
);

const logoutModalAction = createAction('operations/modalLogout');

export {
  openModal,
  closeModal,
  logoutModalAction,
  addNewOperationRequest,
  addNewOperationSuccess,
  addNewOperationError,
  getOperationsRequest,
  getOperationsSuccess,
  getOperationsError,
  getSatatisticsPerMonthRequest,
  getSatatisticsPerMonthSuccess,
  getSatatisticsPerMonthError,
};
