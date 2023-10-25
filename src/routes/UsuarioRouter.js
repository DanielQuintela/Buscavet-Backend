import express from 'express';
import UsuarioController from '../controllers/UsuarioController.js';
import authenticateJwt from '../middlewares/AuthMiddleware.js';
import BlacklistController from '../controllers/BlacklistController.js';

const router = express.Router();

router
  .get('/usuarios/:id', authenticateJwt, UsuarioController.buscarUsuarioId)
  .get('/usuarios/email', UsuarioController.buscarUsuarioEmail)
  .get('/usuarios', UsuarioController.buscarUsuarios)
  .post('/usuarios/login', UsuarioController.loginUsuario)
  .post('/usuarios/logout', BlacklistController.adicionarBlacklist)
  .post('/usuarios', UsuarioController.cadastrarUsuario)
  .patch('/usuarios/:id', authenticateJwt, (req, res, next) => {
    const userIdAutenticado = req.user.userId;
    const userIdRota = req.params.id;
    if (String(userIdAutenticado) === String(userIdRota)) {
      next();
    } else {
      res.status(403).json({ message: 'Acesso Proibido' });
    }
  }, UsuarioController.mudarSenha);

export default router;
