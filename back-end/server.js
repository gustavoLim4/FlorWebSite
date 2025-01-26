import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use(usuarioRoutes); // Usa as rotas definidas

app.listen(5003, () => {
  console.log('Servidor rodando na porta 5003');
});