import React from 'react';
import s from './Table.module.scss';

const expColors = [
  '#fed057',
  '#ffd8d0',
  '#fd9498',
  '#c5baff',
  '#6e78e8',
  '#4a56e2',
  '#81e1ff',
  '#24cca7',
  '#24cca7',
];

const Table = ({ data }) => {
  return (
    <>
      <div className={s.tableHead}>
        <p className={s.tableFirstCol}>Категория</p>
        <p className={s.tableSecondCol}>Сумма</p>
      </div>

      <table className={s.table}>
        <tbody className={s.tableBody}>
          <tr>
            <td className={s.tableData}>
              <span
                className={s.mark}
                style={{ backgroundColor: expColors[0] }}
              ></span>
              Основные расходы
            </td>
            <td className={s.tableData}>8700.0</td>
          </tr>
          <tr>
            <td className={s.tableData}>
              <span
                className={s.mark}
                style={{ backgroundColor: expColors[1] }}
              ></span>
              Продукты
            </td>
            <td className={s.tableData}>300.0</td>
          </tr>
          <tr>
            <td className={s.tableData}>
              <span
                className={s.mark}
                style={{ backgroundColor: expColors[2] }}
              ></span>
              Машина
            </td>
            <td className={s.tableData}>5000.0</td>
          </tr>
          <tr>
            <td className={s.tableData}>
              <span
                className={s.mark}
                style={{ backgroundColor: expColors[3] }}
              ></span>
              Забота о себе
            </td>
            <td className={s.tableData}>8700.0</td>
          </tr>
          <tr>
            <td className={s.tableData}>
              <span
                className={s.mark}
                style={{ backgroundColor: expColors[4] }}
              ></span>
              Забота о детях
            </td>
            <td className={s.tableData}>300.0</td>
          </tr>
          <tr>
            <td className={s.tableData}>
              <span
                className={s.mark}
                style={{ backgroundColor: expColors[5] }}
              ></span>
              Товары для дома
            </td>
            <td className={s.tableData}>5000.0</td>
          </tr>
          <tr>
            <td className={s.tableData}>
              <span
                className={s.mark}
                style={{ backgroundColor: expColors[6] }}
              ></span>
              Образование
            </td>
            <td className={s.tableData}>8700.0</td>
          </tr>
          <tr>
            <td className={s.tableData}>
              <span
                className={s.mark}
                style={{ backgroundColor: expColors[7] }}
              ></span>
              Досуг
            </td>
            <td className={s.tableData}>300.0</td>
          </tr>
          <tr>
            <td className={s.tableData}>
              <span
                className={s.mark}
                style={{ backgroundColor: expColors[8] }}
              ></span>
              Другие расходы
            </td>
            <td className={s.tableData}>5000.0</td>
          </tr>
        </tbody>

        <tfoot className={s.tableFoot}>
          <tr className={s.footRaw}>
            <th className={s.footTitle}>Расходы:</th>
            <td className={s.expenses}>12000.0</td>
          </tr>
          <tr className={s.footRow}>
            <th className={s.footTitle}>Доходы:</th>
            <td className={s.incomes}>12000.0</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default Table;
