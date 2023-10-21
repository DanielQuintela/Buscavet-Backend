import BlacklistController from '../controllers/BlacklistController.js';

export default async function logout(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(400).json({ message: 'Token nao fornecido' });
  }
  try {
    await BlacklistController.adicionarBlacklist(token);
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro durante o logout' });
  }
  return { logout };
}
