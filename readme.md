## Tabela de Conteúdo

- [Desafio](#desafio-vá-de-taxi)
- [Techs, Stacks & Skills](#techs-stacks--skills)
- [Ambiente de Produção](#ambiente-de-produção)
- [Comandos](#comandos)
- [Token e verificação](#token-e-verificação)
- [Pegar o Token de Autenticação](#pegar-o-token-de-autenticação)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Rotas de Usuário](#rotas-de-usuário)
- [Rotas de Corridas](#rotas-de-corridas)
- [Rotas de Reservas](#rotas-de-reservas)


# Desafio Vá de Taxi
* NodeJS - Node.js é um software de código aberto, multiplataforma, que executa códigos JavaScript no backend/servidor e frontend/interface, baseado no V8 interpretador de JavaScript em C++ do Google, mantido pela fundação Node.js em parceria com a Linux Foundation.

* ESLint - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX.

* EditorConfig - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes.

* SQLite - É uma biblioteca em linguagem C que implementa um banco de dados SQL embutido. Programas que usam a biblioteca SQLite podem ter acesso a banco de dados SQL sem executar um processo SGBD separado.
* Sequelize - É um ORM para Node.js baseado em Promises, para os bancos PostgreSQL, MySQL, MariaDB, SQLite e MS SQL Server.

* Sequelize - É um ORM(Object/Relational Mapper) baseado em Promise para Node.js e io.js, e suporta os dialetos PostgreSQL, MySQL, MariaDB, SQLite e MSSQL e recursos a transação, relacionamentos, replicação de leitura e muito mais. Ele possui um mecanismo de migração muito poderoso que pode transformar um esquema existente de banco de dados em uma nova versão e também fornece mecanismos de sincronização de banco de dados que podem criar estrutura de banco de dados especificando a estrutura do modelo.

* BcryptJS - O bcryptjs é uma biblioteca para encriptação de dados. Neste caso, o dado a ser criptografado é o password.

* JsonWebToken - JWT é um padrão para autenticação e troca de informações definido pela RFC7519. Nele é possível armazenar de forma segura e compacta objetos JSON. Este token é um código Base64 e pode ser assinado usando um segredo ou par de chaves privadas/públicas.

## Techs, Stacks & Skills
* NodeJS
* SQLite
* Express
* Sequelize
* BcryptJS
* Dotenv
* JsonWebToken

## Ambiente de Produção
* ESLint AirBnb
* Nodemon
* Sucrase
* Editorconfig

### Comandos
Para rodar o Servidor tenha o NPM ou o YARN instalados na máquina.
* `npm i` ou `yarn` - para instalar as dependencias
* `npm start` ou `yarn start` - Para dar start no projeto
* `npm run dev` ou `yarn dev` - Para ambiente de desenvolvimento com nodemon e sucrase
* `npm migrate` ou `yarn migrate` - para gerar os seeds na database do SQLite

## Token e verificação
Você pode obter o token na rota `/tokens/` com o método POST, passando os dados JSON:
```json
	"email": "admin@email.com",
	"password": "123456"
```
Você vai precisar passar o token no Header da requisição HTTP como Auth escolhendo a opção Bearer Token.
#### Pegar o Token de Autenticação
```http
POST http://localhost:3001//tokens/
```
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`TOKEN_SECRET`  \
`TOKEN_EXPIRATION`


## Documentação da API

#### Rotas de Usuário
```http
GET http://localhost:3001/users
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `authentication` | `string` | **Obrigatório**. O Token passado como Bearer da API no Header|

```http
GET http://localhost:3001/users/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `authentication` | `string` | **Obrigatório**. O Token passado como Bearer da API no Header|
| `id` | `number` | **Obrigatório**. O ID do user que você quer buscar|


```http
POST http://localhost:3001/users
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `authentication` | `string` | **Obrigatório**. O Token passado como Bearer da API no Header|
| `corpo` | `json` | **Obrigatório**. No corpo da requisição o user que você quer adicionar, com nome, email e senha|
```json
    "nome":"nome",
    "email": "email@email.com",
    "password":"senha qualquer"
```

```http
PUT http://localhost:3001/users/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `corpo` | `json` | **Obrigatório**. No corpo da requisição o user que você quer alterar, com nome, email e senha|
| `id` | `number` | **Obrigatório**. O ID do user que você quer alterar|
| `authentication` | `string` | **Obrigatório**. O Token passado como Bearer da API no Header|
```json
    "nome":"nome",
    "email": "email@email.com",
    "password":"senha qualquer"
```

```http
DELETE http://localhost:3001/users/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `authentication` | `string` | **Obrigatório**. O Token passado como Bearer da API no Header|
| `id` | `number` | **Obrigatório**. O ID do user que você quer deletar|

<hr>

#### Rotas de Corridas
```http
GET http://localhost:3001/corridas
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
|  |  | Devolve todas as corridas|

```http
GET http://localhost:3001/corridas/${id}
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | **Obrigatório**. O ID da corrida que você quer buscar|

```http
POST http://localhost:3001/corridas/
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `corpo` | `json` | **Obrigatório**. No corpo da requisição a corrida que você quer adicionar, com carro, placa e motorista|

```json
    "carro":"Fiesta",
    "placa": "AAA0000",
    "motorista":"Fulano"
```

```http
PUT http://localhost:3001/corridas/${id}
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | **Obrigatório**. O ID da corrida que você quer buscar|
| `corpo` | `json` | **Obrigatório**. No corpo da requisição a corrida que você quer alterar, com carro, placa e motorista|

```json
    "carro":"Fiesta",
    "placa": "AAA0000",
    "motorista":"Fulano"
```

```http
DELETE http://localhost:3001/corridas/${id}
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | **Sem Obrigatioriedade**.|

<hr>

#### Rotas de Reservas

```http
GET http://localhost:3001/users/corrida/${id}/reserves
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | **Obrigatório**. O ID da corrida que você quer buscar|
| `authentication` | `string` | **Obrigatório**. O Token passado como Bearer da API no Header|


```http
POST http://localhost:3001/users/corrida/${id}/reserve/
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | **Obrigatório**. O ID da corrida que você quer buscar|
| `authentication` | `string` | **Obrigatório**. O Token passado como Bearer da API no Header|
