import React from 'react';
import { useSelector } from 'react-redux';
import { operationsSelectors } from '../../../redux/operations';
import AddButton from '../../ButtonAddTransaction';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import './TransactionMobile.scss';
import '../TransactionDesktop/TransactionDesktop.scss';

function TransactionMobile() {
  const operations = useSelector(operationsSelectors.getSortedOperations);

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
                    <span>{new Date(date).toLocaleString().slice(0, 10)}</span>
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
                  <th scope="col" className="transaction-th">
                    <EditIcon fontSize="small" />
                  </th>
                  <th scope="col" className="transaction-th">
                    <DeleteIcon fontSize="small" />
                  </th>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
      <AddButton />
    </>
  );
}

export default TransactionMobile;
