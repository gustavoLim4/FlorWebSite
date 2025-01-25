// src/components/NavBar.js
import React, { useState } from "react";
import "./styles.css";
import imgLogo from "../../img/GREENMIND.png";
import Cart from "../../img/Cart.png";
import User from "../../img/User.png";
import ModalCart from "../Cart/ModalCart"
import UserModal from "../UserCadas/inputs/UserModal";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [ModalAbrir, setModalAbrir] = useState(false); 


  const AbrirModal = () => {
    setModalAbrir(true);
  };

  const FecharModal = () => {
    setModalAbrir(false);
  };



  return (
    <main className="navbar-container">
      <div className="container-links">
        <img src={imgLogo} alt="imagem logo" />
        <ul>
          <a href="#home">Home</a>
          <a href="#product">Products</a>
          <a href="#contact">Contacts</a>
        </ul>
      </div>
      <div className="container-buttons">
        <button onClick={openModal}>
          <img src={Cart} id="cart" alt="carrinho de compras" />
        </button>
        <button onClick={AbrirModal}>
          <img src={User} id="user" alt="usuário" />
        </button>
      </div>
      <ModalCart isOpen={isModalOpen} onClose={closeModal} />
      <UserModal abrir={ModalAbrir} fechar={FecharModal}/>
    </main>
  );
};

export default NavBar;
