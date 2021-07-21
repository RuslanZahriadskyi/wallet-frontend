import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import s from './buttonAddTransaction.module.scss';
import { operationsAction, operationsSelectors } from '../../redux/operations';

import AddIcon from '@material-ui/icons/Add';

import Modal from '../ModalAddTransactions';
import FormAddTransactions from '../ModalAddTransactions/FormAddTransactions';

export default function ButtonAddTransaction() {
  const dispatch = useDispatch();

  const modal = useSelector(operationsSelectors.getModalValue);

  const closeModal = useCallback(
    () => dispatch(operationsAction.closeModal()),
    [dispatch],
  );

  const openModal = useCallback(
    () => dispatch(operationsAction.openModal()),
    [dispatch],
  );

  return (
    <>
      <button
        className={s.button}
        type="button"
        name="addOperation"
        onClick={openModal}
      >
        <AddIcon className={s.buttonIcon} fontSize="large" />
      </button>

      {modal && (
        <Modal modalValue={modal} modalAction={() => closeModal()}>
          <FormAddTransactions />
        </Modal>
      )}
    </>
  );
}
