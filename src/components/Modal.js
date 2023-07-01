import React from "react";
import "../App.css";

const Modal = ({ setIsVisible }) => {
  return (
    <>
      <div className="modal-background"></div>
      <div className="modal-box">
        <span>To close the modal window, click button below.</span>
        <button onClick={() => setIsVisible()} className="button">
          CLOSE
        </button>
      </div>
    </>
  );
};

export default Modal;
