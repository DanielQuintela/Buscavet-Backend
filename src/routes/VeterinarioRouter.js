import express from 'express';
import VeterinarioController from '../controllers/VeterinarioController.js';

const router = express.Router();

router
  .get('/veterinarios', VeterinarioController.buscarVeterinarios)
  .post('/veterinarios', VeterinarioController.cadastrarVeterinario)
  .post('/veterinarios/email', VeterinarioController.buscarVeterinariosEmail)
  .post('/veterinarios/especializacao', VeterinarioController.buscarVeterinariosEspecializacao);

export default router;
