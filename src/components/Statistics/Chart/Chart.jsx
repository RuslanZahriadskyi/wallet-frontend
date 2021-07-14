import React from 'react';
import Media from 'react-media';

import { Doughnut } from 'react-chartjs-2';
import s from './Chart.module.scss';

const options = {
  cutout: '70%',
};

const Chart = ({ data }) => {
  return (
    <Media
      queries={{
        small: '(max-width: 767px)',
        medium: '(min-width: 768px)',
      }}
    >
      {matches => (
        <>
          {matches.small && (
            <Doughnut
              data={data}
              options={options}
              height={280}
              width={280}
              className={s.chart}
            />
          )}
          {matches.medium && (
            <Doughnut
              data={data}
              options={options}
              height={320}
              width={320}
              className={s.chart}
            />
          )}
        </>
      )}
    </Media>
  );
};

export default Chart;
