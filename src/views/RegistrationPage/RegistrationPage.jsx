import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import images from '../../images/register-desktop.png';
// import elips1 from '../images/Ellipse1.svg';
// import elips2 from '../images/Ellipse2.svg';
import '../RegistrationPage/RegistrationPage.scss';

const RegistrationPage = () => {
  return (
    // eslint-disable-next-line react/jsx-no-undef

    <div className="registrationPage">
      <div className="blok1">
        <img src={images} alt="RegPage" className="images" />
        <h1 className="titleFin">Finance App</h1>
        {/* <img src={elips1} alt="RegPage" className="elips1" /> */}
      </div>
      <div className="blok2">
        <RegistrationForm />
        {/* <img src={elips2} alt="RegPage" className="elips2" /> */}
      </div>
    </div>
  );
};

export default RegistrationPage;
