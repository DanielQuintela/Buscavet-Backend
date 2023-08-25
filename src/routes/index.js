import express from 'express';
import Usuario from './usuarioRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'BuscaVet API'});
    });

    app.use(
        express.json(),
        Usuario,

    )


}

export default routes;