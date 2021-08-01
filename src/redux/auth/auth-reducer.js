import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerSuccess,
  registerError,
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError,
  getCurrentUserSuccess,
  getCurrentUserError,
  getCurrentUserAvatarSuccess,
  getVerifyTokenRepeatSuccess,
  getVerifyTokenRepeatError,
} from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload: { name, email, avatar, avatarId } }) => ({
    name,
    email,
    avatar,
    avatarId,
  }),
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (
    _,
    { payload: { name, email, avatar, avatarId } },
  ) => ({
    name,
    email,
    avatar,
    avatarId,
  }),
  [getCurrentUserAvatarSuccess]: (state, { payload: { avatarUrl } }) => ({
    ...state,
    avatar: avatarUrl,
  }),
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
  // [logoutError]: () => null,
  [getCurrentUserError]: () => null,
  [getVerifyTokenRepeatSuccess]: (_, { payload }) => payload.message,
  [getVerifyTokenRepeatError]: () => null,
});

const isAuthenticated = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [registerError]: setError,
  [loginError]: setError,
  [logoutError]: setError,
  [getCurrentUserError]: setError,
});

// const saveAvatar = createReducer(avatar);

export default combineReducers({
  user,
  token,
  isAuthenticated,

  error,
});
