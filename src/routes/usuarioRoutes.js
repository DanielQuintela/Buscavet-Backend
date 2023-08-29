import express from 'express';
import UsuarioController from '../controllers/usuarioControllers.js';

const router = express.Router();

router
.get("/usuarios", UsuarioController.buscarUsuarios)
// .get("/usuario/:id", UsuarioController.buscarUsuarioPorId)
.post("/usuario/login", UsuarioController.loginUser)
.post("/usuario/cadastrar", UsuarioController.cadastrarUsuario)
.post("/usuario/update/password", UsuarioController.changePassword)


export default router;