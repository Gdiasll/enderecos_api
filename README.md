<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

@ Geone Dias - 2021

## Pré-requisitos

- Docker
- Git



## Installação


 - Copiar o arquivo ".env.example" e renomear a cópia para ".env" (manter a cópia na raiz do projeto);
 - Preencher as variáveis no arquivo .env (caso a porta escolhida seja diferente de 3000, alterar o apontamento no arquivo docker-compose.yaml para a porta desejada)
 - Em seu terminal, rodar o comando ```$docker-compose up --build```

## Informações importantes

- Foi utilizado a biblioteca 'Swagger' para realizar a documentação da API. Para acessar a página da documentação, basta ir até a rota ```/api``` lá poderá ser encontrado informações sobre o serviço, rotas e outras informações gerais sobre a API.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
