import { createAction } from '@reduxjs/toolkit';

const openModal = createAction('operations/openModal');
const closeModal = createAction('operations/closeModal');

const logoutModalAction = createAction('operations/modalLogout');

export { openModal, closeModal, logoutModalAction };
