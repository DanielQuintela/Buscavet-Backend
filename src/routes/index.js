import express from 'express';
import UsuarioRouter from './UsuarioRouter.js';
import VeterinarioRouter from './VeterinarioRouter.js';
import ServicesRouter from './ServicesRouter.js';
import ClientRouter from './ClienteRouter.js';
import PetRouter from './PetRouter.js';
import EspecializacaoRouter from './EspecializacaoRouter.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'BuscaVet API' });
  });

  app.use(express.json());
  app.use(UsuarioRouter);
  app.use(VeterinarioRouter);
  app.use(ServicesRouter);
  app.use(ClientRouter);
  app.use(PetRouter);
  app.use(EspecializacaoRouter);
};

export default routes;
