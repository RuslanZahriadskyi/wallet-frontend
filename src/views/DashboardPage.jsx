import React, { Fragment } from 'react';
import Media from 'react-media';
import { useSelector } from 'react-redux';

// Components
import Header from '../components/Header/Header';
import AddButton from '../components/ButtonAddTransaction';
import FormAddTransactions from '../components/ModalAddTransactions/FormAddTransactions';
import Modal from '../components/ModalAddTransactions';

// Adaptive layout
import MobileMainContainer from '../components/MainContainer/MobileMainContainer';
import DesktopMainContainer from '../components/MainContainer/DesktopMainContainer';

// Redux
import { operationsSelectors } from '../redux/operations';

const DashboardPage = () => {
  const modal = useSelector(operationsSelectors.getModalValue);

  return (
    <div>
      <Header />

      <div>
        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 768px)',
          }}
        >
          {matches => (
            <Fragment>
              {matches.small && <MobileMainContainer />}

              {matches.medium && <DesktopMainContainer />}
            </Fragment>
          )}
        </Media>
      </div>

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
