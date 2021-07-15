import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { v4 as id } from 'uuid';

import Chart from '../Chart';
import Table from '../Table';
import s from './DiagramTab.module.scss';
import Spinner from '../../Spinner';

import date from './monthAndYear';
import {
  statisticsOperations,
  statisticsSelectors,
} from '../../../redux/statistics';

const data = ['15000', '2000', '3000', '4500', '10000', '2000', '3000', '4000'];

function DiagramTab() {
  const [month, setMonth] = useState(date.currentMonth);

  const handleChangeMonth = ({ target: { value } }) => {
    setMonth(value);
  };

  const [year, setYear] = useState(date.currentYear);

  const handleChangeYear = ({ target: { value } }) => {
    setYear(value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(statisticsOperations.fetchBalance());
    dispatch(statisticsOperations.fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    console.log(month, year);
    dispatch(statisticsOperations.fetchStatistics(month, year));
  }, [dispatch, month, year]);

  const statisticsData = useSelector(statisticsSelectors.getItems);
  const categories = useSelector(statisticsSelectors.getCategories);
  const total = useSelector(statisticsSelectors.getBalance);
  const income = useSelector(statisticsSelectors.getIncome);
  const outlay = useSelector(statisticsSelectors.getOutlay);

  const backgroundColor = categories
    ? categories.map(({ color }) => color)
    : [];

  const chartData = {
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 0,
      },
    ],
  };

  return (
    <section className={s.section}>
      <h2 className={s.sectionTitle}>Статистика</h2>

      {data && categories ? (
        <div className={s.wrapper}>
          <div className={s.visualPart}>
            <div className={s.chartTotal}>₴{total ? total.toFixed(2) : 0}</div>

            <Chart data={chartData} />
          </div>

          <div className={s.tablePart}>
            <div className={s.filter}>
              <select
                value={month}
                id="month"
                className={s.dropdown}
                onChange={handleChangeMonth}
              >
                {date.months.map(month => (
                  <option value={month} key={id()}>
                    {month}
                  </option>
                ))}
              </select>

              <select
                value={year}
                id="year"
                className={s.dropdown}
                onChange={handleChangeYear}
              >
                {date.years.map(year => (
                  <option value={year} key={id()}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <Table
              data={data}
              categories={categories}
              income={income}
              outlay={outlay}
            />
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </section>
  );
}

export default DiagramTab;

// // Для фильтрации при условии добавления поля  в массив категорий
// const newObjectsArray = statisticsData.map(({count, name}) => {
//   let obj = {};

//   obj.category = categories.find(({category}) => category === query).value;
//   obj.color = categories.find(({category}) => category === query).color;
//   obj.count = count;

//   return obj;
// })

// const data = newObjectsArray.map(({count}) => count);
// const dataCategories = newObjectsArray.map(({category}) => category);
// const dataBgc = newObjectsArray.map(({color}) => color);
