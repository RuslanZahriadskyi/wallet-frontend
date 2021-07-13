import React from 'react';
import LoginForm from '../components/Login/LoginForm';
import images from '../images/login-desktop.png';
import './LoginPage';

const LoginPage = () => {
  return (
    <div>
      <div>
        <img src={images} alt="LogPage" />
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
