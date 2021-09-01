import React, { useState, useEffect } from 'react';

// API
import currencyApi from '../../api/privatbank-api';
import Spinner from '../Spinner';

import './Currency.scss';

function Currency() {
  const [rates, setRates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRates();
    return () => setRates([]); //CDU
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const fetchRates = async () => {
    try {
      setIsLoading(true);

      const data = await currencyApi.fetchRates();
      data.length = 3;
      setRates([...rates, ...data]);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="currency-div">
          <table className="currency-table">
            <thead>
              <tr className="currency-row">
                <th className="currency-column">Currency</th>
                <th className="currency-column">Buy</th>
                <th className="currency-column">Sale</th>
              </tr>
            </thead>

            <tbody className="currency-tbody">
              {rates.map(({ ccy, buy, sale }) => (
                <tr key={buy}>
                  <td>{ccy}</td>
                  <td>{Number(buy).toFixed(2)}</td>
                  <td>{Number(sale).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {error && <p>Something wrong. Please, try later.</p>}
    </>
  );
}

export default Currency;
