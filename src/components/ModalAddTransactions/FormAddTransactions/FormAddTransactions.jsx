import React from 'react';

import * as yup from 'yup';
import { useFormik, Formik } from 'formik';

import s from './formAddTransactions.module.scss';
import SwitchButton from '../Switch';
import DataPicker from '../DataPicker';
import FormButtons from '../../FormButtons';
import SelectCategory from '../SelectCategory';

const validationSchema = yup.object({
  type: yup.string('Choise your operation type').required('Type is required'),
  category: yup
    .string('Choise your category outlay')
    .required('Category is required'),
  amount: yup.number('Enter your amount').required('Amount is required'),
  date: yup.number('Enter your date operation').required('Date is required'),
  comments: yup.string('Enter your comments for operation'),
});

const FormAddTransactions = () => {
  const formik = useFormik({
    initialValues: {
      type: '',
      category: '',
      amount: '',
      date: new Date(),
      comments: '',
      checked: true,
    },
    // validationSchema: validationSchema,
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
      <form className={s.form} onSubmit={formik.handleSubmit}>
        <h2 className={s.formTitle}>Добавить транзакцию</h2>
        <SwitchButton
          name="checked"
          value={formik.values.checked}
          changeSwitch={formik.setFieldValue}
        />
        {formik.values.checked && (
          <SelectCategory
            name="category"
            value={formik.values.checked}
            changeCategory={formik.setFieldValue}
          />
        )}
        <div className={s.inputContainer}>
          <input
            type="number"
            placeholder="0.00"
            className={s.inputAmount}
            id="amount"
            onChange={formik.handleChange}
          />
          <DataPicker
            name="date"
            value={formik.values.date}
            changeDate={formik.setFieldValue}
          />
        </div>

        <input
          type="text"
          placeholder="Коментарий"
          className={s.comentary}
          id="comments"
          onChange={formik.handleChange}
          value={formik.values.comments}
        />

        <FormButtons firtsButtonText="ДОБАВИТЬ" secondButtonText="ОТМЕНА" />
      </form>
    </div>
  );
};

export default FormAddTransactions;
