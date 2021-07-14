import React from 'react';

import HomeDesktop from '../../Home/HomeDesktop';
import TransactionDesktop from '../../Transaction/TransactionDesktop';
import CurrencyDesktop from '../../Currency/CurrencyDesktop';

import './DesktopMainContainer.scss';

const DesktopMainContainer = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-top-container">
        <HomeDesktop />
        <CurrencyDesktop />
      </div>

      <TransactionDesktop />
    </div>
  );
};

export default DesktopMainContainer;
