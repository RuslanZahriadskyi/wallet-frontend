import { useCallback, Fragment } from 'react';
import Media from 'react-media';
import { createPortal } from 'react-dom';

import { useDispatch, useSelector } from 'react-redux';

import s from './buttonAddTransaction.module.scss';
import { operationsAction, operationsSelectors } from '../../redux/operations';

import AddIcon from '@material-ui/icons/Add';

import Modal from '../ModalAddTransactions';
import FormAddTransactions from '../ModalAddTransactions/FormAddTransactions';

const rootModal = document.getElementById('root-modal');

export default function ButtonAddTransaction() {
  const dispatch = useDispatch();

  const modal = useSelector(operationsSelectors.getModalValue);

  const closeModal = useCallback(
    () => dispatch(operationsAction.closeModal()),
    [dispatch],
  );

  const openModal = useCallback(
    () => dispatch(operationsAction.openModal()),
    [dispatch],
  );

  return (
    <>
      <button
        className={s.button}
        type="button"
        name="addOperation"
        onClick={openModal}
      >
        <AddIcon className={s.buttonIcon} fontSize="large" />
      </button>

      <>
        <Media
          queries={{
            small: '(max-width: 549px)',
            medium: '(min-width: 550px)',
          }}
        >
          {matches => (
            <Fragment>
              {matches.small &&
                createPortal(
                  <>
                    {modal && (
                      <div className={s.modalMobile}>
                        <FormAddTransactions />
                      </div>
                    )}
                  </>,
                  rootModal,
                )}

              {matches.medium && (
                <>
                  {modal && (
                    <Modal modalValue={modal} modalAction={() => closeModal()}>
                      <FormAddTransactions />
                    </Modal>
                  )}
                </>
              )}
            </Fragment>
          )}
        </Media>
      </>
    </>
  );
}

// {/* <Media
//   queries={{
//     small: '(max-width: 549px)',
//     medium: '(min-width: 550px)',
//   }}
// >
//   {matches => (
//     <Fragment>
//       {matches.small &&
//         createPortal(
//           <>
//             {modal && (
//               <div className={s.modalMobile}>
//                 <FormAddTransactions />
//               </div>
//             )}
//           </>,
//           rootModal,
//         )}

//       {matches.medium && (
//         <>
//           {modal && (
//             <Modal modalValue={modal} modalAction={() => closeModal()}>
//               <FormAddTransactions />
//             </Modal>
//           )}
//         </>
//       )}
//     </Fragment>
//   )}
// </Media>; */}

// {
//   modal && (
//     <Modal modalValue={modal} modalAction={() => closeModal()}>
//       <FormAddTransactions />
//     </Modal>
//   );
// }
