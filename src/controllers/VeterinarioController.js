import EncryptedService from '../Services/EncryptedService.js';
import db from '../config/dbConfig.js';
import VeterinarioSchema from '../entity/VeterinarioSchema.js';

export default class VeterinarioController {
  static loginVeterinario = async (req, res) => {
    try {
      const encryptedService = EncryptedService();
      const { email, senha } = req.body;
      const veterinarioRepository = db.manager.getRepository(VeterinarioSchema);
      const buscarVeterinario = await veterinarioRepository.find({ email });

      if (buscarVeterinario.length === 0) {
        res.status(404).send({ message: 'Veterinário não encontrado' });
        return;
      }
      const validatePassword = encryptedService.comparePassword(senha, buscarVeterinario[0].senha);

      if (!validatePassword) {
        res.status(401).send({ message: 'Senha incorreta' });
        return;
      }

      res.status(200).send({ message: 'Login realizado com sucesso' });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

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
