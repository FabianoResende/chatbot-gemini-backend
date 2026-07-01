import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.post("/chat", async (req, res) => {
    const { prompt } = req.body;

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [{ text: prompt }],
                        },
                    ],
                }),
            }
        );

        const data = await response.json();
        const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sem resposta.";

        res.json({ answer });
    } catch (error) {
        res.status(500).json({ error: "Erro ao conectar com a IA." });
    }
});

app.listen(3000, () => console.log("Backend do chatbot rodando")); 
