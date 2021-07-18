import React from 'react';

import HomeDesktop from '../../Home/HomeDesktop';
import TransactionDesktop from '../../Transaction/TransactionDesktop';
import TransactionMobile from '../../Transaction/TransactionMobile';
import CurrencyTab from '../../Currency/CurrencyTab';

import './DesktopMainContainer.scss';

const DesktopMainContainer = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-top-container">
        <HomeDesktop />
        <CurrencyTab />
      </div>

      <TransactionDesktop />
      {/* <TransactionMobile /> */}
    </div>
  );
};

export default DesktopMainContainer;
