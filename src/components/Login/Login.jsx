import React from 'react';
import images from '../../images/login-desktop.png';
import './Login.scss';

const LoginPage = () => {
  return (
    <>
      <div className="blokLog1">
        <img src={images} alt="LogPage" className="imagLog" />
        <h1 className="titleFinLog">Finance App</h1>
      </div>
    </>
  );
};

export default LoginPage;
