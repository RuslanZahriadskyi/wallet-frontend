import React from 'react';

import images from '../../images/register-desktop.png';

import '../Register/Register.scss';

const RegistrationPage = () => {
  return (
    <>
      <div className="blok1">
        <img src={images} alt="Page" className="imagReg" />
        <h1 className="titleFin">Finance App</h1>
      </div>
    </>
  );
};

export default RegistrationPage;
