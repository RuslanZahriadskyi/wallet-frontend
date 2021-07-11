import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import Main from '../components/MainContainer/MainContainer';
import Statistics from '../components/Statisctics/Statistics';
import Currency from '../components/Currency/Currency';
import Ballance from '../components/Ballance/Ballance';
import AddButton from '../components/ButtonAddTransaction';
import FormAddTransactions from '../components/ModalAddTransactions/FormAddTransactions';
import { operationsSelectors } from '../redux/operations';
import Modal from '../components/ModalAddTransactions';

const DashboardPage = () => {
  const modal = useSelector(operationsSelectors.getModalValue);

  return (
    <div>
      <Header />
      <Main />
      {/* <Statistics /> */}
      <Currency />
      <Ballance />
      <AddButton />
      {modal && (
        <Modal modalValue={modal}>
          <FormAddTransactions />
        </Modal>
      )}
    </div>
  );
};

export default DashboardPage;
