import React, { useState } from "react";
import { loginUsuario } from "../../../service/api";
import "../styles.css";

const UserModal = ({ abrirCadastrado, fecharCadastrado }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const submit = async (evento) => {
    evento.preventDefault();

    try {
      // Envia os dados para a função de login
      const resposta = await loginUsuario({ email, senha });
      alert(resposta.data.message); // Exibe a mensagem de sucesso
      setEmail("");
      setSenha("");
    } catch (error) {
      console.error("E-mail ou senha incorreto !", error);
      alert("E-mail ou senha incorreto !");
    }
  };

  return (
    <>
      <div
        className={`modal-abrir ${abrirCadastrado ? "show" : ""}`}
        onClick={fecharCadastrado}
      ></div>
      <div className={`modal-user ${abrirCadastrado ? "show" : ""}`}>
        <form onSubmit={submit} className="formulario">
          <div className="container-inputsCx">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              required
            />
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
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
