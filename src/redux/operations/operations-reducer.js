import { createReducer } from '@reduxjs/toolkit';
import { openModal, closeModal } from './operations-action';

const setTrue = () => true;
const setFalse = () => false;

const modalReducer = createReducer(false, {
  [openModal]: setTrue,
  [closeModal]: setFalse,
});

export { modalReducer };
