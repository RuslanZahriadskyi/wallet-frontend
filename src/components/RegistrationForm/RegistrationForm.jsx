import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import * as yup from 'yup';
import { useFormik } from 'formik';

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
        .min(6, 'Пароль должен состоять не менее чем из 6 символов')
        .max(12, 'Пароль должен содержать до 12 символов')
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

    onSubmit: ({ email, password, name }) => {
      dispatch(authOperations.register({ name, email, password }));
    },
  });

  return (
    <div>
      {/* <Title text='Wallet' /> */}
      <form onSubmit={formik.handleSubmit}>
        <label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.email}
            placeholder="E-mail"
            required
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.password}
            placeholder="Пароль"
            required
          />
        </label>
        <label>
          <input
            type="password"
            name="confirmPassword"
            onChange={formik.handleChange}
            value={formik.confirmPassword}
            placeholder="Подтвердите пароль"
            required
          />
        </label>
        <label>
          <input
            type="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.name}
            placeholder="Ваше имя"
            required
          />
        </label>
        <button type="submit">РЕГИСТРАЦИЯ</button>
        <NavLink to="/login">ВХОД</NavLink>
      </form>
    </div>
  );
}
