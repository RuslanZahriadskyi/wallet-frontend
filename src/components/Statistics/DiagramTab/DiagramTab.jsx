import React from 'react';

import Chart from '../Chart';
import Table from '../Table';
import s from './DiagramTab.module.scss';

const data = {
  chart: {
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
  },
  table: [
    {
      color: '#fed057',
      category: 'Основные расходы',
      amount: 1000,
    },
    {
      color: '#ffd8d0',
      category: 'Продукты',
      amount: 1000,
    },
    {
      color: '#fd9498',
      category: 'Машина',
      amount: 1000,
    },
    {
      color: '#c5baff',
      category: 'Забота о себе',
      amount: 1000,
    },
    {
      color: '#6e78e8',
      category: 'Забота о детях',
      amount: 1000,
    },
    {
      color: '#4a56e2',
      category: 'Товары для дома',
      amount: 1000,
    },
    {
      color: '#81e1ff',
      category: 'Образование',
      amount: 1000,
    },
    {
      color: '#24cca7',
      category: 'Досуг',
      amount: 1000,
    },
    {
      color: '#00AD84',
      category: ' Другие расходы',
      amount: 1000,
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

          <Chart data={data.chart} />
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

          <Table data={data.table} />
        </div>
      </div>
    </section>
  );
};

export default DiagramTab;
