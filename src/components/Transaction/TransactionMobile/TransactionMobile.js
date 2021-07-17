import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  operationsOperation,
  operationsSelectors,
} from '../../../redux/operations';

import './TransactionMobile.scss';

function TransactionMobile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operationsOperation.getOperations());
  }, [dispatch]);

  const operations = useSelector(operationsSelectors.getOperations);

  return (
    <>
      <div className="transaction-div">
        <table className="transaction-table">
          <tbody>
            {/* здесь отрендерить данные транзакций с бекенда */}
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
                <tr className="transaction-row" key={id}>
                  <td className="transaction-data">
                    <span className="transaction-title">Дата</span>
                    <span>{date}</span>
                  </td>

                  <td className="transaction-data">
                    <span className="transaction-title">Тип</span>
                    <span>{type}</span>
                  </td>

                  <td className="transaction-data">
                    <span className="transaction-title">Категория</span>
                    <span>{category}</span>
                  </td>

                  <td className="transaction-data">
                    <span className="transaction-title">Комментарий</span>
                    <span>{comments}</span>
                  </td>

                  <td className="transaction-data">
                    <span className="transaction-title">Сумма</span>
                    <span>{amount}</span>
                  </td>

                  <td className="transaction-data">
                    <span className="transaction-title">Баланс</span>
                    <span>{balanceAfter}</span>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TransactionMobile;
