import React from 'react';

import HomeDesktop from '../../Home/HomeDesktop';
import TransactionDesktop from '../../Transaction/TransactionDesktop';
import TransactionMobile from '../../Transaction/TransactionMobile';
import CurrencyTab from '../../Currency';

import './DesktopMainContainer.scss';

const DesktopMainContainer = () => {
  return (
    <div className="dashboard-container">
      <div className="background-blur">
        <div className="bg_filter">
          <div className="dashboard-top-container">
            <HomeDesktop />
            <CurrencyTab />
          </div>

          <TransactionDesktop />
          {/* <TransactionMobile /> */}
        </div>
      </div>
    </div>
  );
};

export default DesktopMainContainer;
