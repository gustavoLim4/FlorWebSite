import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5003',  // URL do backend
});

// Função para cadastro de usuário
export const cadastrarUsuario = (dados) => {
  return api.post('/api/usuarios', dados);
};

// Função para login de usuário
export const loginUsuario = (dados) => {
  return api.post('/api/usuarios/login', dados);
};
