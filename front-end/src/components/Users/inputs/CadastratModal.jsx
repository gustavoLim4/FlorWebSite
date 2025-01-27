import React, { useState } from "react";
import { cadastrarUsuario } from "../../../service/api";
import "../styles.css";

const CadastroModal = ({ abrirCadastrar, fecharCadastrar }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");

  const submit = async (evento) => {
    evento.preventDefault();

    try {
      const resposta = await cadastrarUsuario({
        nome,
        email,
        senha,
        telefone,
      });
      alert(resposta.data.message);
      setNome("");
      setEmail("");
      setSenha("");
      setTelefone("");
    } catch (error) {
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
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome"
              required
            />
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
            <input
              type="text"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="Digite seu número"
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
