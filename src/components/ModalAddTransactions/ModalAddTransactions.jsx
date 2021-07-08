import React, { useCallback } from 'react';
import { createPortal } from 'react-dom';

import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import { operationsAction } from '../../redux/operations';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '20px',
  },
}));

const rootModal = document.getElementById('root-modal');

const ModalAddTransactions = ({ children, modalValue }) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const closeModal = useCallback(
    () => dispatch(operationsAction.closeModal()),
    [dispatch],
  );

  return createPortal(
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modalValue}
        onClose={() => closeModal()}
        closeAfterTransition
      >
        <div className={classes.paper}>{children}</div>
      </Modal>
    </div>,
    rootModal,
  );
};

export default ModalAddTransactions;
