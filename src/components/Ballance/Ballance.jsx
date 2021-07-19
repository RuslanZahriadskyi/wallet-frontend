import React from 'react';
import { useSelector } from 'react-redux';
import { statisticsSelectors } from '../../redux/statistics';

import './Ballance.scss';

const Ballance = () => {
  const total = useSelector(statisticsSelectors.getBalance);

  return (
    <div className="ballance-div">
      <h2 className="ballance-title">Ваш баланс</h2>
      <p className="ballance">
        <span className="hryvnia-sign">&#8372;</span>
        {total ? total.toFixed(2) : 0}
      </p>
    </div>
  );
};

export default Ballance;
