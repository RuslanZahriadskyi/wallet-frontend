import React from 'react';
import { useSelector } from 'react-redux';
import { statisticsSelectors } from '../../redux/statistics';

import './Ballance.scss';

const Ballance = () => {
  const total = useSelector(statisticsSelectors.getBalance);

  return (
    <div className="ballance-div">
      <h2 className="ballance-title">Your balance</h2>
      <p className="ballance">
        <span className="hryvnia-sign">&#8372;</span>
        {total
          ? String(total.toFixed(2)).replace(
              /(\d)(?=(\d{3})+([^\d]|$))/g,
              '$1 ',
            )
          : 0}
      </p>
    </div>
  );
};

export default Ballance;
