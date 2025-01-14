import React from "react";
import "./styles.css";
import categoria1 from "../../img/CategoriasIMG1.png";
import categoria2 from "../../img/CategoriasIMG2.png";
import categoria3 from "../../img/CategoriasIMG3.png";
import ImgCate from "./imgcategorias/ImgCate";
import { FaArrowRightLong } from "react-icons/fa6";

const Categorias = () => {
  return (
    <main className="caixa-cate">
      <h1>Categories</h1>
      <h4>Find what you are looking for</h4>
      <div className="ImgCate-container">
        <div className="ImgCate1">
          <ImgCate img={categoria1} description="Natural Plants" />
        </div>
        <div className="ImgCate2">
          <ImgCate img={categoria2} description="Plant Accessories" />
        </div>
        <div className="ImgCate3">
          <ImgCate img={categoria3} description="Artificial Plants" />
        </div>
      </div>
      <div className="button-explore">
        <a href="#ir">
          Explore <FaArrowRightLong />
        </a>
      </div>
    </main>
  );
};

export default Categorias;
