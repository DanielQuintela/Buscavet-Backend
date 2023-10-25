import JwtService from '../Services/JwtService.js';
import BlacklistController from '../controllers/BlacklistController.js';

export default async function authenticateJwt(req, res, next) {
  const token = req.headers.authorization;
  const jwtService = JwtService();
  if (!token) {
    return res.status(400).json({ message: 'Token não fornecido' });
  }

  try {
    const user = jwtService.verifyToken(token);
    const verificaToken = await BlacklistController.verificaTokenBlacklist(token);
    if (verificaToken) {
      return res.status(401).json({ message: 'Token na lista negra' });
    }
    if (String(user.userId) === String(req.params.id) && String(user.userEmail) === String(req.body.email)) {
      req.user = user;
      next();
    } else {
      return res.status(403).json({ message: 'Acesso proibido, dados não coincidem' });
    }
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expirado' });
    }
    return res.status(401).json({ message: 'Token inválido' });
  }

  return { authenticateJwt };
}
