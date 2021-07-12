import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UserMenu from './UserMenu';
import './Header.scss';
import Logo from './Logo';
import Modal from '../ModalAddTransactions/ModalAddTransactions';
import ModalLogout from './ModalLogout';
import { operationsSelectors, operationsAction } from '../../redux/operations';

const Header = () => {
  const dispatch = useDispatch();

  const modalLogout = useSelector(operationsSelectors.logoutModalAction);

  const closeModalLogout = () => dispatch(operationsAction.logoutModalAction());

  return (
    <header className="header">
      <NavLink exact to="/dashboard" className="homeLink">
        <Logo />
      </NavLink>
      <UserMenu />
      {modalLogout && (
        <Modal modalValue={modalLogout} modalAction={closeModalLogout}>
          <ModalLogout />
        </Modal>
      )}
    </header>
  );
};

export default Header;
