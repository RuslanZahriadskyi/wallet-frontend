import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@material-ui/core/TextField';

import './RegisterFormDialog.scss';

import { operationsAction, operationsSelectors } from '../../redux/operations';
import { authOperations } from '../../redux/auth';

import Modal from '../ModalAddTransactions';

const RegisterFormDialog = () => {
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const open = useSelector(operationsSelectors.getRegisterFormDialog);

  const formDialogAction = useCallback(() => {
    dispatch(operationsAction.getRegisterFormDialog());
  }, [dispatch]);

  const handleChange = e => {
    const { email } = e.currentTarget.value;
    setEmail(email);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const resendUser = { email };
    dispatch(authOperations.register(resendUser));
    setEmail('');
  };

  return (
    <>
      <button
        className="btn_register_form"
        type="button"
        onClick={formDialogAction}
      >
        Не пришел e-mail?
      </button>

      {open && (
        <Modal modalValue={open} modalAction={formDialogAction}>
          <div className="container_modal_register_form">
            <h2 className="title_modal_register_form">
              Пожалуйста, введите еще раз свою почту
            </h2>
            <form
              onSubmit={() => {
                handleSubmit(email);
              }}
            >
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                onChange={handleChange}
                fullWidth
                type="email"
                name="email"
                value={email}
              />
              <div className="container_btns">
                <button
                  onClick={formDialogAction}
                  type="button"
                  className="btn_register btn_cansel"
                >
                  Отмена
                </button>
                <button
                  onClick={formDialogAction}
                  type="submit"
                  className="btn_register btn_add"
                >
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default RegisterFormDialog;
