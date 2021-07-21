import React from 'react';
import { useSelector } from 'react-redux';
import { operationsSelectors } from '../../../redux/operations';
import AddButton from '../../ButtonAddTransaction';

import './TransactionMobile.scss';
import '../TransactionDesktop/TransactionDesktop.scss';

function TransactionMobile() {
  const operations = useSelector(operationsSelectors.getOperations);

  return (
    <>
      <div className="transaction-div">
        <table className="transaction-table">
          <tbody className="transaction-tbody transaction-tbody-mobile">
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
      <AddButton />
    </>
  );
}

export default TransactionMobile;
