import express from 'express';
import UsuarioController from '../controllers/UsuarioController.js';

const router = express.Router();

router
  .get('/usuarios', UsuarioController.buscarUsuarios)
  .post('/usuarios/login', UsuarioController.loginUsuario)
  .post('/usuarios', UsuarioController.cadastrarUsuario)
  .patch('/usuarios/:id', UsuarioController.mudarSenha);

export default router;
