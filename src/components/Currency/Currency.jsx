import React, { useState, useEffect } from 'react';

import Spinner from '../Spinner';
// API
import currencyApi from '../../api/privatbank-api';

import './Currency.scss';

function Currency() {
  const [rates, setRates] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // спиннер
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchRates = async () => {
    //   сотояние загрузки, меняем значение
    setIsLoading(true);

    try {
      const data = await currencyApi.fetchRates();

      console.log(data);

      data.length = 3; //переделать
      setRates([...rates, ...data]);
    } catch (error) {
      throw new Error('Something get wrong. Please, waiting!'); //notification????
    }

    setIsLoading(false);
  };

  return (
    <>
      <div className="currency-div">
        <table className="currency-table">
          <thead>
            <tr className="currency-row">
              <th className="currency-column">Валюта</th>
              <th className="currency-column">Покупка</th>
              <th className="currency-column">Продажа</th>
            </tr>
          </thead>
    
          <tbody className="currency-tbody">
            {rates.map(({ ccy, buy, sale }) => (
              <tr key={buy}>
                <td>{ccy} </td>
                <td>{Number(buy).toFixed(2)}</td>
                <td>{Number(sale).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isLoading && <Spinner />}

      {error && <p>Здесь сделать notification об ошибке</p>}
    </>
  );
}

export default Currency;
