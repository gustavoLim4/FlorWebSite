// src/components/Modal.js
import React from "react";
import "./Modal.css";

const ModalCart = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`modal-overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
      ></div>

      <div className={`modal ${isOpen ? "show" : ""}`}>
        <button className="adicionarPR">adicionar produtos</button>
      </div>
    </>
  );
};

export default ModalCart;
