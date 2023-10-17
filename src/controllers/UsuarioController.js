import EncryptedService from '../Services/EncryptedService.js';
import db from '../config/dbConfig.js';
import UsuarioSchema from '../entity/UsuarioSchema.js';
import JwtService from '../Services/JwtService.js';

export default class UsuarioController {
  static buscarUsuarios = async (req, res) => {
    try {
      const userRepository = db.manager.getRepository(UsuarioSchema);
      const result = await userRepository.find({ select: { id: true, nome: true, email: true } });
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static cadastrarUsuario = async (req, res) => {
    try {
      const encryptedService = EncryptedService();
      const senha = encryptedService.encryptPassword(req.body.senha);

      const userRepository = db.manager.getRepository(UsuarioSchema);
      const result = await userRepository.save({ ...req.body, senha });
      res.status(201).send(result);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static loginUsuario = async (req, res) => {
    try {
      const encryptedService = EncryptedService();
      const jwtService = JwtService();

      const { email, senha } = req.body;
      const userRepository = db.manager.getRepository(UsuarioSchema);
      const buscarUsuario = await userRepository.find({ where: { email } });

      if (buscarUsuario.length === 0) {
        res.status(404).send({ message: 'Usuário não encontrado' });
        return;
      }
      const user = buscarUsuario[0];

      const validatePassword = encryptedService.comparePassword(senha, user.senha);

      if (!validatePassword) {
        res.status(401).send({ message: 'Senha incorreta' });
        return;
      }
      const token = jwtService.generateToken({ userId: user.id });

      res.status(200).send({ message: 'Login realizado com sucesso', token }); // TODO: Fazer um login, falta o token Cookies ou jwt
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static mudarSenha = async (req, res) => {
    try {
      const encryptedService = EncryptedService();
      const userRepository = db.manager.getRepository(UsuarioSchema);
      const { email, senha, novaSenha } = req.body;
      const buscarUsuario = await userRepository.find({ id: req.params.id });

      if (buscarUsuario.length === 0) {
        res.status(404).send({ message: 'Usuário não encontrado' });
        return;
      }
      const user = buscarUsuario[0];

      const validatePassword = encryptedService.comparePassword(senha, user.senha);

      if (!validatePassword) {
        res.status(401).send({ message: 'Senha incorreta' });
        return;
      }

      const senhaCod = encryptedService.encryptPassword(novaSenha);
      await userRepository.update({ email }, { senha: senhaCod });
      res.status(200).send({ message: 'Senha alterada com sucesso' });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };
}
