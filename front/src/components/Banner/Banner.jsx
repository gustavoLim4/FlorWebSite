import React from "react";
import { useRef } from "react";
import "./styles.css";
import pesquisar from "../../img/pesquisa.png";

const BannerInT = () => {
  const FucosRef = useRef(null);

  const handleFocus = () => {
    if (FucosRef.current) {
      FucosRef.current.focus();
    }
  };

  return (
    <main className="container-input">
      <input
        type="text"
        placeholder="What are you looking for?"
        ref={FucosRef}
        required
        id="product"
      />
      <button className="pesquisar" onClick={handleFocus}>
        <img src={pesquisar} alt="pesquisar" />
      </button>
    </main>
  );
};

export default BannerInT;
