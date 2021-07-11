import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UserMenu from './UserMenu';
import './Header.scss';
import Logo from './Logo';
import Modal from '../ModalAddTransactions/ModalAddTransactions';
import ModalLogout from './ModalLogout';
import { operationsSelectors } from '../../redux/operations';

const Header = () => {
  const modal = useSelector(operationsSelectors.getModalValue);

  return (
    <header className="header">
      <NavLink exact to="/dashboard" className="homeLink">
        <Logo />
      </NavLink>
      <UserMenu />
      {modal && (
        <Modal modalValue={modal}>
          <ModalLogout />
        </Modal>
      )}
    </header>
  );
};

export default Header;
