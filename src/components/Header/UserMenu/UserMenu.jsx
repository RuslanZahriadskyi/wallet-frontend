import React from 'react';
import Media from 'react-media';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import './UserMenu.scss';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { operationsAction } from '../../../redux/operations';

const ModalLogout = ({ name }) => {
  const dispatch = useDispatch();
  const openModal = useCallback(
    () => dispatch(operationsAction.openModal()),
    [dispatch],
  );

  return (
    <div className="header_container">
      <span className="user_name_text">Имя {name}</span>

      <Media queries={{ small: { maxWidth: 767 } }}>
        {matches =>
          matches.small ? (
            <button className="btnLogout" type="button" onClick={openModal}>
              <ExitToAppIcon />
            </button>
          ) : (
            <button
              className="btnLogout vertical"
              type="button"
              onClick={openModal}
            >
              <ExitToAppIcon />
              <span className="title_exit">Выйти</span>
            </button>
          )
        }
      </Media>
    </div>
  );
};

export default ModalLogout;
