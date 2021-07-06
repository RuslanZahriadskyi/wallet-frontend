import React, { useState } from 'react';
import Switch from 'react-switch';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import s from './Switch.module.scss';

export default function Switcher() {
  const [checked, setState] = useState(true);

  const handleChange = () => {
    setState(!checked);
  };

  return (
    <div className={s.container}>
      <h3 className={!checked ? s.incomeActive : s.incomeNoActive}>income</h3>
      <label className={s.switchContainer}>
        <Switch
          className={s.switch}
          onChange={handleChange}
          checked={checked}
          uncheckedHandleIcon={
            <AddCircleIcon
              style={{ width: 56, height: 56 }}
              className={s.buttonModalIncome}
            />
          }
          checkedHandleIcon={
            <RemoveCircleIcon
              style={{ width: 56, height: 56 }}
              className={s.buttonModalOutlay}
            />
          }
          height={40}
          width={80}
          handleDiameter={40}
          offHandleColor="#fff"
          onHandleColor="#fff"
          borderRadius={30}
          offColor="#fff"
          onColor="#fff"
        />
      </label>
      <h3 className={checked ? s.outlayActive : s.outlayNoActive}>outlay</h3>
    </div>
  );
}
