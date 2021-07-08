import React from 'react';
import { NavLink } from 'react-router-dom';
import ModalLogout from '../ModalLogout';
import './Header.scss';
import logo from './logo.png';

const Header = () => {
  return (
    <header className="header">
      <NavLink exact to="/dashboard" className="homeLink">
        <img src={logo} alt="Logo" className="logoPng" />
        <span className="logoText">Wallet</span>
      </NavLink>
      <ModalLogout />
    </header>
  );
};

export default Header;
