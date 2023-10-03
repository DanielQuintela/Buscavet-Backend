import express from 'express';
import cors from 'cors';
import UsuarioRouter from './UsuarioRouter.js';
import VeterinarioRouter from './VeterinarioRouter.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'BuscaVet API' });
  });
  app.use(cors());
  app.use(express.json());
  app.use(UsuarioRouter);
  app.use(VeterinarioRouter);
};

export default routes;
