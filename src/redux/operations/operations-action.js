import { createAction } from '@reduxjs/toolkit';

const openModal = createAction('operations/openModal');
const closeModal = createAction('operations/closeModal');

export { openModal, closeModal };
