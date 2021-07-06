import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  form,
  buttonsContainer,
  buttons,
  buttonAddTransaction,
  buttonCancel,
  formTitle,
  buttonIcon,
} from './formAddTransactions.module.scss';
import SwitchButton from '../Switch';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '540px',
    maxHeight: '540px',
  },
}));

const FormAddTransactions = () => {
  return (
    <div>
      <form className={form}>
        <h2 className={formTitle}>Добавить транзакцию</h2>

        <SwitchButton />

        <div className={buttonsContainer}>
          {/* <Button className={[buttons, buttonAddTransaction].join(' ')}>
            Добавить
          </Button>
          <Button className={[buttons, buttonCancel].join(' ')}>Отмена</Button> */}
          <button className={[buttons, buttonAddTransaction].join(' ')}>
            Добавить
          </button>
          <button className={[buttons, buttonCancel].join(' ')}>Отмена</button>
        </div>
      </form>
    </div>
  );
};

export default FormAddTransactions;
