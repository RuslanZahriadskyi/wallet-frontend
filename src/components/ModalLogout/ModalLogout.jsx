import React from 'react';
import { useState } from 'react';
import './ModalLogout.scss';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(theme => ({
  root: {
    // The position fixed scoping doesn't work in IE 11.
    // Disable this demo to preserve the others.
    '@media all and (-ms-high-contrast: none)': {
      display: 'none',
    },
  },
  modal: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: 200,
    height: 300,
    borderRadius: '20px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ModalLogout = ({ name }) => {
  const rootRef = React.useRef(null);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="header_container">
      <span className="user_name_text">Имя {name}</span>
      <button className="btnLogout" type="button" onClick={handleOpen}>
        <ExitToAppIcon />
      </button>
      <div className={classes.root} ref={rootRef}>
        <Modal
          open={open}
          aria-labelledby="server-modal-title"
          aria-describedby="server-modal-description"
          className={classes.modal}
          container={() => rootRef.current}
          onClose={handleClose}
        >
          <div className={classes.paper}>
            <h2 id="server-modal-title">Вы точно хотите выйти?</h2>
            <button className="user_name_text" type="button">
              Да
            </button>
            <button type="button">Нет</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ModalLogout;
