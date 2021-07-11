import React from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { operationsAction } from '../../../redux/operations';
import { authSelectors } from '../../../redux/auth';
import './UserMenu.scss';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const ModalLogout = ({ name }) => {
  const dispatch = useDispatch();
  const openModal = useCallback(
    () => dispatch(operationsAction.openModal()),
    [dispatch],
  );

  // const name = useSelector(authSelectors.getUserName);

  return (
    <div className="header_container">
      <span className="user_name_text">Имя {name}</span>

      <button className="btnLogout " type="button" onClick={openModal}>
        <ExitToAppIcon />
        <span className="title_exit">Выйти</span>
      </button>
    </div>
  );
};

export default ModalLogout;
