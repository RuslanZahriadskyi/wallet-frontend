import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  operationsOperation,
  operationsSelectors,
} from '../../../redux/operations';

import './TransactionMobile.scss';

function TransactionMobile() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(operationsOperation.getOperations());
  // }, [dispatch]);

  // const operations = useSelector(operationsSelectors.getOperations);
  // console.log(operations);

  return (
    <>
      <div className="transaction-div">
        <table className="transaction-table">
          <tbody>
            {/* здесь отрендерить данные транзакций с бекенда */}
            <tr>
              <td>Дата</td>
              <td className="transaction-data">11.07.2021</td>
            </tr>

            <tr>
              <td>Тип</td>
              <td className="transaction-data">+</td>
            </tr>

            <tr>
              <td>Категория</td>
              <td className="transaction-data">Test</td>
            </tr>

            <tr>
              <td>Комментарий</td>
              <td className="transaction-data">Test</td>
            </tr>

            <tr>
              <td>Сумма</td>
              <td className="transaction-data">300</td>
            </tr>

            <tr>
              <td>Баланс</td>
              <td className="transaction-data">12345</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TransactionMobile;
