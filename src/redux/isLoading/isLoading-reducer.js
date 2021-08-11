import { createReducer } from '@reduxjs/toolkit';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  getCurrentUserAvatarRequest,
  getCurrentUserAvatarSuccess,
  getCurrentUserAvatarError,
} from '../auth/auth-actions';
import { categoriesAction } from '../category';
import { operationsAction } from '../operations';
import { statisticsActions } from '../statistics';

const isLoading = createReducer(false, {
  [registerRequest]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,
  [loginRequest]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,
  [logoutRequest]: () => true,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
  [getCurrentUserRequest]: () => true,
  [getCurrentUserSuccess]: () => false,
  [getCurrentUserError]: () => false,
  [getCurrentUserAvatarRequest]: () => true,
  [getCurrentUserAvatarSuccess]: () => false,
  [getCurrentUserAvatarError]: () => false,
  [categoriesAction.addNewCategoryRequest]: () => true,
  [categoriesAction.addNewCategorySuccess]: () => false,
  [categoriesAction.addNewCategoryError]: () => false,
  [categoriesAction.getCategoryRequest]: () => true,
  [categoriesAction.getCategorySuccess]: () => false,
  [categoriesAction.getCategoryError]: () => false,
  [operationsAction.addNewOperationRequest]: () => true,
  [operationsAction.addNewOperationSuccess]: () => false,
  [operationsAction.addNewOperationError]: () => false,
  [operationsAction.getOperationsRequest]: () => true,
  [operationsAction.getOperationsSuccess]: () => false,
  [operationsAction.getOperationsError]: () => false,
  [statisticsActions.fetchStatisticsRequest]: () => true,
  [statisticsActions.fetchStatisticsSuccess]: () => false,
  [statisticsActions.fetchStatisticsError]: () => false,
  [statisticsActions.fetchBalanceRequest]: () => true,
  [statisticsActions.fetchBalanceSuccess]: () => false,
  [statisticsActions.fetchBalanceError]: () => false,
});

export default isLoading;
