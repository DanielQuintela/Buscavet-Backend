import EncryptedService from '../Services/EncryptedService.js';
import db from '../config/dbConfig.js';
import VeterinarioSchema from '../entity/VeterinarioSchema.js';

export default class VeterinarioController {
  static cadastrarVeterinario = async (req, res) => {
    try {
      const encryptedService = EncryptedService();
      const veterinarioRepository = db.manager.getRepository(VeterinarioSchema);
      const senha = encryptedService.encryptPassword(req.body.senha);
      const result = await veterinarioRepository.save({ ...req.body, senha });
      res.status(201).send(result);
    } catch (error) {
      res.status(500).send({ message: error.message });
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
}
