import express from 'express';
import VeterinarioController from '../controllers/VeterinarioController';

const router = express.Router();

router
  .get('/veterinarios', VeterinarioController.buscarVeterinarios)
  .post('/veterinario/login', VeterinarioController.loginVeterinario)
  .post('/veterinarios', VeterinarioController.cadastrarVeterinario);

export default router;
