import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { operationsAction } from '../../../redux/operations';
import { getUserName, avatarUser } from '../../../redux/auth/auth-selectors';
import './UserMenu.scss';
import defaultAvatar from './avatar.png';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles(theme => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  input: {
    display: 'none',
  },
}));

const ModalLogout = ({ userAvatar }) => {
  const dispatch = useDispatch();
  const openModal = () => dispatch(operationsAction.logoutModalAction());

  const name = useSelector(getUserName);

  const classes = useStyles();

  const avatarChange = e => dispatch(avatarUser(e.target.files[0]));

  return (
    <div className="header_container">
      <div className="img_container">
        <Avatar
          alt="Remy Sharp"
          src={userAvatar || defaultAvatar}
          className={classes.small}
        />
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
          onChange={avatarChange}
        />
        <label htmlFor="icon-button-file">
          <AddCircleOutlineIcon className="addCircle_icon" />
        </label>
      </div>
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
