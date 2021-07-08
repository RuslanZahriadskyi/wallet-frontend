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
      username: yup.string().required('Please Enter a username'),
      email: yup.string().email().required('Please Enter your Email'),
      confirmEmail: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required')
        .oneOf([yup.ref('email'), null], 'Emails must match'),
      password: yup
        .string('Enter your password')
        .min(6, 'Password must be at least 6 characters')
        .max(12, 'Password must be up to 12 characters')
        .required('Please enter your password'),

      confirmPassword: yup
        .string('Enter your password')
        .required('Please enter your password')
        .oneOf([yup.ref('password'), null], 'Passwords must match'),

      name: yup
        .string('Enter your name')
        .min(3, 'Password must be at least 3 characters')
        .max(12, 'Password must be up to 12 characters')
        .required('Please Enter your name'),
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
