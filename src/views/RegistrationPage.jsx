import React from 'react';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import images from '../images/register-desktop.png';
import './RegistrationPage';

const RegistrationPage = () => {
  return (
    <div className="registrationPage">
      <div className="container">
        <div className="blok1">
          <img src={images} alt="RegPage" className="images" />
        </div>
        <div className="blok2">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
