import express from 'express';
import UsuarioRouter from './UsuarioRouter.js';
import VeterinarioRouter from './VeterinarioRouter.js';
import ServicesRouter from './ServicesRouter.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'BuscaVet API' });
  });

  app.use(express.json());
  app.use(UsuarioRouter);
  app.use(VeterinarioRouter);
  app.use(ServicesRouter);
};

export default routes;
