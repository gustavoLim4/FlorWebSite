import express from 'express'; //É a biblioteca para construir o servidor
import mysql from 'mysql2'; // Usada para interagir com o banco de dados MySQL
import cors from 'cors'; // Ele é um mecanismo de segurança.ele permitir que o frontend que está no localhost:3000 faça requisições para o backend (que está no localhost:5003).

//app: Esta é a variável que representa a aplicação Express. 
// A partir dela, você vai configurar rotas, middlewares, e mais. 
// Ela será responsável por lidar com as requisições HTTP feitas ao servidor.
const app = express();


app.use(cors({ origin: 'http://localhost:3000' }));; // Adiciona o CORS, permitir apenas o acesso do dominio do seu frontend que está rodando em (localhost:3000)

app.use(express.json()); //permição para o express ler e acessa uma requisição JSON que no caso é a (cadastro : email,senha)

//Conexão com o Banco de Dados MySQL
const db = mysql.createConnection({
  host: 'localhost',     // Host do MySQL
  user: 'root',          // Usuário do MySQL
  password: '',          // Senha do MySQL
  database: 'flor_cadastros', // Nome do banco de dados
});

// Conectar ao banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
    return;
    //err.stack: Exibe o stack trace (a cadeia de chamadas de função) do erro caso algo tenha dado errado.
  }
  console.log('Conectado ao banco de dados');
});

//  Este método cria uma rota que responde a requisições POST para o caminho /api/users/register.
app.post('/api/users/register', (requis, respt) => {
  const { email, senha } = requis.body;

  // SQL para inserir um novo usuário na tabela 'usuarios'
  const query = 'INSERT INTO usuarios (email, senha) VALUES (?, ?)';

  // enviando a consulta SQL para o banco de dados. O segundo parâmetro [email, senha]
  db.query(query, [email, senha], (err) => {
    if (err) {
      console.error('Erro ao inserir no banco de dados:', err);
      return respt.status(500).send('Erro ao cadastrar o usuário.');
    }

    // Retornar sucesso
    respt.status(200).send({ message: `Usuário:${email}  ,Senha: ${senha}` });
  });
});

// Iniciar o servidor na porta 5003
app.listen(5003, () => {
  console.log('Servidor rodando na porta 5003');
});
const { email, senha } = requis.body;