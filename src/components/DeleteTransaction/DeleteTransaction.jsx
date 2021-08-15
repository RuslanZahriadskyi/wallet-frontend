import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  operationsAction,
  operationsOperation,
  operationsSelectors,
} from '../../redux/operations';

import Modal from '../ModalAddTransactions';
import FormButtons from '../FormButtons/FormButtons';

import './DeleteTransaction.scss';

export default function DeleteTransaction({
  deleteOperationDate,
  deleteOperationAmount,
  deleteOperationType,
  deleteOperationId,
}) {
  const dispatch = useDispatch();

  const deleteOperationModal = useSelector(
    operationsSelectors.getModalDeleteOperationValue,
  );

  const modalDeleteOperation = useCallback(
    () => dispatch(operationsAction.modalDeleteOperation()),
    [dispatch],
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (deleteOperationType === 'outlay') {
      const operationAmount = Number(deleteOperationAmount.toString().slice(1));
      dispatch(
        operationsOperation.deleteOperation({
          deleteOperationId,
          deleteOperationDate,
          operationAmount,
          deleteOperationType,
        }),
      );

      modalDeleteOperation();
      return;
    }

    dispatch(
      operationsOperation.deleteOperation({
        deleteOperationId,
        deleteOperationDate,
        deleteOperationAmount,
        deleteOperationType,
      }),
    );

    modalDeleteOperation();
    return;
  }

  return (
    <>
      <Modal
        modalValue={deleteOperationModal}
        modalAction={() => modalDeleteOperation()}
      >
        <form className="modal_delete_operation" onSubmit={handleSubmit}>
          <h2 className="title_modal_delete_operation">
            Are you sure you want to delete this operation, you will not be able
            to restore it?
          </h2>
          <FormButtons
            firtsButtonText="DELETE TRANSACTION"
            secondButtonText="CANCEL"
          />
        </form>
      </Modal>
    </>
  );
}
