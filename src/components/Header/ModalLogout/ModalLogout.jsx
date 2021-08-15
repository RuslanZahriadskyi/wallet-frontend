import React from 'react';

import './ModalLogout.scss';
import FormButtons from '../../FormButtons';

const ModalLogout = () => {
  return (
    <div className="container_modal_logout">
      <h2 className="title_modal_logout">Are you sure that you want logout?</h2>
      <FormButtons
        firtsButtonText="LOGOUT"
        secondButtonText="CANCEL"
        firstLinkButton="/login"
      />
    </div>
  );
};

export default ModalLogout;
