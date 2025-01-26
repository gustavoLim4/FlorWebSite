import React, { useState } from "react";
import axios from "axios";
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

  const submit = async (evento) => {
    evento.preventDefault();

    // Envia os dados para o backend
    try {
      const resposta = await axios.post("http://localhost:5003/api/users/register", {
        email,
        senha,
      });

      // Sucesso no envio dos dados
      console.log("Usuário cadastrado com sucesso :",email, senha );
      alert(resposta.data.message);  // Exibe uma mensagem de sucesso
      setEmail("");  // Limpa o campo de email
      setSenha("");  // Limpa o campo de senha
    } catch (error) {
      // Erro no envio dos dados
      console.error("Erro ao cadastrar usuário", error);
      alert("Erro ao cadastrar o usuário.");
    }
  };

  return (
    <>
      <div
        className={`modal-abrir ${abrir ? "show" : ""}`}
        onClick={fechar}
      ></div>
     
      <div className={`modal-user ${abrir ? "show" : ""}`}>
        <form onSubmit={submit} className="formulario">
          <div className="container-inputsCx">
            <input
              type="email"
              value={email}
              onChange={aoMudarEmail}
              placeholder="Digite seu E-mail:"
              required
            />
            <input
              type="password"
              value={senha}
              onChange={aoMudarSenha}
              placeholder="Digite sua senha:"
              required
            />
            <div className="buttoentrar">
              <button type="submit">Entrar</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserModal;
