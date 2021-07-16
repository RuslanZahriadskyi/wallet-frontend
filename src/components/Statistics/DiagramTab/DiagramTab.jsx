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

import {
  categoriesOperation,
  categoriesSelectors,
} from '../../../redux/category';

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
    dispatch(categoriesOperation.getCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(statisticsOperations.fetchStatistics(month, year));
  }, [dispatch, month, year]);

  const statisticsData = useSelector(statisticsSelectors.getItems);
  const categories = useSelector(categoriesSelectors.getAllUserCategory);
  const total = useSelector(statisticsSelectors.getBalance);
  const income = useSelector(statisticsSelectors.getIncome);
  const outlay = useSelector(statisticsSelectors.getOutlay);

  const newDataArray =
    statisticsData && categories
      ? statisticsData.map(({ count, name }) => {
          let obj = {};

          obj.category = categories.find(({ value }) => value === name).value;
          obj.color = categories.find(({ value }) => value === name).color;
          obj.count = count;

          return obj;
        })
      : null;

  const data = newDataArray.map(({ count }) => count);
  const backgroundColor = newDataArray.map(({ color }) => color);

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

      {statisticsData && categories && total && income && outlay ? (
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

            <Table data={newDataArray} income={income} outlay={outlay} />
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </section>
  );
}

export default DiagramTab;
