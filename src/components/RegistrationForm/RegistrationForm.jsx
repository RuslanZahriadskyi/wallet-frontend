import React from 'react';
// import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import FormButtons from '../FormButtons/FormButtons';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import './RegistrationForm.scss';
import '../Register/Register.scss';
import logo from '../../images/logo.png';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

import PasswordStrengthBar from 'react-password-strength-bar';

const operationSchema = Yup.object({
  email: Yup.string()
    .email('Введите корректную почту')
    .required('Это поле является обязательным'),

  password: Yup.string()
    .min(7, 'Пароль должен состоять не менее чем из 7 символов')
    .max(12, 'Пароль должен содержать 12 символов')
    .required('Это поле является обязательным')
    .matches(/^[a-zA-Z0-9]{7,30}$/, 'Ввеедите минимум 7 символов'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Пароли не совпадают')
    .required('Это поле является обязательным'),

  name: Yup.string()
    .min(4, 'Введите свое настоящее имя')
    .max(12, 'Пароль должен содержать до 12 символов')
    .required('Требуется имя'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
    },
    validationSchema: operationSchema,

    onSubmit: ({ email, password, name }, { resetForm }) => {
      const newUser = { email, password, name };

      dispatch(authOperations.register(newUser));
      resetForm({});
    },
  });

  const pass = formik.values.password;

  return (
    <div className="blok2">
      <form className="form" onSubmit={formik.handleSubmit}>
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
            value={formik.values.email}
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
            placeholder="Password"
            type="password"
            name="password"
            inputProps={{ autoComplete: 'true' }}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <PasswordStrengthBar password={pass} />
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
            placeholder="Repeat password"
            type="password"
            name="confirmPassword"
            autoComplete="true"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
        </div>
        <div className="input">
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment color="secondary" position="start">
                  <AccountBoxIcon className="icon" />
                </InputAdornment>
              ),
            }}
            placeholder="Your name"
            className="placeholder"
            type="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </div>

        <FormButtons
          firtsButtonText="REGISTRATION"
          secondButtonText="LOGIN"
          secondLinkButton="/login"
        />
      </form>
    </div>
  );
};

export default RegistrationForm;
