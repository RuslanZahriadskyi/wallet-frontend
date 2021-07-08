// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import s from './DataPicker.module.scss';

// import 'react-datepicker/dist/react-datepicker.css';

// // CSS Modules, react-datepicker-cssmodules.css
// // import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// export default function DataPicker({ value, onChange }) {
//   const [startDate, setStartDate] = useState(value);

//   const handleChange = newDate => {
//     onChange(newDate);
//     setStartDate(newDate);
//   };

//   return (
//     <DatePicker
//       className={s.dataPicker}
//       selected={startDate}
//       onChange={handleChange}
//       dateFormat="dd.MM.yyyy"
//     />
//   );
// }

import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import s from './DataPicker.module.scss';

export default function DataPicker({ ...props }) {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      {...field}
      {...props}
      className={s.dataPicker}
      selected={(field.value && new Date(field.value)) || null}
      onChange={val => {
        setFieldValue(field.name, val);
      }}
      dateFormat="dd.MM.yyyy"
    />
  );
}
