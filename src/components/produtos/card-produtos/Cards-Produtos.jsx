import React from "react";
import "../styles.css";

const CardsProdutos = ({ imagem, name, preco }) => {
  return (
    <main className="card-plantas">
      <a href="#ir">
        <img src={imagem} alt={name} />
        <h3>{name}</h3>
        <p>{preco}</p>
      </a>
    </main>
  );
};

export default CardsProdutos;
