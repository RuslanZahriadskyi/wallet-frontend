import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  statisticsOperations,
  statisticsSelectors,
} from '../../redux/statistics';

import './Ballance.scss';

const Ballance = ({ total }) => {
  console.log(total);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(statisticsOperations.fetchBalance());
  // }, [dispatch]);

  // const total = useSelector(statisticsSelectors.getBalance);

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
