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

Entrar no container da API:

```
docker compose exec api bash
```

Configurar hooks:

```
make setup
```

Encontrar erros de formatação:

```
npm run lint
```

Resolver erros de formatação:

```
npm run lint -- --fix
```

## Caso no final dê algum erro

Execute esses comandos dentro do container da API

Comando Abaixo para abrir o console da API

```
docker compose exec api bash
```

Dentro do console, coloque

```
npm uninstall bcrypt
```

Depois Pare os Containers com Ctrl+C

Rode-os Novamente

```
docker compose up
```

E Abra o console da APi novamente

```
docker compose exec api bash
```

E rode

```
npm install bcrypt
```

Pare os Containers com Ctrl+C

Rode-os Novamente

```
docker compose up
```