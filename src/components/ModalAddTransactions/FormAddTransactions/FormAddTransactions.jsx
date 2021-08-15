import React, { useCallback } from 'react';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { isEmpty } from 'lodash';

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

const FormAddTransactions = props => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      type: props.operationType || '',
      category: props.operationCategory || '',
      amount:
        props.operationType === 'outlay'
          ? Number(props.operationAmount?.toString().slice(1))
          : props.operationAmount || '',
      date: props.operationDate ? new Date(props.operationDate) : new Date(),
      comments: props.operationComments || '',
      checked: isChecked(props),
      selectError: '',
      operationId: props.operationId || '',
    },
    validationSchema: operationSchema,

    onSubmit: (values, { resetForm }) => {
      onFormSubmit(values, resetForm);
    },
  });

  function isChecked(props) {
    if (isEmpty(props)) {
      return true;
    }

    if (props?.operationType === 'outlay') {
      return true;
    } else {
      return false;
    }
  }

  const closeModal = useCallback(
    () => dispatch(operationsAction.closeModal()),
    [dispatch],
  );

  const closeChangeOperationModal = useCallback(
    () => dispatch(operationsAction.modalEditOperation()),
    [dispatch],
  );

  function onFormSubmit(values, resetForm) {
    let type = '';
    if (values.checked) {
      type = 'outlay';
    } else {
      type = 'income';
    }

    const dateSeconds = values.date.getMilliseconds();
    const dateMinutes = values.date.getMinutes();

    values.date.setMilliseconds(dateSeconds);
    values.date.setMinutes(dateMinutes);

    let newOperation = {
      type,
      amount: values.amount,
      date: Date.parse(values.date),
      comments: values.comments,
    };

    if (!isEmpty(props)) {
      if (values.category) {
        newOperation = { ...newOperation, category: values.category };

        dispatch(
          operationsOperation.changeOperation(newOperation, values.operationId),
        );

        resetForm();
        closeChangeOperationModal();
        return;
      }

      dispatch(
        operationsOperation.changeOperation(newOperation, values.operationId),
      );

      resetForm();
      closeChangeOperationModal();
      return;
    }

    if (values.category) {
      if (values.category.includes('Add')) {
        newOperation = {
          ...newOperation,
          category: values.category.slice(5, -1),
        };

        return;
      }

      newOperation = { ...newOperation, category: values.category };
    }

    dispatch(operationsOperation.createOperation(newOperation));

    resetForm();
    closeModal();
  }

  return (
    <div>
      <form className={s.form} onSubmit={formik.handleSubmit}>
        <h2 className={s.formTitle}>Add transaction</h2>
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
          placeholder="Transaction comment"
          className={s.comentary}
          onChange={formik.handleChange}
          value={formik.values.comments}
          InputProps={{ disableUnderline: true }}
          error={formik.touched.comments && Boolean(formik.errors.comments)}
          helperText={formik.touched.comments && formik.errors.comments}
        />

        {isEmpty(props) ? (
          <FormButtons
            firtsButtonText="ADD TRANSACTION"
            secondButtonText="CANCEL"
          />
        ) : (
          <FormButtons
            firtsButtonText="CHANGE TRANSACTION"
            secondButtonText="CANCEL"
          />
        )}
      </form>
    </div>
  );
};

export default FormAddTransactions;
