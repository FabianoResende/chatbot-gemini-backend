try {
    const response = await fetch('https://chatbot-gemini-backend-m8a1.onrender.com/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: inputDeTexto }) 
    });

    const data = await response.json();
    exibirMensagemNaTela(data.answer, 'bot'); 
    
} catch (error) {
    console.error("Erro ao conversar com o backend:", error);
    exibirMensagemNaTela("Erro ao conectar com a IA. Verifique sua internet.", 'bot');
}