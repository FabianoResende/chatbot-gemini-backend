const express = require('express');
const cors = require('cors');

const app = express();

// Configura o CORS para aceitar conexões do seu GitHub Pages
app.use(cors({ origin: 'https://fabianoresende.github.io' }));

app.use(express.json());

// Rota do chat (coloque aqui a lógica do seu Gemini)
app.post('/chat', async (req, res) => {
    try {
        const { prompt } = req.body;
        // ... aqui vai a sua chamada para a API do Gemini ...
        res.json({ answer: "Resposta do Gemini aqui" }); 
    } catch (error) {
        res.status(500).json({ error: "Erro no servidor" });
    }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));