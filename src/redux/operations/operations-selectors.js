import { createSelector } from '@reduxjs/toolkit';

const getModalValue = state => state.modal;

const logoutModalAction = state => state.logoutModalAction;

const getOperations = state => state.operations;

const getSortedOperations = createSelector([getOperations], operations => {
  return operations.slice().sort((a, b) => b.date - a.date);
});

export { getModalValue, logoutModalAction, getOperations, getSortedOperations };
