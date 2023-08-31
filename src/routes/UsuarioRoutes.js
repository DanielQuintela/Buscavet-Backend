import express from 'express';
import UsuarioController from '../controllers/UsuarioController';

const router = express.Router();

router
  .get('/usuarios', UsuarioController.buscarUsuarios)
  .post('/usuario/login', UsuarioController.loginUsuario)
  .post('/usuarios', UsuarioController.cadastrarUsuario)
  .post('/usuario/update/password', UsuarioController.changePassword);

export default router;
