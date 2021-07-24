import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';

import './RegisterFormDialog.scss';

import { operationsAction } from '../../redux/operations';
import { operationsSelectors } from '../../redux/operations';

import Modal from '../ModalAddTransactions';

const RegisterFormDialog = () => {
  const dispatch = useDispatch();

  const open = useSelector(operationsSelectors.getRegisterFormDialog);

  const formDialogAction = useCallback(() => {
    dispatch(operationsAction.getRegisterFormDialog());
  }, [dispatch]);

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

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
            <div className="container_btns">
              <button
                onClick={formDialogAction}
                className="btn_register btn_cansel"
              >
                Отмена
              </button>
              <button
                onClick={formDialogAction}
                className="btn_register btn_add"
              >
                Отправить
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default RegisterFormDialog;
