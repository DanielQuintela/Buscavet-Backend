import db from '../config/dbConfig.js';
import { ClienteSchema, VeterinarioSchema } from '../entity/index.js';
import UsuarioController from './UsuarioController.js';
// import UsuarioController from './UsuarioController.js';

export default class VeterinarioController {
  static buscarVeterinariosId = async (req, res) => {
    try {
      const veterinarioRepository = db.manager.getRepository(VeterinarioSchema);
      const result = await veterinarioRepository.find({ where: { idVeterinario: req.params.id } });
      res.status(200).send(result);
    } catch (erro) {
      res.status(500).send({ message: erro.message });
    }
  };

  static buscarVeterinariosEmail = async (req, res) => {
    try {
      const veterinarioRepository = db.manager.getRepository(VeterinarioSchema);
      const result = await veterinarioRepository.find({ where: { emailComercial: req.body.emailComercial } });
      res.status(200).send(result);
    } catch (erro) {
      res.status(500).send({ message: erro.message });
    }
  };

  static buscarVeterinariosEspecializacao = async (res, req) => {
    try {
      const veterinarioRepository = db.manager.getRepository(VeterinarioSchema);
      const result = await veterinarioRepository.find({ where: { idEspecializacao: req.body.idEspecializacao } });
      res.status(200).send(result);
    } catch (erro) {
      res.status(500).send({ message: erro.message });
    }
  };

  static buscarVeterinarios = async (req, res) => {
    try {
      const veterinarioRepository = db.manager.getRepository(VeterinarioSchema);
      const result = await veterinarioRepository.find({

      });
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static cadastrarVeterinario = async (req, res) => {
    try {
      const saved = await UsuarioController.cadastrarUsuarioVeterinario(req, res);

      res.status(201).send(saved);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static veterinarioParaCliente = async (req, res) => {
    try {
      const veterinarioRepository = db.manager.getRepository(VeterinarioSchema);
      const clientRepository = db.manager.getRepository(ClienteSchema);
      const usuarioRepository = db.manager.getRepository(UsuarioSchema);
      const busca = await veterinarioRepository.find({
        where: {
          idVeterinario: req.params.id,
        },
      });

      const verificacao = await clientRepository.find({
        where: {
          idUsuario: busca[0].idUsuario,
        },
      });

      const { idUsuario } = busca[0];
      if (!idUsuario) {
        res.status(404).send({ message: 'Veterinario não encontrado' });
        return;
      }

      if (verificacao.length > 0) {
        res.status(403).send({ message: 'Veterinario já é um cliente' });
        return;
      }

      const saved = await clientRepository.save({
        id: idUsuario,
        idUsuario,
      });

      await usuarioRepository.update({ idUsuario }, { tipoUsuario: 'vc' });

      res.status(200).send(saved);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };
}
