import React, { useCallback } from 'react';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import s from './formAddTransactions.module.scss';
import SwitchButton from '../Switch';
import DataPicker from '../DataPicker';

import FormButtons from '../../FormButtons/FormButtons';
import Category from '../SelectCategory';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import {
  operationsOperation,
  operationsAction,
} from '../../../redux/operations';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  [theme.breakpoints.down('md')]: {
    textFieldStyle: {
      textAlign: 'center',
    },
  },
  [theme.breakpoints.down('550')]: {
    textFieldStyle: {
      paddingLeft: 20,
      textAlign: 'left',
    },
  },
}));

const operationSchema = Yup.object({
  amount: Yup.number('Enter your amount').required('Amount is required'),
  comments: Yup.string('Enter your comments for operation')
    .min(5, 'Your comments to short')
    .max(30, 'Your comments to long'),
  checked: Yup.bool(),
  category: Yup.string('Choise your category outlay').when('checked', {
    is: true,
    then: Yup.string().required('Category is required'),
  }),
});

const FormAddTransactions = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      type: '',
      category: '',
      amount: '',
      date: new Date(),
      comments: '',
      checked: true,
      selectError: '',
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

    if (values.category) {
      if (values.category.includes('Add')) {
        const newOperation = {
          type,
          category: values.category.slice(5, -1),
          amount: values.amount,
          date: Date.parse(values.date),
          comments: values.comments,
        };
        dispatch(operationsOperation.createOperation(newOperation));
        resetForm();
        return;
      }

      const newOperation = {
        type,
        category: values.category,
        amount: values.amount,
        date: Date.parse(values.date),
        comments: values.comments,
      };
      dispatch(operationsOperation.createOperation(newOperation));

      resetForm();
      return;
    }

    const newOperation = {
      type,
      amount: values.amount,
      date: Date.parse(values.date),
      comments: values.comments,
    };

    dispatch(operationsOperation.createOperation(newOperation));

    resetForm();
  }

  const closeModal = useCallback(
    () => dispatch(operationsAction.closeModal()),
    [dispatch],
  );

  return (
    <div>
      <form className={s.form} onSubmit={formik.handleSubmit}>
        <h2 className={s.formTitle}>Добавить транзакцию</h2>
        <SwitchButton
          name="checked"
          value={formik.values.checked}
          changeSwitch={formik.setFieldValue}
        />
        {formik.values.checked && (
          <Category
            name="category"
            value={formik.values.category}
            onChange={formik.setFieldValue}
            error={formik.touched.category && formik.errors.category}
            errorText={formik.touched.category && formik.errors.category}
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
            inputProps={{ input: classes.textFieldStyle }}
            InputProps={{
              classes: { input: classes.textFieldStyle },
              disableUnderline: true,
            }}
            error={formik.touched.amount && Boolean(formik.errors.amount)}
            helperText={formik.touched.amount && formik.errors.amount}
          />

          <DataPicker
            name="date"
            wrapperClassName={s.dataPicker}
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
          InputProps={{ disableUnderline: true }}
          error={formik.touched.comments && Boolean(formik.errors.comments)}
          helperText={formik.touched.comments && formik.errors.comments}
        />

        <FormButtons
          firtsButtonText="ДОБАВИТЬ"
          secondButtonText="ОТМЕНА"
          canselAction={closeModal}
        />
      </form>
    </div>
  );
};

export default FormAddTransactions;
