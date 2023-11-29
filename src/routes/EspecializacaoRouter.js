import express from 'express';
import EspecializacaoController from '../controllers/EspecializacaoController.js';

const router = express.Router();

router
  .get('/especializacao', EspecializacaoController.buscarEspecializacao)
  .post('/especializacao', EspecializacaoController.cadastrarEspecializacao);

export default router;
