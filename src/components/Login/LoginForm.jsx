import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import * as yup from 'yup';
import { useFormik } from 'formik';

export default function LoginForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validation: yup.object({
      username: yup.string().required('Пожалуйста, введите имя пользователя'),
      email: yup
        .string()
        .email()
        .required('Пожалуйста, введите свой адрес электронной почты'),

      password: yup
        .string('Пожалуйста, введите пароль')
        .min(6, 'Пароль должен состоять не менее чем из 6 символов')
        .max(12, 'Пароль должен содержать до 12 символов')
        .required('Требуется пароль'),
    }),

    //   onSubmit: ({ email, password, name }) => {
    //     dispatch(authOperations.register({ name, email, password }));
    //   },
    // });
    onSubmit: values => {
      const { email, password } = values;
      dispatch(authOperations.login({ email, password }));
    },
  });

  return (
    <div>
      {/* <Title text='Wallet' /> */}
      <form onSubmit={formik.handleSubmit}>
        <h1>Wallet</h1>
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

        <button type="submit">РЕГИСТРАЦИЯ</button>
        <NavLink to="/login">ВХОД</NavLink>
      </form>
    </div>
  );
}
