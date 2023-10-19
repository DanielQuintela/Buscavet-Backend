import JwtService from '../Services/JwtService.js';
import BlacklistController from '../controllers/BlacklistController.js';

export default function authenticateJwt(req, res, next) {
  const token = req.headers.authorization;
  const jwtService = JwtService();
  if (!token) {
    return res.status(400).json({ message: 'Token não fornecido' });
  }
  // TODO Backlist para logout
  
  try {
    const user = jwtService.verifyToken(token);
    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expirado' });
    }
    return res.status(401).json({ message: 'Token inválido' });
  }
  return { authenticateJwt };
}
