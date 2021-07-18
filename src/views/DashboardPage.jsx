import React, { Fragment, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Media from 'react-media';

// Redux
import { operationsAction, operationsSelectors } from '../redux/operations';
import { statisticsOperations, statisticsSelectors } from '../redux/statistics';

import Header from '../components/Header/Header';
import AddButton from '../components/ButtonAddTransaction';
import FormAddTransactions from '../components/ModalAddTransactions/FormAddTransactions';
import Modal from '../components/ModalAddTransactions';

// Adaptive layout
import MobileMainContainer from '../components/MainContainer/MobileMainContainer';
import DesktopMainContainer from '../components/MainContainer/DesktopMainContainer';

const DashboardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(statisticsOperations.fetchBalance());
  }, [dispatch]);

  const total = useSelector(statisticsSelectors.getBalance);

  const modal = useSelector(operationsSelectors.getModalValue);
  const closeModal = useCallback(
    () => dispatch(operationsAction.closeModal()),
    [dispatch],
  );

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
              {matches.small && <MobileMainContainer total={total} />}

              {matches.medium && <DesktopMainContainer total={total} />}
            </Fragment>
          )}
        </Media>
      </div>

      <AddButton />
      {modal && (
        <Modal modalValue={modal} modalAction={() => closeModal()}>
          <FormAddTransactions />
        </Modal>
      )}
    </div>
  );
};

export default DashboardPage;
