import express from 'express';
import { cadastrarUsuario, loginUsuario } from '../controllers/usuarioController.js';

const router = express.Router();

// Rota para cadastro de usuário
router.post('/api/usuarios', cadastrarUsuario);

// Rota para login de usuário
router.post('/api/usuarios/login', loginUsuario);

export default router;