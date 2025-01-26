import mysql from 'mysql2';

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'flor_cadastros',
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
    return;
  }
  console.log('Conectado ao banco de dados');
});
