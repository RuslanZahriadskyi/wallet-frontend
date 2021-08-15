import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authOperations } from '../../redux/auth';
import { operationsAction } from '../../redux/operations';

import s from './FormButtons.module.scss';

const FormButtons = ({
  firtsButtonText,
  secondButtonText,
  firstLinkButton,
  secondLinkButton,
}) => {
  const dispatch = useDispatch();

  function closeModalLogout() {
    dispatch(operationsAction.logoutModalAction());
  }

  function closeModalChangeTransaction() {
    dispatch(operationsAction.modalEditOperation());
  }

  function closeModalAddTransaction() {
    dispatch(operationsAction.closeModal());
  }

  function closeModalDeleteTransaction() {
    dispatch(operationsAction.modalDeleteOperation());
  }

  return (
    <>
      {!firstLinkButton && !secondLinkButton && (
        <div className={s.buttonsContainer}>
          {firtsButtonText === 'ADD TRANSACTION' && (
            <>
              {' '}
              <button
                type="submit"
                className={[s.buttons, s.buttonAddTransaction].join(' ')}
              >
                {firtsButtonText}
              </button>
              <button
                type="button"
                className={[s.buttons, s.buttonCancel].join(' ')}
                onClick={closeModalAddTransaction}
              >
                {secondButtonText}
              </button>
            </>
          )}
          {firtsButtonText === 'CHANGE TRANSACTION' && (
            <>
              <button
                type="submit"
                className={[s.buttons, s.buttonAddTransaction].join(' ')}
              >
                {firtsButtonText}
              </button>
              <button
                type="button"
                className={[s.buttons, s.buttonCancel].join(' ')}
                onClick={closeModalChangeTransaction}
              >
                {secondButtonText}
              </button>
            </>
          )}
          {firtsButtonText === 'DELETE TRANSACTION' && (
            <>
              <button
                type="submit"
                className={[s.buttons, s.buttonsDelete].join(' ')}
              >
                {firtsButtonText}
              </button>
              <button
                type="button"
                className={[s.buttons, s.buttonCancel].join(' ')}
                onClick={closeModalDeleteTransaction}
              >
                {secondButtonText}
              </button>
            </>
          )}
        </div>
      )}
      {firstLinkButton && (
        <div className={s.buttonsContainer}>
          <NavLink to={firstLinkButton}>
            <button
              type="button"
              className={[s.buttons, s.buttonAddTransaction].join(' ')}
              onClick={() => {
                dispatch(authOperations.logout());
                closeModalLogout();
              }}
            >
              {firtsButtonText}
            </button>
          </NavLink>
          <button
            type="button"
            className={[s.buttons, s.buttonCancel].join(' ')}
            onClick={closeModalLogout}
          >
            {secondButtonText}
          </button>
        </div>
      )}
      {secondLinkButton && (
        <div className={s.buttonsContainer}>
          <button
            type="submit"
            className={[s.buttons, s.buttonAddTransaction].join(' ')}
          >
            {firtsButtonText}
          </button>
          <NavLink to={secondLinkButton}>
            <button
              type="button"
              className={[s.buttons, s.buttonCancel].join(' ')}
            >
              {secondButtonText}
            </button>
          </NavLink>
        </div>
      )}
    </>
  );
};

export default FormButtons;
