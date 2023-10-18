import express from 'express';
import UsuarioController from '../controllers/UsuarioController.js';
import authenticateJwt from '../middlewares/AuthMiddleware.js';

const router = express.Router();

router
  .get('/usuarios/:id', UsuarioController.buscarUsuarioId)
  .get('/usuarios/email', UsuarioController.buscarUsuarioEmail)
  .get('/usuarios', UsuarioController.buscarUsuarios)
  .post('/usuarios/login', UsuarioController.loginUsuario)
  .post('/usuarios', UsuarioController.cadastrarUsuario)
  .patch('/usuarios/:userId', authenticateJwt, UsuarioController.mudarSenha);

export default router;
