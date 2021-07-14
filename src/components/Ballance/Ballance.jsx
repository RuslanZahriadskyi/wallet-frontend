import React from 'react';

import './Ballance.scss';

const Ballance = () => {
  return (
    <div className="ballance-div">
      <h2 className="ballance-title">Ваш баланс</h2>
      <p className="ballance">
        <span className="hryvnia-sign">&#8372;</span> 232313154
      </p>
    </div>
  );
};

export default Ballance;
