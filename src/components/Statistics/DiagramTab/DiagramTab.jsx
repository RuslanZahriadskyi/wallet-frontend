import React from 'react';

import Chart from '../Chart';
import Table from '../Table';
import s from './DiagramTab.module.scss';

const data = {
  datasets: [
    {
      data: [10, 15, 3, 6, 4, 20, 2, 8, 17],
      backgroundColor: [
        '#fed057',
        '#ffd8d0',
        '#fd9498',
        '#c5baff',
        '#6e78e8',
        '#4a56e2',
        '#81e1ff',
        '#24cca7',
        '#00AD84',
      ],
      borderWidth: 0,
    },
  ],
};

const DiagramTab = () => {
  return (
    <section className={s.section}>
      <h2 className={s.sectionTitle}>Статистика</h2>

      <div className={s.wrapper}>
        <div className={s.visualPart}>
          <div className={s.chartTotal}>$24000.0</div>

          <Chart data={data} />
        </div>

        <div className={s.tablePart}>
          <div className={s.filter}>
            <button type="button" className={s.button}>
              Месяц
            </button>
            <button type="button" className={s.button}>
              Год
            </button>
          </div>

          <Table data={data} />
        </div>
      </div>
    </section>
  );
};

export default DiagramTab;
