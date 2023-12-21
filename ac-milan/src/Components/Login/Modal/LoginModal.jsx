import React from 'react';
import "./style.scss";

const LoginModal = (props) => {
  const {
    isOpen, closeModal, children
  } = props;

  if (!isOpen) {
    return null;
  };

  return (
    <div className="modal">
      <span className="wrapper-modal" onClick={() => closeModal()} />
      <div className="content-modal">
        <div>
          {children && children}
        </div>
        <button className="close" onClick={() => closeModal()}>x</button>
      </div>
    </div>
  )
};

export default LoginModal;
