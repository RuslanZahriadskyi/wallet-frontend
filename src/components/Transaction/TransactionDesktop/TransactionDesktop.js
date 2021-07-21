import React from 'react';
import { useSelector } from 'react-redux';
import { operationsSelectors } from '../../../redux/operations';
import AddButton from '../../ButtonAddTransaction';
import '../../ButtonAddTransaction/buttonAddTransaction.module.scss';

import './TransactionDesktop.scss';

function TransactionDesktop() {
  const operations = useSelector(operationsSelectors.getOperations);

  return (
    <>
      <div className="transaction-div">
        <table className="transaction-table">
          <thead className="transaction-head">
            <tr>
              <th>Дата</th>
              <th>Тип</th>
              <th>Категория</th>
              <th>Комментарий</th>
              <th>Сумма</th>
              <th>Баланс</th>
            </tr>
          </thead>

          <tbody className="transaction-tbody-desctop">
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
                <tr key={id}>
                  <td>{date}</td>
                  <td>{type}</td>
                  <td>{category}</td>
                  <td>{comments}</td>
                  <td>{amount}</td>
                  <td>{balanceAfter}</td>
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
