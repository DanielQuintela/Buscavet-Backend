import express from 'express';
import UsuarioController from '../controllers/UsuarioController.js';

const router = express.Router();

router
.get("/usuarios", UsuarioController.buscarUsuarios)
// .get("/usuario/:id", UsuarioController.buscarUsuarioPorId)
.post("/usuario/login", UsuarioController.loginUser)
.post("/usuarios", UsuarioController.cadastrarUsuario)
.post("/usuario/update/password", UsuarioController.changePassword)


export default router;
