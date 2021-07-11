import React, { useCallback } from 'react';
import { createPortal } from 'react-dom';
import './modalAddTransactions.scss';
import { Modal } from '@material-ui/core';

import { useDispatch } from 'react-redux';

import { operationsAction } from '../../redux/operations';

const rootModal = document.getElementById('root-modal');

const ModalAddTransactions = ({ modalValue, modalAction, children }) => {
  const dispatch = useDispatch();

  const closeModal = useCallback(
    () => dispatch(operationsAction.closeModal()),
    [dispatch],
  );

  return createPortal(
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={modalValue}
        onClose={() => closeModal()}
        closeAfterTransition
      >
        <div className="paper">{children}</div>
      </Modal>
    </div>,
    rootModal,
  );
};

export default ModalAddTransactions;
