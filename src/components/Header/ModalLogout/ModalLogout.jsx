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
      <h2 className="title_modal_logout">Are you sure that you want logout?</h2>
      <FormButtons
        firtsButtonText="LOGOUT"
        secondButtonText="CANCEL"
        firstLinkButton="/login"
        canselAction={logoutModalAction}
      />
    </div>
  );
};

export default ModalLogout;
