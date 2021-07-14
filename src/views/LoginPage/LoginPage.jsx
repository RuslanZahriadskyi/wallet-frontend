import React from 'react';
import LoginForm from '../../components/Login/LoginForm';
import images from '../../images/login-desktop.png';
import '../LoginPage/LoginPage.scss';

const LoginPage = () => {
  return (
    <div className="loginPage">
      <div className="blok1">
        <img src={images} alt="LogPage" className="imagLog" />
        <h1 className="titleFin">Finance App</h1>
      </div>
      <div className="blok2">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
