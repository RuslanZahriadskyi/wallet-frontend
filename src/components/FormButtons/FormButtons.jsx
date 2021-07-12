import { isValid } from 'date-fns';
import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './FormButtons.module.scss';

const FormButtons = ({
  firtsButtonText,
  secondButtonText,
  firstLinkButton,
  secondLinkButton,
  canselAction,
}) => {
  return (
    <>
      {!firstLinkButton && !secondLinkButton && (
        <div className={s.buttonsContainer}>
          <button
            type="submit"
            className={[s.buttons, s.buttonAddTransaction].join(' ')}
          >
            {firtsButtonText}
          </button>
          <button
            type="button"
            className={[s.buttons, s.buttonCancel].join(' ')}
            onClick={canselAction}
            // disabled={!isValid()}
          >
            {secondButtonText}
          </button>
        </div>
      )}
      {firstLinkButton && (
        <div className={s.buttonsContainer}>
          <NavLink to={firstLinkButton}>
            <button
              type="button"
              className={[s.buttons, s.buttonAddTransaction].join(' ')}
            >
              {firtsButtonText}
            </button>
          </NavLink>
          <button
            type="button"
            className={[s.buttons, s.buttonCancel].join(' ')}
            onClick={canselAction}
          >
            {secondButtonText}
          </button>
        </div>
      )}
      {secondLinkButton && (
        <div className={s.buttonsContainer}>
          <button
            type="button"
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
