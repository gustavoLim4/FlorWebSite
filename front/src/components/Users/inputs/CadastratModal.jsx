import React, { useState } from "react";
import axios from "axios";
import "../styles.css";

const CadastroModal = ({ abrirCadastrar, fecharCadastrar }) => {
  const [nome_cadastrar, setNome_cadastrar] = useState("");
  const [email_cadastrar, setEmail_cadastrar] = useState("");
  const [senha_cadastrar, setSenha_cadastrar] = useState("");
  const [telefone_cadastrar, setTelefone_cadastrar] = useState("");

  const aoMudarNome = (evento) => {
    setNome_cadastrar(evento.target.value);
  };
  const aoMudarEmail = (evento) => {
    setEmail_cadastrar(evento.target.value);
  };
  const aoMudarSenha = (evento) => {
    setSenha_cadastrar(evento.target.value);
  };
  const aoMudarNumero = (evento) => {
    setTelefone_cadastrar(evento.target.value);
  };

  const submit = async (evento) => {
    evento.preventDefault();

    // Envia os dados para o backend
    try {
      const resposta = await axios.post(
        "http://localhost:5003/api/usuarios", // Alterado para usar a rota correta de cadastro
        {
          nome: nome_cadastrar,
          email: email_cadastrar,
          senha: senha_cadastrar,
          telefone: telefone_cadastrar,
        }
      );

      // Sucesso no envio dos dados
      console.log("Usuário cadastrado com sucesso");
      alert(resposta.data.message); // Exibe uma mensagem de sucesso
      setNome_cadastrar(""); // Limpa os campos
      setEmail_cadastrar("");
      setSenha_cadastrar("");
      setTelefone_cadastrar("");
    } catch (error) {
      // Erro no envio dos dados
      console.error("Erro ao cadastrar usuário", error);
      alert("Erro ao cadastrar o usuário.");
    }
  };

  return (
    <>
      <div
        className={`modal-abrir ${abrirCadastrar ? "show" : ""}`}
        onClick={fecharCadastrar}
      ></div>

      <div className={`modal-user ${abrirCadastrar ? "show" : ""}`}>
        <form onSubmit={submit} className="formulario">
          <div className="container-inputsCx">
            <input
              type="text"
              value={nome_cadastrar}
              onChange={aoMudarNome}
              placeholder="Digite seu nome:"
              required
            />
            <input
              type="email"
              value={email_cadastrar}
              onChange={aoMudarEmail}
              placeholder="Digite seu E-mail:"
              required
            />
            <input
              type="password"
              value={senha_cadastrar}
              onChange={aoMudarSenha}
              placeholder="Digite sua senha:"
              required
            />
            <input
              type="text"
              value={telefone_cadastrar}
              onChange={aoMudarNumero}
              placeholder="Digite seu número:"
              required
            />
            <div className="buttoentrar">
              <button type="submit">Cadastrar</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CadastroModal;
