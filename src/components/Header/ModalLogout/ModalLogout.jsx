import React from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { operationsAction } from '../../../redux/operations';

import './ModalLogout.scss';
import FormButtons from '../../FormButtons';

const ModalLogout = () => {
  const dispatch = useDispatch();
  const logoutModalAction = useCallback(
    () => dispatch(operationsAction.logoutModalAction()),
    [dispatch],
  );
  return (
    <div className="container_modal_logout">
      <h2 className="title_modal_logout">Вы уверены, что хотите выйти?</h2>
      <FormButtons
        canselAction={logoutModalAction}
        className="btn_logout_exit"
        firtsButtonText="ВЫЙТИ"
        secondButtonText="ОТМЕНА"
        firstLinkButton="/registration"
      />
    </div>
  );
};

export default ModalLogout;
