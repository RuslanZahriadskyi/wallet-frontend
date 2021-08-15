import { createPortal } from 'react-dom';
import './modalAddTransactions.scss';
import { Modal } from '@material-ui/core';

const rootModal = document.getElementById('root-modal');

const ModalAddTransactions = ({ modalValue, modalAction, children }) => {
  return createPortal(
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={modalValue}
        onClose={modalAction}
        closeAfterTransition
      >
        <div className="paper">{children}</div>
      </Modal>
    </div>,
    rootModal,
  );
};

export default ModalAddTransactions;
