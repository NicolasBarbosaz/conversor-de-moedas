# 💱 API Conversor de Moedas

API desenvolvida com NestJS e TypeScript para realizar conversões monetárias para Dólar Americano (USD) e Euro (EUR), seguindo os princípios de Clean Architecture, SOLID e Programação Orientada a Objetos (POO).

O sistema permite criar, listar, atualizar e remover conversões de moedas, além de armazenar o histórico das conversões realizadas.

---

# 🚀 Tecnologias Utilizadas

* [NestJS](https://nestjs.com?utm_source=chatgpt.com)
* [TypeScript](https://www.typescriptlang.org?utm_source=chatgpt.com)
* [Node.js](https://nodejs.org?utm_source=chatgpt.com)
* [Prisma ORM](https://www.prisma.io?utm_source=chatgpt.com)
* [PostgreSQL](https://www.postgresql.org?utm_source=chatgpt.com)

---

# 📁 Estrutura do Projeto

```bash
src/
├── conversor/
│   ├── controllers/
│   │   └── conversions.controller.ts
│   │
│   ├── dto/
│   │   ├── create-conversor.dto.ts
│   │   └── update-conversor.dto.ts
│   │
│   ├── entities/
│   │   └── conversor.entity.ts
│   │
│   ├── modules/
│   │   ├── conversor.modules.ts
│   │   └── prisma.module.ts
│   │
│   ├── repository/
│   │   ├── conversor.repository.ts
│   │   └── prisma.repository.ts
│   │
│   ├── service/
│   │   ├── exchange-rate.service.ts
│   │   └── prisma.service.ts
│   │
│   └── use-cases/
│       ├── createConversor.ts
│       ├── delete-conversor.ts
│       ├── list-conversor.ts
│       └── update-conversor.ts
│
├── app.module.ts
└── main.ts

prisma/
├── migrations/
└── schema.prisma
```

---

# ⚙️ Funcionalidades

* Criar conversão de moedas
* Listar conversões realizadas
* Buscar conversão por ID
* Atualizar conversão
* Remover conversão
* Persistência em banco de dados
* Integração com taxa de câmbio
* Tratamento de exceções
* Validação de dados

---

# 📌 Regras de Negócio

* O valor da conversão deve ser maior que zero
* A moeda de origem deve ser válida
* Toda conversão gera valores em:

  * USD
  * EUR
* As taxas de câmbio ficam desacopladas da regra de negócio

---

# 🔧 Instalação

## 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

## 2. Acesse a pasta do projeto

```bash
cd seu-repositorio
```

## 3. Instale as dependências

```bash
npm install
```


# 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto para rodar localmente:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/conversor?schema=public"
PORT=3000
```

---

# 🗄️ Executando as Migrations

```bash
npx prisma migrate dev
```

---

# ▶️ Executando o Projeto

## Ambiente de desenvolvimento

```bash
npm run start:dev
```

---

# 📡 Rotas da API

## Criar Conversão

### `POST /conversions`

### Body

```json
{
  "amount": 100,
  "fromCurrency": "BRL"
}
```

### Resposta

```json
{
  "id": "1",
  "amount": 100,
  "fromCurrency": "BRL",
  "usd": 19.77,
  "eur": 18.12
}
```

---

## Listar Conversões

### `GET /conversions`

### Resposta

```json
[
  {
    "id": "1",
    "amount": 100,
    "fromCurrency": "BRL",
    "usd": 19.77,
    "eur": 18.12
  }
]
```

---

## Buscar Conversão por ID

### `GET /conversions/:id`

---

## Atualizar Conversão

### `PUT /conversions/:id`

### Body

```json
{
  "amount": 200
}
```

---

## Remover Conversão

### `DELETE /conversions/:id`

---

# ✅ Validações

A API possui validações utilizando `class-validator`:

* Valor obrigatório
* Valor maior que zero
* Moeda válida
* Tratamento de erros HTTP

---

# 🧱 Arquitetura

O projeto segue os princípios de:

* Clean Architecture
* SOLID
* Separação de responsabilidades
* Inversão de dependência
* Organização modular do NestJS

---

# 👨‍💻 Autores

Projeto desenvolvido para a disciplina de Backend / Arquitetura de Software.

Alunos: Pablo Jorge dos Santos / Nícolas César Barbosa Correia

---

# 📄 Licença

Este projeto é destinado para fins acadêmicos.
