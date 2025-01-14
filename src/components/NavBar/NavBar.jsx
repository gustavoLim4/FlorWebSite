import React from "react";
import "./styles.css"
import imgLogo from "../../img/GREENMIND.png";
import Cart from "../../img/Cart.png";
import User from "../../img/User.png";

const NavBar = () => {
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
        <button>
          <img src={Cart}  id="cart"  alt="carinho de compras" />
        </button>
        <button>
          <img src={User} id="user" alt="carinho de compras" />
        </button>
      </div>
    </main>
  );
};

export default NavBar;
