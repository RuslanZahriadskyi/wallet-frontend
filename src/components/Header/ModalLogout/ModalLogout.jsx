import React from 'react';
import './ModalLogout.scss';
import FormButtons from '../../FormButtons';

const ModalLogout = () => {
  return (
    <div className="container_modal_logout">
      <h2 className="title_modal_logout">Вы уверены, что хотите выйти?</h2>
      <FormButtons
        className="btn_logout_exit"
        firtsButtonText="ВЫЙТИ"
        secondButtonText="ОТМЕНА"
        firstLinkButton="/registration"
      />
    </div>
  );
};

export default ModalLogout;
