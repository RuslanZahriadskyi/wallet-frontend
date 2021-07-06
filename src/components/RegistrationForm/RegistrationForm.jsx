import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import * as yup from 'yup';
import { Formik } from 'formik';

const schema = yup.object({
  username: yup.string().required('Please Enter a username'),
  email: yup.string().email().required('Please Enter your Email'),
  confirmEmail: yup
    .string()
    .email()
    .required()
    .oneOf([yup.ref('email'), null], 'Emails must match'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(12, 'Password must be up to 12 characters')
    .required('Please Enter your password'),

  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [repeat, setRepeat] = useState("");
  const [name, setName] = useState('');

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  //  const handleChangeRepeat = e => {
  //   setRepeat(e.target.value)
  // }

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }));

    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{
          email: '',
          password: '',
          name: '',
        }}
      ></Formik>
      {/* <Title text='Wallet' /> */}
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="email"
            name="email"
            onChange={handleChangeEmail}
            value={email}
            placeholder="E-mail"
            required
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            onChange={handleChangePassword}
            value={password}
            placeholder="Пароль"
            required
          />
        </label>
        {/* <label>
        <input
          type="password"
          name="repeat"
          onChange={handleChangePassword}
          value={repeat}
          placeholder="Подтвердите пароль"
          required
        />
      </label> */}
        <label>
          <input
            type="name"
            name="name"
            onChange={handleChangeName}
            value={name}
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
