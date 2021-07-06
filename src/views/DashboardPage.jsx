import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Statistics from '../components/Statisctics/Statistics';
import Currency from '../components/Currency/Currency';
import Ballance from '../components/Ballance/Ballance';
import ButtonAddTransaction from '../components/ButtonAddTransaction';

const DashboardPage = () => {
  return (
    <div>
      <Header />
      <Main />
      <Statistics />
      <Currency />
      <Ballance />
      <ButtonAddTransaction />
      <h1>Hello DashboardPage</h1>
    </div>
  );
};

export default DashboardPage;
