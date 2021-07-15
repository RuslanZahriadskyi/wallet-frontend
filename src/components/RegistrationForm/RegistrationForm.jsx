import React from 'react';
// import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import FormButtons from '../FormButtons/FormButtons';
import * as yup from 'yup';
import { useFormik } from 'formik';

import './RegistrationForm.scss';
import logo from '../../images/logo.png';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

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
    //   onSubmit: ({ email, password, name }) => {
    //     dispatch(authOperations.register({ email, password,  name }));
    //     formik.resetForm();
    //   },
    // });
    onSubmit: (values, { resetForm }) => {
      const { email, password, name } = values;
      dispatch(authOperations.register({ email, password, name }));
      resetForm({});
    },
  });

  return (
    <div className="containerRegisterForm">
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
            placeholder="Подтвердите пароль"
            type="confirmPassword"
            name="confirmPassword"
            value={formik.confirmPassword}
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
            placeholder="Ваше имя"
            className="placeholder"
            type="name"
            name="name"
            value={formik.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </div>
        {/* // <button type="submit">РЕГИСТРАЦИЯ</button>
        // <NavLink to="/login">ВХОД</NavLink> */}
        <FormButtons
          firtsButtonText="РЕГИСТРАЦИЯ"
          secondButtonText="ВХОД"
          secondLinkButton="/login"
        />
      </form>
    </div>
  );
}

//       <form className={s.form} onSubmit={formik.handleSubmit}>
//          <div className={s.logo}>
//          <img src={logo} alt="LogoImg" className={s.logoImg} />
//           <h1 className={s.title}>Wallet</h1>
//           </div>
//         <label className={s.label}>
//           <input
//             className={s.input}
//             type="email"
//             name="email"
//             placeholder="E-mail"
//             value={formik.email}
//             required
//             onChange={formik.handleChange}
//             // error={formik.touched.email && Boolean(formik.errors.email)}
//           />
//         </label>
//         <label className={s.label}>
//           <input
//             className={s.input}
//             type="password"
//             name="password"
//             placeholder="Пароль"
//             value={formik.password}
//             onChange={formik.handleChange}
//             // error={formik.touched.password && Boolean(formik.errors.password)}
//             required
//           />
//         </label>
//         <label className={s.label}>
//           <input
//             className={s.input}
//             type="password"
//             name="confirmPassword"
//             placeholder="Подтвердите пароль"
//             value={formik.confirmPassword}
//             onChange={formik.handleChange}
//             // error={
//             //   formik.touched.confirmPassword &&
//             //   Boolean(formik.errors.confirmPassword)
//             // }
//             required
//           />
//         </label>
//         <label className={s.label}>
//           <input
//             className={s.input}
//             type="name"
//             name="name"
//             placeholder="Ваше имя"
//             value={formik.name}
//             onChange={formik.handleChange}
//             // error={formik.touched.name && Boolean(formik.errors.name)}
//             required
//           />
//         </label>
//         <FormButtons
//           firtsButtonText="РЕГИСТРАЦИЯ"
//           // firstLinkButton="/login"?????
//           secondButtonText="ВХОД"
//           secondLinkButton="/login"
//        />

//       </form>
//     </div>
//   );
// }
