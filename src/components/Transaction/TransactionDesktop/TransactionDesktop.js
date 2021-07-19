import React from 'react';

import './TransactionDesktop.scss';

function TransactionDesktop() {
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

          <tbody className="transaction-tbody">
            {/* здесь отрендерить данные транзакций с бекенда */}
            <tr>
              <td>11.07.2021</td>
              <td>+</td>
              <td>Test</td>
              <td>Test</td>
              <td>300</td>
              <td>12345</td>
            </tr>

            <tr>
              <td>11.07.2021</td>
              <td>+</td>
              <td>Test</td>
              <td>Test</td>
              <td>300</td>
              <td>12345</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TransactionDesktop;
