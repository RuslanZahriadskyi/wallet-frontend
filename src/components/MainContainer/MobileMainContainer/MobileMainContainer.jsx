import React from 'react';

// Components
import HomeMobile from '../../Home/HomeMobile';
import Ballance from '../../Ballance';
import TransactionMobile from '../../Transaction/TransactionMobile';

// Styles
import './MobileMainContainer.scss';

const MobileMainContainer = () => {
  return (
    <>
      <div className="dashboard-container">
        <HomeMobile />
        <Ballance />
        <TransactionMobile />
      </div>
    </>
  );
};

export default MobileMainContainer;
