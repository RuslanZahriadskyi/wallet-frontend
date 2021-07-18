import React from 'react';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import Register from '../components/Register/Register';

import '../components/Register/Register.scss';

const RegistrationPage = () => {
  return (
    <div className="registrationPage">
      <Register />
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
