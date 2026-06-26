import express from 'express';
import cors from 'cors';

const app = express();

// Configura o CORS
app.use(cors(origin: 'https://fabianoresende.github.io')); // Isso libera acesso total para testes;

app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
    res.send('Servidor está rodando!');
});

// Rota do chat (exemplo estrutural)
app.post('/chat', async (req, res) => {
    const { prompt } = req.body;
    // Aqui você colocaria a lógica de chamada da API do Gemini
    res.json({ answer: "Resposta do Gemini: Recebi seu prompt!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

