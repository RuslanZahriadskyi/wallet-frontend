import { createReducer } from '@reduxjs/toolkit';
import { openModal, closeModal, logoutModalAction } from './operations-action';

const setTrue = () => true;
const setFalse = () => false;

const modalReducer = createReducer(false, {
  [openModal]: setTrue,
  [closeModal]: setFalse,
});

const modalLogout = createReducer(false, {
  [logoutModalAction]: (state, _) => !state,
});

export { modalReducer, modalLogout };
