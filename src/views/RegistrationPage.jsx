import React from 'react';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import images from '../images/login-desktop.png';
import './RegistrationPage';

const RegistrationPage = () => {
  return (
    <div className="registrationPage">
      <div>
        <img src={images} alt="RegPage" className="images" />
      </div>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
