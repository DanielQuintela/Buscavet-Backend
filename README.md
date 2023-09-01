# Back-End do BuscaVet

- :warning: ATENÇÃO :warning: Antes de iniciar a aplicação, certifique-se de configurar os hooks e as dependências. Para fazer isso, siga estas etapas:

## Pré-requisitos

- nodejs
- docker

## Comandos Básicos

Iniciar o container:

```
docker compose up
```

Entrar no container do db:

```
docker compose exec db bash
```

Após entrar, passe o usuario

```
psql -U postgres
```

Crie o database e pode sair:

```
create database db;
```

## Comandos dentro do conteiner da API

Instalar dependências do projeto:

```
npm install
```

Configurar hooks:

```
make setup
```

Iniciar a aplicação:

```
npm run dev
```

Encontrar erros:

```
npm run lint
```

Resolver erros:

```
npm run lint -- --fix
```