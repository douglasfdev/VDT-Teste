# Projeto feito juntamente do Curso JavaScript & TypeScript do basico ao avançado

## Ferramentas
* Google Cloud Platform
* Maria BD
* DBeaver

## Techs, Stacks & Skills
* NodeJS
* Express
* Sequelize
* BcryptJS
* Dotenv
* JSonWebToken

## Ambiente de Produção
* ESLint AirBnb
* Nodemon
* Sucrase
* Editorconfig

### Comandos
Para rodar o Servidor tenha o NPM ou o YARN instalados na máquina.
* `npm start` ou `yarn start`
* `npm run dev` ou `yarn dev`


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DATABASE`  \
`DATABASE_HOST` \
`DATABASE_PORT` \
`DATABASE_USERNAME` \
`DATABASE_PASSWORD` \

`TOKEN_SECRET`  \
`TOKEN_EXPIRATION`  \

## Documentação da API

#### Pegar o Token de Autenticação
```http
  POST /tokens/
```
#### Retorna todos os Usuários

```http
  GET http://localhost:3001/
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `authentication` | `string` | **Obrigatório**. O Token da API no Header|

#### Retorna um Usuário

```http
  GET /${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### add(num1, num2)

Recebe dois números e retorna a sua soma.
