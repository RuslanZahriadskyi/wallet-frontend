import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import * as yup from 'yup';
import { useFormik } from 'formik';

import s from './RegistrationForm.module.scss';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
    },

    validation: yup.object({
      username: yup.string().required('Пожалуйста, введите имя пользователя'),
      email: yup
        .string()
        .email()
        .required('Пожалуйста, введите свой адрес электронной почты'),
      confirmEmail: yup
        .string('Пожалуйста, введите свой адрес электронной почты')
        .email('Пожалуйста,ведите действующий адрес электронной почты')
        .required('Требуется электронная почта')
        .oneOf([yup.ref('email'), null], 'Электронные письма должны совпадать'),
      password: yup
        .string('Пожалуйста, введите пароль')
        .min(7, 'Пароль должен состоять не менее чем из 7 символов')
        .max(26, 'Пароль должен содержать до 12 символов')
        .required('Требуется пароль'),

      confirmPassword: yup
        .string('Пожалуйста, повторите пароль')
        .required('Требуется пароль')
        .oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),

      name: yup
        .string('Пожалуйста введите свое имя')
        .min(3, 'Пароль должен состоять не менее чем из 3 символов')
        .max(12, 'Пароль должен содержать до 12 символов')
        .required('Требуется имя'),
    }),

    //   onSubmit: ({ email, password, name }) => {
    //     dispatch(authOperations.register({ name, email, password }));
    //   },
    // });
    onSubmit: (values, { resetForm }) => {
      const { email, password, name } = values;
      dispatch(authOperations.register({ email, password, name }));
      resetForm({});
    },
  });

  return (
    <div className={s.container}>
      {/* <Title text='Wallet' /> */}
      <form className={s.form} onSubmit={formik.handleSubmit}>
        <h1 className={s.title}>Wallet</h1>
        <label>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formik.email}
            required
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            value={formik.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            required
          />
        </label>
        <label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Подтвердите пароль"
            value={formik.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            required
          />
        </label>
        <label>
          <input
            type="name"
            name="name"
            placeholder="Ваше имя"
            value={formik.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            required
          />
        </label>
        <button type="submit">РЕГИСТРАЦИЯ</button>
        <NavLink to="/login">ВХОД</NavLink>
      </form>
    </div>
  );
}
