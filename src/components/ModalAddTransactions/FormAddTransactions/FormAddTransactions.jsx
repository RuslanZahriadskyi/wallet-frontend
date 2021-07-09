import React from 'react';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import s from './formAddTransactions.module.scss';
import SwitchButton from '../Switch';
import DataPicker from '../DataPicker';
import FormButtons from '../../FormButtons/FormButtons';
import SelectCategory from '../SelectCategory';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const operationSchema = Yup.object({
  category: Yup.string('Choise your category outlay').required(
    'Category is required',
  ),
  amount: Yup.number('Enter your amount').required('Amount is required'),
  date: Yup.number('Enter your date operation').required('Date is required'),
  comments: Yup.string('Enter your comments for operation')
    .min(5, 'Your comments to short')
    .max(30, 'Your comments to long'),
});

const useStyles = makeStyles(theme => ({
  root: {},
  uderline: {
    '&&&:before': {
      borderBottom: 'none',
    },
    '&&:after': {
      borderBottom: 'none',
    },
  },
  input: {
    textAlign: 'center',
  },
}));

const FormAddTransactions = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      type: '',
      category: '',
      amount: '',
      date: new Date(),
      comments: '',
      checked: true,
    },
    validationSchema: operationSchema,
    onSubmit: (values, { resetForm }) => {
      onFormSubmit(values, resetForm);
    },
  });

  function onFormSubmit(values, resetForm) {
    let type = '';
    if (values.checked) {
      type = 'outlay';
    } else {
      type = 'income';
    }
    const newOperation = {
      type,
      category: values.category,
      amount: values.amount,
      date: Date.parse(values.date),
      comments: values.comments,
    };
    console.log(newOperation);
    //  dispatch(newOperation.addOperation(newOperation));
    resetForm();
  }

  return (
    <div>
      <form
        className={[s.form, classes.root].join(' ')}
        onSubmit={formik.handleSubmit}
      >
        <h2 className={s.formTitle}>Добавить транзакцию</h2>
        <SwitchButton
          name="checked"
          value={formik.values.checked}
          changeSwitch={formik.setFieldValue}
        />
        {formik.values.checked && (
          <SelectCategory
            name="category"
            value={formik.values.category}
            changeCategory={formik.setFieldValue}
            error={formik.touched.category && Boolean(formik.errors.category)}
            touched={formik.touched.category && formik.errors.category}
            onBlur={function () {
              formik.setFieldTouched(formik.values.category);
            }}
          />
        )}
        <div className={s.inputContainer}>
          <TextField
            name="amount"
            type="number"
            placeholder="0.00"
            className={s.inputAmount}
            onChange={formik.handleChange}
            value={formik.values.amount}
            inputProps={{ style: { textAlign: 'center' } }}
            InputProps={{
              disableUnderline: true,
            }}
            error={formik.touched.amount && Boolean(formik.errors.amount)}
            helperText={formik.touched.amount && formik.errors.amount}
          />

          <DataPicker
            name="date"
            value={formik.values.date}
            changeDate={formik.setFieldValue}
          />
        </div>

        <TextField
          name="comments"
          type="text"
          placeholder="Коментарий"
          className={s.comentary}
          onChange={formik.handleChange}
          value={formik.values.comments}
          InputProps={{ disableUnderline: true, textalign: 'center' }}
          error={formik.touched.comments && Boolean(formik.errors.comments)}
          helperText={formik.touched.comments && formik.errors.comments}
        />

        <FormButtons firtsButtonText="ДОБАВИТЬ" secondButtonText="ОТМЕНА" />
      </form>
    </div>
  );
};

export default FormAddTransactions;
