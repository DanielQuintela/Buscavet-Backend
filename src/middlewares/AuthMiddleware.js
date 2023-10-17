import JwtService from '../Services/JwtService.js';

export default function authenticateJwt(req, res) {
  const { token } = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  try {
    const user = JwtService.verifyToken(token);
    req.user = user;
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido ou expiradooooooo' });
  }
  return { authenticateJwt };
}
