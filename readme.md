# API Connect Events 📅

API para inscrição de participantes em eventos, construída com Fastify, TypeScript e validação com Zod.

## 🚀 Tecnologias Utilizadas

<p align="left">
  <a href="https://www.fastify.io/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastify/fastify-original.svg" alt="Fastify" width="24" height="24"/></a> <b>Fastify</b>
  &nbsp;&nbsp;
  <a href="https://www.typescriptlang.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="24" height="24"/></a> <b>TypeScript</b>
  &nbsp;&nbsp;
  <a href="https://zod.dev/" target="_blank"><img src="https://raw.githubusercontent.com/colinhacks/zod/master/logo.svg" alt="Zod" width="24" height="24"/></a> <b>Zod</b>
  &nbsp;&nbsp;
  <a href="https://swagger.io/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" alt="Swagger" width="24" height="24"/></a> <b>Swagger</b>
  &nbsp;&nbsp;
  <a href="https://github.com/motdotla/dotenv" target="_blank"><img src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.svg" alt="dotenv" width="24" height="24"/></a> <b>dotenv</b>
</p>

## 🛠️ Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd api_connect_events
   ```
3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

## ⚙️ Variáveis de Ambiente

- `PORT`: Porta onde o servidor irá rodar (padrão: 3333)

Você pode criar um arquivo `.env` na raiz do projeto para definir a porta, se desejar:
```env
PORT=3333
```

## ▶️ Como Rodar

```bash
npm run dev
# ou
yarn dev
```

O servidor estará disponível em `http://localhost:3333` (ou porta configurada).

## 📝 Exemplo de Requisição

```http
POST http://localhost:3333/subscription
Content-Type: application/json

{
  "name": "John Doe",
  "email": "johndoe@exemplo.com"
}
```

## 📖 Documentação Interativa

Acesse a documentação Swagger em: [http://localhost:3333/docs](http://localhost:3333/docs)

## 📄 Licença

Este projeto está sob a licença ISC.

---

> Preencha as informações específicas do seu projeto conforme necessário.
