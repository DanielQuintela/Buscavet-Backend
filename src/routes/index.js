import express from 'express';
import Usuario from './UsuarioRoutes.js';
import Veterinario from './VeterinarioRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'BuscaVet API'});
    });

// Utiliza o Middleware para permitir que a aplicação analise dados JSON nas requisições e associa
// as rotas definidas no arquivo "NomeRoutes" á aplicação usando o middleware "Usuario", "Veterinario".
    app.use(express.json());
    app.use(Usuario)
    app.use(Veterinario)
}

export default routes;