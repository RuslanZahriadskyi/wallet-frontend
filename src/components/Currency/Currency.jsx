import React, { useState, useEffect } from 'react';

// Components
import IconsPanel from '../IconsPanel';

// API
import currencyApi from '../../api/privatbank-api';

import './Currency.scss';

function Currency() {
  const [rates, setRates] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // спиннер
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRates();
  }, []);

  const fetchRates = () => {
    //   сотояние загрузки, меняем значение
    setIsLoading(true);

    // Отправляем get-запрос
    currencyApi
      .fetchRates()
      .then(response => {
        console.log(response);

        if (!response) {
          throw new Error('Something get wrong. Please, waiting!'); //notification????
        }
        response.length = 3;
        setRates([...rates, ...response]);
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false)); //оставливаем спиннер
  };

  return (
    <>
      <div className="dashboard-container">
        <IconsPanel />

        <div className="currency-div">
          <table className="currency-table">
            <thead>
              <tr className="currency-row">
                <th className="currency-column">Валюта</th>
                <th className="currency-column">Покупка</th>
                <th className="currency-column">Продажа</th>
              </tr>
            </thead>

            <tbody>
              {rates.map(({ ccy, buy, sale }) => (
                <tr key={buy}>
                  <td>{ccy} </td>
                  <td>{buy}</td>
                  <td>{sale}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Currency;
