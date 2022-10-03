# Desafio Vá de Taxi
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
POST /tokens/
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
|  |  | Devolve todos os usuários|

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
