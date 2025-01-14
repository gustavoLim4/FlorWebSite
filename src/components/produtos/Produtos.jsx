import React from "react";
import "./styles.css";
import { FaArrowRightLong } from "react-icons/fa6";
import planta3 from "../../img/planta1.png";
import planta2 from "../../img/planta2.png";
import planta1 from "../../img/planta3.png";
import CardsProdutos from "./card-produtos/Cards-Produtos";

const Produtos = ({ name, preco, imagem }) => {
  return (
    <main className="card-container">
      <div className="plantas-container">
        <h1>Best Selling Plants</h1>
        <p>Easiest way to healthy life by buying your favorite plants </p>
        <div className="button-see">
          <a href="#ir">
            See more <FaArrowRightLong />
          </a>
        </div>
      </div>
      <div className="card-produtos">
        <CardsProdutos
          imagem={planta1}
          name="Natural Plants"
          preco="P 1,400.00"
        />
        <CardsProdutos
          imagem={planta2}
          name="Artificial Plants"
          preco="P 900.00"
        />
        <CardsProdutos
          imagem={planta3}
          name="Artificial Plants"
          preco="P 3,500.00"
        />
      </div>
    </main>
  );
};

export default Produtos;
