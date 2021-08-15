import React from 'react';
import Login from '../components/Login/Login';
import LoginForm from '../components/LoginForm/LoginForm';
import '../components/Login/Login.scss';

const LoginPage = () => {
  return (
    <div className="loginPage">
      <Login />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
