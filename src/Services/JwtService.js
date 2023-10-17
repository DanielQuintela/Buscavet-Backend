import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY;

export default function JwtService() {
  function generateToken(payload) {
    return jwt.sign(payload, secretKey, { expiresIn: '300' });
  }

  function verifyToken(token) {
    try {
      return jwt.verify(token, secretKey);
    } catch (error) {
      throw new Error('Token inválido ou expirado');
    }
  }

  return { generateToken, verifyToken };
}
