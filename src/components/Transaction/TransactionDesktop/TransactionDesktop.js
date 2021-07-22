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
