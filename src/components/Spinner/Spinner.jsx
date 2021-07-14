import React from 'react';
import Loader from 'react-loader-spinner';
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className="loader">
      <Loader type="Circles" color="#4a56e2" height={100} width={100} />
    </div>
  );
};

export default Spinner;
