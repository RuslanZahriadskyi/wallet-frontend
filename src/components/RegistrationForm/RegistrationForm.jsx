import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';


  const styles = {
    form: {
      width: "200",
    }
  };

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");


  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
        case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "name":
        setName(value);
        break;
      default:
         
    }

  };

  const handleSubmit = e => {
    e.preventDefault();


    // dispatch(authOperations.register({ name, email, password }));

    
    // setEmail("");
    // setPassword("");
    // setName("");

  };

  return (
    <div  style={styles.form} >
     <Title text='Wallet' />
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          placeholder="E-mail"
          required
        />
      </label>
      <label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          placeholder="Пароль"
          required
        />
      </label>
      <label>
        <input
          type="password"
          name="repeat"
          onChange={handleChange}
          value={repeat}
          placeholder="Подтвердите пароль"
          required
        />
      </label>
      <label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          placeholder="Ваше имя"
          required
        />
      </label>
      <button type="submit">
        РЕГИСТРАЦИЯ
      </button>
      <NavLink to={routes.login}>ВХОД</NavLink>
      </form>
      </div>
  );
};
export default RegistrationForm;