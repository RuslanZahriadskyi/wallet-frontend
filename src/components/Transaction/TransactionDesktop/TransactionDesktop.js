import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { operationsSelectors } from '../../../redux/operations';
import AddButton from '../../ButtonAddTransaction';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import '../../ButtonAddTransaction/buttonAddTransaction.module.scss';
import './TransactionDesktop.scss';

function TransactionDesktop() {
  const operations = useSelector(operationsSelectors.getSortedOperations);

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
              <th>
                <EditIcon fontSize="small" />
              </th>
              <th>
                <DeleteIcon fontSize="small" />
              </th>
            </tr>
          </thead>

          <tbody className="transaction-tbody-desctop">
            {operations.map(
              ({ date, type, category, comments, amount, balanceAfter }) => (
                <tr key={uuidv4()}>
                  <td>{new Date(date).toLocaleString().slice(0, 10)}</td>
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

export default TransactionDesktop;
