import React from 'react';

import { v4 as id } from 'uuid';

import s from './Table.module.scss';

const Table = ({ data, income, outlay }) => {
  return (
    <>
      <div className={s.tableHead}>
        <p className={s.tableFirstCol}>Категория</p>
        <p className={s.tableSecondCol}>Сумма</p>
      </div>

      <table className={s.table}>
        <tbody className={s.tableBody}>
          {data.map(({ category, color, count }) => (
            <tr key={id()}>
              <td className={s.tableData}>
                <span
                  className={s.mark}
                  style={{ backgroundColor: color }}
                ></span>

                {category}
              </td>
              <td className={s.tableData}>{count.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>

        <tfoot className={s.tableFoot}>
          <tr className={s.footRaw}>
            <th className={s.footTitle}>Расходы:</th>
            <td className={s.expenses}>{outlay ? outlay.toFixed(1) : 0}</td>
          </tr>
          <tr className={s.footRow}>
            <th className={s.footTitle}>Доходы:</th>
            <td className={s.incomes}>{income ? income.toFixed(1) : 0}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default Table;
