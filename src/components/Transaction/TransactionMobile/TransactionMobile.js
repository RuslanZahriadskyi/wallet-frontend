import { useCallback, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Media from 'react-media';
import { createPortal } from 'react-dom';
import {
  operationsAction,
  operationsSelectors,
} from '../../../redux/operations';

import AddButton from '../../ButtonAddTransaction';
import DeleteTransaction from '../../DeleteTransaction';
import FormAddTransactions from '../../ModalAddTransactions/FormAddTransactions';
import Modal from '../../ModalAddTransactions';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import './TransactionMobile.scss';
import '../TransactionDesktop/TransactionDesktop.scss';

const useStyles = makeStyles(theme => ({
  customHoverFocusChange: {
    '&:hover, &.Mui-focusVisible': { backgroundColor: '#5b96f5' },
  },
  customHoverFocusDelete: {
    '&:hover, &.Mui-focusVisible': { backgroundColor: 'red' },
  },
}));

const rootModal = document.getElementById('root-modal');

function TransactionMobile() {
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
          <tbody className="transaction-tbody transaction-tbody-mobile">
            {operations.map(
              ({
                id,
                date,
                type,
                category,
                comments,
                amount,
                balanceAfter,
              }) => (
                <tr
                  className={
                    type === 'outlay'
                      ? ' transaction-row type-wrapper outlay-border'
                      : ' transaction-row type-wrapper income-border'
                  }
                  key={id}
                >
                  <td className="transaction-data">
                    <span className="transaction-title">Date</span>
                    <span>{setCorectDate(date)}</span>
                  </td>

                  <td className="transaction-data">
                    <span className="transaction-title">Type</span>
                    <span>{type === 'outlay' ? '-' : '+'}</span>
                  </td>

                  <td className="transaction-data">
                    <span className="transaction-title">Category</span>
                    <span>{category}</span>
                  </td>

                  <td className="transaction-data">
                    <span className="transaction-title">Comment</span>
                    <span>{comments}</span>
                  </td>

                  <td className="transaction-data">
                    <span className="transaction-title">Summary</span>
                    <span>
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
                    </span>
                  </td>

                  <td className="transaction-data">
                    <span className="transaction-title">Balance</span>
                    <span>
                      {String(balanceAfter.toFixed(2)).replace(
                        /(\d)(?=(\d{3})+([^\d]|$))/g,
                        '$1 ',
                      )}
                    </span>
                  </td>
                  <th scope="col" className="transaction-buttons">
                    <Button
                      fullWidth={true}
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
                    </Button>
                    <div className="button-container">
                      <Button
                        fullWidth={true}
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
                      </Button>
                    </div>
                  </th>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
      <AddButton />

      {modal && (
        <>
          <Media
            queries={{
              small: '(max-width: 549px)',
              medium: '(min-width: 549px)',
            }}
          >
            {matches => (
              <Fragment>
                {matches.small &&
                  createPortal(
                    <>
                      {modal && (
                        <div className="modalMobile">
                          <FormAddTransactions
                            operationDate={operationDate}
                            operationAmount={operationAmount}
                            operationType={operationType}
                            operationId={operationId}
                            operationComments={operationComments}
                            operationCategory={operationCategory}
                          />
                        </div>
                      )}
                    </>,
                    rootModal,
                  )}

                {matches.medium && (
                  <>
                    {modal && (
                      <Modal
                        modalValue={modal}
                        modalAction={modalEditOperation}
                      >
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
                  </>
                )}
              </Fragment>
            )}
          </Media>
        </>
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

export default TransactionMobile;
