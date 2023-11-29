import express from 'express';
import PetController from '../controllers/PetController.js';

const router = express.Router();

router
  .get('/pets', PetController.buscarMeuPet)
  .get('/pets', PetController.buscarPets)
  .post('/pets', PetController.cadastrarPet)
  .delete('/pets', PetController.deletarPet);

export default router;
