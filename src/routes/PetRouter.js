import express from 'express';
import PetController from '../controllers/PetController.js';


const router = express.Router();

router
    .get('/pets',PetController.buscarPets)
    .post('/pets/:id',PetController.cadastrarPet);

export default router;