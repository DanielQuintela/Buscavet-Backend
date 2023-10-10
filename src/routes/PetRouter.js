import express from 'express';
import PetController from '../controllers/PetController.js';


const router = express.Router();

router
    .get('/pets/:id',PetController.buscarMeuPet)
    .get('/pets',PetController.buscarPets)
    .post('/pets/:id',PetController.cadastrarPet)
    .delete('/pets/:id',PetController.deletarPet);

export default router;