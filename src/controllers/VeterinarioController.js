import db from '../config/dbConfig.js';
import { VeterinarioSchema } from '../entity/index.js';
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

  static buscarVeterinarios = async (req, res) => {
    try {
      const veterinarioRepository = db.manager.getRepository(VeterinarioSchema);
      const result = await veterinarioRepository.find({
        select: {
          id: true, nome: true, email: true, crmv: true,
        },
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
}
