import express from 'express';
import ClienteController from "../controllers/ClienteController.js";

const router = express.Router();

router
    .get('/clientes', ClienteController.buscarClientes);

export default router;