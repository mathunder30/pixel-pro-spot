# PORTIFOLIO

PORTIFOLIO é uma aplicação web full stack moderna, criada para facilitar o contato com desenvolvedores e apresentar portfólio de projetos. O sistema é composto por três principais tecnologias: React no frontend, Node.js com Express no backend e PostgreSQL como banco de dados, todos integrados via Docker.

---

## Tecnologias Utilizadas

- **Frontend:** [React](https://react.dev/) (com Vite)
- **Backend:** [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/)
- **Banco de Dados:** [PostgreSQL](https://www.postgresql.org/)
- **Gerenciamento de Containers:** [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/)

---

## Estrutura do Projeto

```
pixel-pro-spot/
├── backend/      # Código do servidor Node.js/Express
├── frontend/     # Aplicação React (Vite)
├── docker-compose.yml
└── README.md
```

---

## Detalhes do Frontend (React + Vite)

O frontend foi desenvolvido com React, utilizando o Vite para um ambiente de desenvolvimento rápido e eficiente.  
Principais características:

- **Componentização:** O código é dividido em componentes reutilizáveis, facilitando manutenção e escalabilidade.
- **Hooks:** Uso de hooks como `useState` e `useEffect` para gerenciamento de estado e efeitos colaterais.
- **Formulário de Contato:** Permite ao usuário enviar mensagens, que são enviadas para o backend via API REST.
- **Variáveis de Ambiente:** O endereço da API é configurado via `VITE_API_URL` no arquivo `.env`.
- **Estilização:** Utiliza CSS moderno e responsivo para uma boa experiência em diferentes dispositivos.

---

## Detalhes do Backend (Node.js + Express)

O backend é uma API REST construída com Node.js e Express.  
Principais características:

- **Rotas REST:** Disponibiliza endpoints para cadastro de mensagens e outras funcionalidades.
- **Middleware:** Utiliza middlewares para parsing de JSON, tratamento de CORS e logs.
- **Integração com PostgreSQL:** Utiliza um ORM ou driver para salvar e consultar dados no banco PostgreSQL.
- **Variáveis de Ambiente:** Configurações sensíveis (como string de conexão do banco) ficam em um arquivo `.env`.
- **CORS:** Configurado para aceitar requisições do frontend, permitindo comunicação segura entre as aplicações.

---

## Banco de Dados (PostgreSQL)

O PostgreSQL armazena as mensagens enviadas pelo formulário de contato e outros dados necessários para o funcionamento do sistema. O banco roda em um container Docker separado, com persistência de dados via volume.

---

## Docker e Orquestração

O Docker Compose é utilizado para orquestrar os três serviços (frontend, backend e banco de dados), facilitando o setup e a execução do ambiente completo com apenas um comando.

---

## Como Rodar o Projeto

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/pixel-pro-spot.git
   cd pixel-pro-spot
   ```

2. **Configure as variáveis de ambiente:**
   - No backend, crie um arquivo `.env` com as configurações do banco.
   - No frontend, crie um arquivo `.env` com:
     ```
     VITE_API_URL=http://localhost:3000
     ```

3. **Suba os containers:**
   ```sh
   docker-compose up --build
   ```

4. **Acesse no navegador:**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend: [http://localhost:3000](http://localhost:3000)

---

## Observações

- O volume do frontend deve ser usado apenas para desenvolvimento, para evitar sobrescrever o build do container.
- O backend está preparado para receber requisições do frontend via CORS.
- O banco de dados PostgreSQL é persistido via volume Docker, garantindo que os dados não se percam ao reiniciar os containers.

---