import express from 'express';
import UsuarioController from '../controllers/UsuarioController.js';
import authenticateJwt from '../middlewares/AuthMiddleware.js';
import BlacklistController from '../controllers/BlacklistController.js';
import InformacoesAdicionaisController from '../controllers/InformacoesAdicionaisController.js';

const router = express.Router();

router
  .get('/usuarios', authenticateJwt, UsuarioController.buscarUsuarioId)
  .get('/usuarios/email', UsuarioController.buscarUsuarioEmail)
  .get('/usuarios/all', UsuarioController.buscarUsuarios)
  .post('/usuarios/login', UsuarioController.loginUsuario)
  .post('/usuarios/logout', BlacklistController.adicionarBlacklist)
  .post('/usuarios', UsuarioController.cadastrarUsuario)
  .post('/usuarios/information', InformacoesAdicionaisController.cadastrarInformacoesAdicionais)
  .patch('/usuarios/:id', authenticateJwt, (req, res, next) => {
    const userIdAutenticado = req.user.userId;
    const userIdRota = req.params.id;
    if (String(userIdAutenticado) === String(userIdRota)
    && String(req.user.userEmail) === String(req.body.email)) {
      next();
    } else {
      res.status(403).json({ message: 'Acesso Proibido' });
    }
  }, UsuarioController.mudarSenha);

export default router;
