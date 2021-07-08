import React from 'react';

import s from './FormButtons.module.scss';

const FormButtons = ({ firtsButtonText, secondButtonText }) => {
  return (
    <div className={s.buttonsContainer}>
      <button className={[s.buttons, s.buttonAddTransaction].join(' ')}>
        {firtsButtonText}
      </button>
      <button className={[s.buttons, s.buttonCancel].join(' ')}>
        {secondButtonText}
      </button>
    </div>
  );
};

export default FormButtons;
