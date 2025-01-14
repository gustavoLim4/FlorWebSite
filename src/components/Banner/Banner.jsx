import React from "react";
import { useRef } from "react";
import "./styles.css";
import pesquisar from "../../img/pesquisa.png";

const BannerInT = () => {
    
  const FucosRef = useRef(null)

  const handleFocus = () => {
    if (FucosRef.current) {
      FucosRef.current.focus();
    }
  }

  return (
    <div className="container-input">
      <input
        type="text"
        id="input-ctx"
        placeholder="What are you looking for?"
        ref={FucosRef}
        required
      />
      <button className="pesquisar"  onClick={handleFocus}>
        <img src={pesquisar} alt="pesquisar" />
      </button>
    </div>
  );
};

export default BannerInT;
