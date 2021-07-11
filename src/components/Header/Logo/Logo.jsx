import React from 'react';
import logo from './logo.png';
import './Logo.scss';

const Logo = () => {
  return (
    <>
      <img src={logo} alt="Logo" className="logoPng" />
      <span className="logoText">Wallet</span>
    </>
  );
};

export default Logo;
