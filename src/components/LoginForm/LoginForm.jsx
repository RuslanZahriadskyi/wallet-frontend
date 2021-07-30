import React from 'react';
// import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import FormButtons from '../FormButtons/FormButtons';
import * as yup from 'yup';
import { useFormik } from 'formik';

import logo from '../../images/logo.png';

// import elips2 from '../../images/Ellipse2.svg';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

import '../LoginForm/LoginForm.scss';
import '../Login/Login.scss';

export default function LoginForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: yup.object({
      email: yup
        .string()
        .email()
        .required('Пожалуйста, введите свой адрес электронной почты'),

      password: yup
        .string('Пожалуйста, введите пароль')
        .min(7, 'Пароль должен состоять не менее чем из 7 символов')
        .max(12, 'Пароль должен содержать до 12 символов')
        .required('Требуется пароль'),
    }),

    onSubmit: (values, { resetForm }) => {
      const { email, password } = values;
      dispatch(authOperations.login({ email, password }));
      resetForm({});
    },
  });

  return (
    <div className="blokLog2">
      <form
        className="formLog"
        onSubmit={formik.handleSubmit}
        noValidate
        autoComplete="off"
      >
        <div className="logoLogin ">
          <img src={logo} alt="LogoImg" className="logoImgLog" />
          <h1 className="titleWalletLogin">Wallet</h1>
        </div>
        <div className="inputLog ">
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment color="secondary" position="start">
                  <EmailIcon className="icon" />
                </InputAdornment>
              ),
            }}
            className="placeholderLog "
            placeholder="E-mail"
            type="email"
            name="email"
            value={formik.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>
        <div className="inputLog ">
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment color="secondary" position="start">
                  <LockIcon className="icon" />
                </InputAdornment>
              ),
            }}
            className="placeholderLog "
            inputProps={{ autoComplete: 'true' }}
            placeholder="Password"
            type="password"
            name="password"
            value={formik.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </div>

        <FormButtons
          firtsButtonText="LOGIN"
          secondLinkButton="/register"
          secondButtonText="REGISTRATION"
        />
      </form>
    </div>
  );
}
