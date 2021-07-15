import React from 'react';
// import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import FormButtons from '../FormButtons/FormButtons';
import * as yup from 'yup';
import { useFormik } from 'formik';

import logo from '../../images/logo.png';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

import '../RegistrationForm/RegistrationForm.scss';

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
        .min(7, 'Пароль должен состоять не менее чем из 7 символов')
        .max(26, 'Пароль должен содержать до 12 символов')
        .required('Требуется пароль'),
    }),

    //   onSubmit: ({ email, password, name }) => {
    //     dispatch(authOperations.register({ name, email, password }));
    //   },
    // });

    onSubmit: (values, { resetForm }) => {
      const { email, password } = values;
      dispatch(authOperations.login({ email, password }));
      resetForm({});
    },
  });

  return (
    <div className="container">
      <form
        className="form"
        onSubmit={formik.handleSubmit}
        noValidate
        autoComplete="off"
      >
        <div className="logo">
          <img src={logo} alt="LogoImg" className="logoImg" />
          <h1 className="title">Wallet</h1>
        </div>
        <div className="input">
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment color="secondary" position="start">
                  <EmailIcon className="icon" />
                </InputAdornment>
              ),
            }}
            className="placeholder"
            placeholder="E-mail"
            type="email"
            name="email"
            value={formik.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>
        <div className="input">
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment color="secondary" position="start">
                  <LockIcon className="icon" />
                </InputAdornment>
              ),
            }}
            className="placeholder"
            placeholder="Пароль"
            type="password"
            name="password"
            value={formik.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </div>

        {/* <button type="submit">ВХОД</button>
        <NavLink to="/register">РЕГИСТРАЦИЯ</NavLink> */}
        <FormButtons
          firtsButtonText="ВХОД"
          secondLinkButton="/register"
          secondButtonText="РЕГИСТРАЦИЯ"
        />
      </form>
    </div>
  );
}
