import React, { useState } from "react";
import axios from "axios";
import "../styles.css";

const UserModal = ({ abrirCadastrado, fecharCadastrado }) => {
  const [email_cadastros, setEmail_cadastros] = useState("");
  const [senha_cadastros, setSenha_cadastros] = useState("");

  const aoMudarEmail = (evento) => {
    setEmail_cadastros(evento.target.value);
  };

  const aoMudarSenha = (evento) => {
    setSenha_cadastros(evento.target.value);
  };

  const submit = async (evento) => {
    evento.preventDefault();

    // Envia os dados para o backend
    try {
      const resposta = await axios.post(
        "http://localhost:5003/api/usuarios/login", // Alterado para a rota de login
        {
          email: email_cadastros,
          senha: senha_cadastros,
        }
      );

      // Sucesso no envio dos dados
      if (resposta.data.success) {
        console.log(`Usuário logado com sucesso: ${email_cadastros}`);
        alert(resposta.data.message); // Exibe uma mensagem de sucesso
        setEmail_cadastros(""); // Limpa os campos
        setSenha_cadastros("");
      } else {
        alert("Credenciais inválidas. Tente novamente.");
      }
    } catch (error) {
      // Erro no envio dos dados
      console.error("Erro ao fazer login", error);
      alert("Erro ao fazer login.");
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
              value={email_cadastros}
              onChange={aoMudarEmail}
              placeholder="Digite seu E-mail:"
              required
            />
            <input
              type="password"
              value={senha_cadastros}
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
