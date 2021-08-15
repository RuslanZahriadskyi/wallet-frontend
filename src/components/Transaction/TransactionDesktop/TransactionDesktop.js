import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  operationsAction,
  operationsSelectors,
} from '../../../redux/operations';
import { makeStyles } from '@material-ui/core/styles';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

import AddButton from '../../ButtonAddTransaction';
import Modal from '../../ModalAddTransactions';
import DeleteTransaction from '../../DeleteTransaction';
import FormAddTransactions from '../../ModalAddTransactions/FormAddTransactions';

import '../../ButtonAddTransaction/buttonAddTransaction.module.scss';
import './TransactionDesktop.scss';

const useStyles = makeStyles(theme => ({
  customHoverFocusChange: {
    '&:hover, &.Mui-focusVisible': { backgroundColor: '#5b96f5' },
  },
  customHoverFocusDelete: {
    '&:hover, &.Mui-focusVisible': { backgroundColor: 'red' },
  },
}));

function TransactionDesktop() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [operationDate, setOperationDate] = useState(null);
  const [operationType, setOperationType] = useState(null);
  const [operationId, setOperationId] = useState(null);
  const [operationAmount, setOperationAmount] = useState(null);
  const [operationComments, setOperationComments] = useState(null);
  const [operationCategory, setOperationCategory] = useState(null);

  function setOperationInfo(
    id,
    date,
    amount,
    category,
    comments,
    type,
    clickedType,
  ) {
    if (clickedType === 'edit') {
      setOperationDate(date);
      setOperationType(type);
      setOperationId(id);
      setOperationAmount(amount);
      setOperationComments(comments);
      setOperationCategory(category);

      return;
    } else {
      setOperationDate(date);
      setOperationType(type);
      setOperationId(id);
      setOperationAmount(amount);
    }
  }

  const modalEditOperation = useCallback(
    () => dispatch(operationsAction.modalEditOperation()),
    [dispatch],
  );

  const modalDeleteOperation = useCallback(
    () => dispatch(operationsAction.modalDeleteOperation()),
    [dispatch],
  );

  const modal = useSelector(operationsSelectors.getOperationModalValue);
  const operations = useSelector(operationsSelectors.getSortedOperations);
  const deleteOperationModal = useSelector(
    operationsSelectors.getModalDeleteOperationValue,
  );

  const setCorectDate = date => {
    let correctDate = new Date(date).toLocaleDateString();

    if (correctDate.length < 10) {
      correctDate = '0' + correctDate;
    }

    return correctDate;
  };

  return (
    <>
      <div className="transaction-div">
        <table className="transaction-table">
          <thead className="transaction-head">
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Category</th>
              <th>Comment</th>
              <th>Sum</th>
              <th>Balance</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody className="transaction-tbody-desctop">
            {operations.map(
              ({
                date,
                type,
                category,
                comments,
                amount,
                balanceAfter,
                id,
              }) => (
                <tr key={uuidv4()}>
                  <td>{setCorectDate(date)}</td>
                  <td>{type === 'outlay' ? '-' : '+'}</td>
                  <td>{category}</td>
                  <td>{comments}</td>
                  <td>
                    {type === 'outlay' ? (
                      <span className="outlay-color">
                        {String(amount.toFixed(2)).replace(
                          /(\d)(?=(\d{3})+([^\d]|$))/g,
                          '$1 ',
                        )}
                      </span>
                    ) : (
                      <span className="income-color">
                        {String(amount.toFixed(2)).replace(
                          /(\d)(?=(\d{3})+([^\d]|$))/g,
                          '$1 ',
                        )}
                      </span>
                    )}
                  </td>
                  <td>
                    {String(balanceAfter.toFixed(2)).replace(
                      /(\d)(?=(\d{3})+([^\d]|$))/g,
                      '$1 ',
                    )}
                  </td>
                  <td className="transaction-edit-desktop">
                    <IconButton
                      className={classes.customHoverFocusChange}
                      onClick={() => {
                        modalEditOperation();
                        setOperationInfo(
                          id,
                          date,
                          amount,
                          category,
                          comments,
                          type,
                          'edit',
                        );
                      }}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      className={classes.customHoverFocusDelete}
                      onClick={() => {
                        modalDeleteOperation();
                        setOperationInfo(
                          id,
                          date,
                          amount,
                          category,
                          comments,
                          type,
                          'delete',
                        );
                      }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
      <AddButton />

      {modal && (
        <Modal modalValue={modal} modalAction={modalEditOperation}>
          <FormAddTransactions
            operationDate={operationDate}
            operationAmount={operationAmount}
            operationType={operationType}
            operationId={operationId}
            operationComments={operationComments}
            operationCategory={operationCategory}
          />
        </Modal>
      )}

      {deleteOperationModal && (
        <DeleteTransaction
          deleteOperationDate={operationDate}
          deleteOperationAmount={operationAmount}
          deleteOperationType={operationType}
          deleteOperationId={operationId}
        />
      )}
    </>
  );
}

export default TransactionDesktop;
