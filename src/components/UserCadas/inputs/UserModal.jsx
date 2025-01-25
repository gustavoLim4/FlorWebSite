import React, { useState } from "react";
import "../styles.css";

const UserModal = ({ abrir, fechar }) => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  const aoMudarEmail = (evento) => {
    setEmail(evento.target.value); 
  };

  const aoMudarSenha = (evento) => {
    setSenha(evento.target.value);
  };


  const submit = (evento) => {
    evento.preventDefault();
    console.log("Cliente cadastrado", { email, senha }); 
  };

  return (
    <>
      <div
        className={`modal-abrir ${abrir ? "show" : ""}`}
        onClick={fechar}
      ></div>

      <div className={`modal-user ${abrir ? "show" : ""}`}>
        <form onSubmit={submit}>
          <input
            type="email"
            value={email} 
            onChange={aoMudarEmail} 
            placeholder="Digite seu E-mail:"
          />

          <input
            type="password"
            value={senha} 
            onChange={aoMudarSenha} 
            placeholder="Digite sua senha:"
          />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </>
  );
};

export default UserModal;
