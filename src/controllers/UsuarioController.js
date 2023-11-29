import { In } from 'typeorm';
import { validarCPF, EncryptedService } from '../Services/index.js';
import db from '../config/dbConfig.js';
import {
  ClienteSchema,
  EspecializacaoSchema,
  UsuarioSchema,
  VeterinarioSchema,
} from '../entity/index.js';
import JwtService from '../Services/JwtService.js';
// import validarCRMV from '../Services/ValidarCfmv.js';

export default class UsuarioController {
  static buscarUsuarioId = async (req, res) => {
    try {
      const userRepository = db.manager.getRepository(UsuarioSchema);
      const result = await userRepository.find({
        where: { idUsuario: req.user.userId },
        select: {
          nome: true,
          email: true,
          dataNascimento: true,
          telefone: true,
          endereco: true,
          cidade: true,
          estado: true,
          cep: true,
          numero: true,
          complemento: true,
        },
      });
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static buscarUsuarioEmail = async (req, res) => {
    try {
      const userRepository = db.manager.getRepository(UsuarioSchema);
      const result = await userRepository.find({ where: { email: req.body.email } });
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static buscarUsuarios = async (req, res) => {
    try {
      const userRepository = db.manager.getRepository(UsuarioSchema);
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
      const userRepository = db.manager.getRepository(UsuarioSchema);
      const clientRepository = db.manager.getRepository(ClienteSchema);
      const encryptedService = EncryptedService();
      const senha = encryptedService.encryptPassword(req.body.senha);

      const { email, cpf } = req.body;

      const CPFValidado = await validarCPF(cpf);

      if (!CPFValidado) {
        res.status(401).send({ message: 'CPF inválido' });
        return;
      }

      if (email === undefined || email === '') {
        res.status(400).send({ message: 'Email é obrigatório' });
        return;
      }
      if (req.body.senha.length < 2) {
        res.status(401).send({ message: 'senha deve ter no mínimo 3 caracteres' });
        return;
      }

      const tipoUsuario = 'c';
      const result = await userRepository.save({ ...req.body, senha, tipoUsuario });
      const getId = await userRepository.find({ where: { email } });
      await clientRepository.save({ id: getId[0].idUsuario, idUsuario: getId[0].idUsuario });

      res.status(201).send(result);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  // Função para cadastrar veterinário, se já existir o usuário ele também vai ser cadastrado
  static cadastrarUsuarioVeterinario = async (req, res) => {
    try {
      const encryptedService = EncryptedService();
      const senha = encryptedService.encryptPassword(req.body.senha);

      const userRepository = db.manager.getRepository(UsuarioSchema);
      const vetRepository = db.manager.getRepository(VeterinarioSchema);
      const espRepository = db.manager.getRepository(EspecializacaoSchema);
      // const { crmv } = req.body;
      const { email } = req.body;
      // const crmvValidado = await validarCRMV(crmv);

      if (req.body.crmv.length < 5) {
        res.status(400).send({ message: 'CRMV é obrigatório' });
        return;
      }
      if (email === undefined || email === '') {
        res.status(400).send({ message: 'Email é obrigatório' });
        return;
      }
      if (req.body.senha.length < 3) {
        res.status(401).send({ message: 'senha deve ter no mínimo 3 caracteres' });
        return;
      }

      // if (!crmvValidado) {
      //   res.status(404).send({ message: 'CRMV não encontrado' });
      //   return;
      // }

      const buscarUsuario = await userRepository.find({ where: { email: req.body.email } });
      const especialidadesIds = req.body.especializacoes.map(
        (especializacao) => especializacao.idEspecializacao,
      );
      const especialidadesExistentes = await espRepository.find({
        where: { idEspecializacao: In(especialidadesIds) },
      });

      const especialidadesExistentesIds = especialidadesExistentes.map(
        (especialidade) => especialidade.idEspecializacao,
      );
      const especialidadesNaoEncontradas = especialidadesIds.filter(
        (id) => !especialidadesExistentesIds.includes(id),
      );

      if (especialidadesNaoEncontradas.length > 0) {
        res.status(404).send({ message: `Especialidades não encontradas: ${especialidadesNaoEncontradas.join(', ')}` });
        return;
      }
      const usuario = buscarUsuario[0];

      if (buscarUsuario.length !== 0) {
        const senhaU = buscarUsuario[0].senha;
        const validatePassword = encryptedService.comparePassword(req.body.senha, senhaU);

        if (!validatePassword) {
          res.status(401).send({ message: 'Senha incorreta' });
          return;
        }
        if (especialidadesIds.length === 0) {
          res.status(500).send({ message: 'Especialidade vazia' });
          return;
        }
        if (usuario.tipoUsuario === 'vu' || usuario.tipoUsuario === 'vc') {
          res.status(403).send({ message: 'Veterinario já cadastrado' });
          return;
        }
        if (usuario.tipoUsuario === 'c') {
          if (usuario.idUsuario !== null) {
            const savedVet = await vetRepository.save({
              ...req.body,
              idUsuario: usuario.idUsuario,
              situacao: 'aprovado',
              idVeterinario: usuario.idUsuario,
              idEspecializacao: especialidadesIds,
            });
            await userRepository.update({ idUsuario: usuario.idUsuario }, { tipoUsuario: 'vc' });
            res.status(201).send(savedVet);
          } else {
            res.status(404).send({ message: 'usuario não encontrado' });
            res.status(500).send({ message: 'Campos incompletos' });
          }
          return;
        }
      }

      if (buscarUsuario.length === 0) {
        const tipoUsuario = 'c';
        const situacao = 'aprovado';
        await userRepository.save({ ...req.body, senha, tipoUsuario });
        const buscarUsuariov = await userRepository.find({ where: { email: req.body.email } });
        const { idUsuario } = buscarUsuariov[0];
        if (idUsuario !== null) {
          const savedVet = await vetRepository.save({
            ...req.body,
            idUsuario,
            situacao,
            idVeterinario: idUsuario,
            idEspecializacao: especialidadesIds,
          });
          await userRepository.update({ idUsuario }, { tipoUsuario: 'vu' });
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
      const jwtService = JwtService();

      const { email, senha } = req.body;
      const userRepository = db.manager.getRepository(UsuarioSchema);
      const buscarUsuario = await userRepository.find({ where: { email } });

      if (email === '') {
        res.status(400).send({ message: 'Email é obrigatório' });
        return;
      }
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
      const token = jwtService.generateToken({ userId: user.idUsuario, userEmail: user.email });
      res.status(200).send({ message: 'Login realizado com sucesso', token }); // TODO: Fazer um login, falta o token Cookies ou jwt
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static mudarSenha = async (req, res) => {
    try {
      const encryptedService = EncryptedService();
      const userRepository = db.manager.getRepository(UsuarioSchema);
      const { senha, novaSenha } = req.body;
      const usuarioId = req.user.userId;
      const user = await userRepository.findOne({ where: { idUsuario: usuarioId } });

      if (!user) {
        req.status(404).send({ message: 'Usuario não encontrado' });
      }

      const validatePassword = encryptedService.comparePassword(senha, user.senha);

      if (!validatePassword) {
        res.status(401).send({ message: 'Senha incorreta' });
        return;
      }

      const senhaCod = encryptedService.encryptPassword(novaSenha);

      await userRepository.update(usuarioId, { senha: senhaCod });
      res.status(200).send({ message: 'Senha alterada com sucesso' });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };
}
