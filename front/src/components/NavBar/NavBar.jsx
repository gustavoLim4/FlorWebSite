// src/components/NavBar.js
import React, { useState } from "react";
import "./styles.css";
import imgLogo from "../../img/GREENMIND.png";
import Cart from "../../img/Cart.png";
import ModalCart from "../Cart/ModalCart";
import UserModal from "../Users/inputs/UserModal";
import CadastroModal from "../Users/inputs/CadastratModal";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };







  const [AbrirCadastrado, FecharModalCadastrado] = useState(false);

  const AbrirModal1 = () => {
    FecharModalCadastrado(true);
  };

  const FecharModal = () => {
    FecharModalCadastrado(false);
  };




  const [AbrirCadastrar, FecharModalCadastrar] = useState(false);

  const AbrirModal2 = () => {
    FecharModalCadastrar(true);
  };

  const FecharModal2 = () => {
    FecharModalCadastrar(false);
  };

  return (
    <main className="navbar-container" id="home">
      <div className="container-links">
        <img src={imgLogo} alt="imagem logo" />
        <ul>
          <a href="#home">Home</a>
          <a href="#product">Products</a>
          <a href="#aboutus">About us</a>
        </ul>
      </div>
      <div className="container-buttons">
        <button onClick={openModal}>
          <img src={Cart} id="cart" alt="carrinho de compras" />
        </button>
        <div className="login">
          <button onClick={AbrirModal1}>Entrar </button>
          <button onClick={AbrirModal2}>Cadastrar</button>
        </div>
      </div>
      <ModalCart isOpen={isModalOpen} onClose={closeModal} />
      <UserModal abrirCadastrado={AbrirCadastrado} fecharCadastrado={FecharModal} />
      <CadastroModal abrirCadastrar={AbrirCadastrar} fecharCadastrar={FecharModal2}/>
    </main>
  );
};

export default NavBar;
