import React from 'react';
import DatePicker from 'react-datepicker';
import s from './DataPicker.module.scss';
import 'react-datepicker/dist/react-datepicker.css';

export default function DataPicker({ value, changeDate }) {
  return (
    <DatePicker
      className={s.dataPicker}
      selected={value}
      onChange={date => {
        console.log(date);
        return changeDate('date', date);
      }}
      dateFormat="dd.MM.yyyy"
    />
  );
}
