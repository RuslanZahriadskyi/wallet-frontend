import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { operationsAction } from '../../../redux/operations';
import { authSelectors } from '../../../redux/auth';
import './UserMenu.scss';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const ModalLogout = () => {
  const dispatch = useDispatch();
  const openModal = () => dispatch(operationsAction.logoutModalAction());

  const name = useSelector(authSelectors.getUserName);

  return (
    <div className="header_container">
      <span className="user_name_text">{name}</span>

      <button
        className="btnLogout"
        name="addOperation"
        type="button"
        onClick={openModal}
      >
        <ExitToAppIcon className="icon_btn_logout" />
        <span className="title_exit">Выйти</span>
      </button>
    </div>
  );
};

export default ModalLogout;
