import { db } from '../config/dbConfig.js';  // A conexão com o banco de dados

// Função para cadastrar usuário

export const cadastrarUsuario = (req, res) => {
    console.log(req.body);  // Adicione isso para verificar os dados recebidos

    const { nome, email, senha, telefone } = req.body;

    if (!nome || !email || !senha || !telefone) {
        return res.status(400).send('Todos os campos (nome, e-mail, senha, telefone) são obrigatórios.');
    }

    const query = 'SELECT * FROM usuarios WHERE email = ?';
    db.query(query, [email], (err, result) => {
        if (err) {
            console.error("Erro ao verificar e-mail:", err);
            return res.status(500).send('Erro ao verificar e-mail.');
        }
        if (result.length > 0) {
            console.log('E-mail já cadastrado:', email);
            return res.status(400).send('E-mail já cadastrado.');
        }

        const insertQuery = 'INSERT INTO usuarios (nome, email, senha, telefone) VALUES (?, ?, ?, ?)';
        db.query(insertQuery, [nome, email, senha, telefone], (err) => {
            if (err) {
                console.error("Erro ao cadastrar usuário:", err);
                return res.status(500).send('Erro ao cadastrar usuário.');
            }
            res.status(200).send({ message: 'Usuário cadastrado com sucesso!' });
        });
    });
};



// Função para fazer login
export const loginUsuario = (req, res) => {
    const {nome, email, senha } = req.body;

    const query = 'SELECT * FROM usuarios WHERE email = ?';
    db.query(query, [email], (err, result) => {
        if (err) {
            console.error("Erro ao buscar usuário:", err); // Log para depuração
            return res.status(500).send('Erro ao buscar usuário.');
        }

        if (result.length === 0) {
            console.log('E-mail não encontrado:', email); // Log para depuração
            return res.status(400).send('E-mail não encontrado. Verifique seu e-mail e tente novamente.');
        }

        const usuario = result[0];

        // Verifica se a senha fornecida é igual à armazenada no banco de dados
        if (senha !== usuario.senha) {
            console.log('Senha incorreta para o e-mail:', email); // Log para depuração
            return res.status(400).send('Senha incorreta. Tente novamente.');
        }

        // Se tudo estiver correto, retorna uma mensagem de sucesso
        res.status(200).send({ message: `Bem-vindo ${nome}`  });
    });
};


