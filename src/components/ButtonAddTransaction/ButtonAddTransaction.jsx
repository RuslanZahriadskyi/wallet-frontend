import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import s from './buttonAddTransaction.module.scss';
import { operationsAction } from '../../redux/operations';

import AddIcon from '@material-ui/icons/Add';

export default function ButtonAddTransaction() {
  const dispatch = useDispatch();
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
    </>
  );
}
