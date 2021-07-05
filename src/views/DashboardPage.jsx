import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Statistics from '../components/Statisctics/Statistics';
import Currency from '../components/Currency/Currency';
import Ballance from '../components/Ballance/Ballance';

const DashboardPage = () => {
  return (
    <div>
      <Header />
      <Main />
      <Statistics />
      <Currency />
      <Ballance />
    </div>
  );
};

export default DashboardPage;
