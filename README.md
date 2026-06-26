# 🤖 Intelligent Chatbot Fullstack (Node.js + Gemini API)

Este projeto consiste em uma aplicação fullstack de um chatbot inteligente. O principal objetivo foi construir uma arquitetura desacoplada e extremamente segura, onde o frontend nunca expõe chaves de API sensíveis, delegando toda a comunicação e inteligência ao backend.

---

## 🛠️ Arquitetura do Projeto

A aplicação segue o fluxo de comunicação segura padrão de mercado:
`Frontend (HTML/JS) ➔ Backend Local (Node.js/Express) ➔ API Externa de IA (Google Gemini)`

- **Frontend:** Interface simples, responsiva e limpa para interação do usuário.
- **Backend:** Servidor robusto em Node.js utilizando Express para gerenciamento de rotas e segurança de dados.
- **Segurança da Informação:** Uso rigoroso de variáveis de ambiente (`.env`) via `dotenv`, garantindo que credenciais de produção nunca sejam expostas no código-fonte ou enviadas ao cliente (browser).

---

## 🧠 Mentalidade de Engenharia: Resolução de Problemas (Troubleshooting)

Durante o desenvolvimento inicial, o projeto utilizava a API pública de inferência da Hugging Face (`api-inference.huggingface.co`). No entanto, foi identificado um bloqueio estrito de resolução de DNS a nível de infraestrutura de rede externa que impedia a máquina local de obter o IP do host. 

Seguindo as melhores práticas de **Cyber Segurança de alto padrão**, foram adotadas as seguintes posturas:
1. **Preservação do Sistema:** Nenhuma barreira de proteção essencial da máquina (Firewall do Windows, Antivírus ou SmartScreen) foi desativada ou enfraquecida para "forçar" o funcionamento de uma dependência externa.
2. **DNS Seguro:** O sistema foi configurado para utilizar resolvedores DNS confiáveis (Google/Cloudflare) com **DNS sobre HTTPS (DoH)** ativado e criptografado.
3. **Pivô Tecnológico:** A arquitetura do backend foi mantida intacta, e a integração foi migrada com sucesso para a API do **Google Gemini**, demonstrando flexibilidade de código e resiliência de infraestrutura.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js instalado (versão 18 ou superior recomendada)
- Uma chave de API do Google AI Studio (Gemini)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
   cd nome-do-repositorio