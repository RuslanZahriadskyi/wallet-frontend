import { createAction } from '@reduxjs/toolkit';

const openModal = createAction('contacts/openModal');
const closeModal = createAction('contacts/closeModal');

export { openModal, closeModal };
