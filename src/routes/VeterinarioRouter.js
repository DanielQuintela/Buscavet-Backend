import express from 'express';
import VeterinarioController from '../controllers/VeterinarioController.js';

const router = express.Router();

router
  .get('/veterinarios/:id', VeterinarioController.buscarVeterinariosId)
  .post('/veterinarios/email', VeterinarioController.buscarVeterinariosEmail)
  .get('/veterinarios', VeterinarioController.buscarVeterinarios)
  .post('/veterinarios', VeterinarioController.cadastrarVeterinario)
  .post('/veterinarios/especializacao', VeterinarioController.buscarVeterinariosEspecializacao)
  .post('/veterinarios/cliente/:id', VeterinarioController.veterinarioParaCliente);
 


export default router;
