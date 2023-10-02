import EncryptedService from '../Services/EncryptedService.js';
import db from '../config/dbConfig.js';
import { UsuarioSchema, VeterinarioSchema } from '../entity/index.js';

export default class UsuarioController {
  static buscarUsuarioId = async (req, res) => {
    try {
      const userRepository = db.manager.getRepository(UsuarioSchema);
      const result = await userRepository.find({ where: { idUsuario: req.params.id } });
      res.status(200).send(result);
    } catch (erro) {
      res.status(500).send({ message: erro.message });
    }
  };

  static buscarUsuarioEmail = async (req, res) => {
    try {
      const userRepository = db.manager.getRepository(UsuarioSchema);
      const result = await userRepository.find({ where: { email: req.body.email } });
      res.status(200).send(result);
    } catch (erro) {
      res.status(500).send({ message: erro.message });
    }
  };

  // static buscarVeterinarioEmail = async (req, res) => {
  //   try {
  //     const userRepository = db.manager.getRepository(UsuarioSchema);
  //     const buscaUsuario = await userRepository.find({ where: { email: req.body.email } });
  //     const usuario = buscaUsuario[0];
  //     if (buscaUsuario.length === 0) {
  //       res.status(404).send({ message: 'Usuário não encontrado' });
  //       return;
  //     }
  //     const { idUsuario } = usuario;
  //     const vetRepository = db.manager.getRepository(VeterinarioSchema);
  //     const result = await vetRepository.find({ where: { idUsuario } });
  //     return result;
  //   } catch (erro) {
  //     res.status(500).send({ message: erro.message });
  //   }
  // };

  static buscarUsuarios = async (req, res) => {
    try {
      const userRepository = db.manager.getRepository(UsuarioSchema);
      // eslint-disable-next-line max-len
      const result = await userRepository.find({
        select: {
          idUsuario: true,
          nome: true,
          email: true,
          tipoUsuario: true,
        },
      });
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static cadastrarUsuario = async (req, res) => {
    try {
      const encryptedService = EncryptedService();
      const senha = encryptedService.encryptPassword(req.body.senha);

      const { email } = req.body;

      if (email === undefined || email === '') {
        res.status(401).send({ message: 'Email é obrigatório' });
        return;
      }
      if (req.body.senha.length < 2) {
        res.status(401).send({ message: 'senha deve ter no mínimo 3 caracteres' });
        return;
      }

      const userRepository = db.manager.getRepository(UsuarioSchema);
      const tipoUsuario = 'c';
      const result = await userRepository.save({ ...req.body, senha, tipoUsuario });
      res.status(201).send(result);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static cadastrarUsuarioVeterinario = async (req, res) => {
    try {
      const encryptedService = EncryptedService();
      const senha = encryptedService.encryptPassword(req.body.senha);

      const userRepository = db.manager.getRepository(UsuarioSchema);
      const vetRepository = db.manager.getRepository(VeterinarioSchema);

      const { email } = req.body;

      if (req.body.crmv === null || req.body.crmv.length > 6) {
        res.status(401).send({ message: 'CRMV é obrigatório' });
      } else if (email === undefined || email === '') {
        res.status(401).send({ message: 'Email é obrigatório' });
        return;
      } else if (req.body.senha.length < 3) {
        res.status(401).send({ message: 'senha deve ter no mínimo 3 caracteres' });
        return;
      }

      // TODO: VALIDAR O CRMV

      const buscarUsuario = await userRepository.find({ where: { email: req.body.email } });
      const usuario = buscarUsuario[0];

      if (buscarUsuario.length !== 0) {
        if (usuario.tipoUsuario === 'vc') {
          res.status(401).send({ message: 'Veterinario já cadastrado' });
          return;
        }
        if (usuario.tipoUsuario === 'c') {
          if (usuario.idUsuario !== null) {
            await userRepository.update({ idUsuario: usuario.idUsuario }, { tipoUsuario: 'vc' });
            // eslint-disable-next-line max-len
            const savedVet = await vetRepository.save({ ...req.body, idUsuario: usuario.idUsuario });
            res.status(201).send(savedVet);
          } else {
            res.status(404).send({ message: 'usuario não encontrado' });
          }
          return;
        }
      }
      if (buscarUsuario.length === 0) {
        const tipoUsuario = 'vc';
        const result = await userRepository.save({ ...req.body, senha, tipoUsuario });
        const { idUsuario } = result;
        if (idUsuario !== null) {
          const savedVet = await vetRepository.save({ ...req.body, idUsuario });
          res.status(201).send(savedVet);
        } else {
          res.status(404).send({ message: 'usuario não cadastrado' });
        }
      }
    } catch (erro) {
      res.status(500).send({ message: erro.message });
    }
  };

  static loginUsuario = async (req, res) => {
    try {
      const encryptedService = EncryptedService();

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
      res.status(200).send({ message: 'Login realizado com sucesso' }); // TODO: Fazer um login, falta o token Cookies ou jwt
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static mudarSenha = async (req, res) => {
    try {
      const encryptedService = EncryptedService();
      const userRepository = db.manager.getRepository(UsuarioSchema);
      const { email, senha, novaSenha } = req.body;
      const buscarUsuario = await userRepository.find({ idUsuario: req.params.id });

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
