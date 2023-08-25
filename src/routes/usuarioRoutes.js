import express from 'express';
import UsuarioController from '../controllers/usuarioControllers.js';

const router = express.Router();

router
.get("/usuarios", UsuarioController.buscarUsuarios)
.post("/usuario/cadastrar", UsuarioController.cadastrarUsuario)

export default router;