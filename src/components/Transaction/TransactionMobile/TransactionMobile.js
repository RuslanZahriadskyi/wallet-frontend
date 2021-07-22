import React from 'react';
import { useSelector } from 'react-redux';
import { operationsSelectors } from '../../../redux/operations';
import AddButton from '../../ButtonAddTransaction';

import './TransactionMobile.scss';
import '../TransactionDesktop/TransactionDesktop.scss';

function TransactionMobile() {
  const operations = useSelector(operationsSelectors.getOperations);
  console.log(operations);

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
                <>
                  <div
                    className={
                      type === 'outlay'
                        ? 'type-wrapper outlay-border'
                        : 'type-wrapper income-border'
                    }
                  >
                    <tr className="transaction-row" key={id}>
                      <td className="transaction-data">
                        <span className="transaction-title">Дата</span>
                        <span>
                          {new Date(date).toLocaleString().slice(0, 10)}
                        </span>
                      </td>

                      <td className="transaction-data">
                        <span className="transaction-title">Тип</span>
                        <span>{type === 'outlay' ? '+' : '-'}</span>
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
                        <span className="transaction-title">Баланс</span>
                        <span>
                          {String(balanceAfter.toFixed(2)).replace(
                            /(\d)(?=(\d{3})+([^\d]|$))/g,
                            '$1 ',
                          )}
                        </span>
                      </td>
                    </tr>
                  </div>
                </>
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
