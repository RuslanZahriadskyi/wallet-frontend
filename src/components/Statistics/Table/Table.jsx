import React from 'react';

import { v4 as id } from 'uuid';

import s from './Table.module.scss';

const Table = ({ data, income, outlay }) => {
  return (
    <>
      <div className={s.container}>
        <table className={s.table}>
          <thead className={s.tableHead}>
            <tr>
              <th className={s.tableFirstCol}>Category</th>
              <th className={s.tableSecondCol}>Sum</th>
            </tr>
          </thead>
          <tbody className={s.tableBody}>
            {data.map(({ name, color, count }) => (
              <tr key={id()}>
                <td className={s.tableData}>
                  <span
                    className={s.mark}
                    style={{ backgroundColor: color }}
                  ></span>

                  {name}
                </td>
                <td className={s.tableData}>{count.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>

          <tfoot className={s.tableFoot}>
            <tr className={s.footRaw}>
              <th className={s.footTitle}>Outlay:</th>
              <td className={s.expenses}>{outlay ? outlay.toFixed(1) : 0}</td>
            </tr>
            <tr className={s.footRow}>
              <th className={s.footTitle}>Income:</th>
              <td className={s.incomes}>{income ? income.toFixed(1) : 0}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* <p className={s.warning}>Пожалуйста, добавьте операции</p> */}
    </>
  );
};

export default Table;
