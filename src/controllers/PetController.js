import db from '../config/dbConfig.js';
import { AnimalEstimacaoSchema, ClienteSchema } from '../entity/index.js';

export default class PetController {
  static async buscarMeuPet(req, res) {
    try {
      const petRepository = db.manager.getRepository(AnimalEstimacaoSchema);
      const busca = await petRepository.find({ where: { idCliente: req.headers.authorization.userId } });
      res.status(200).send(busca);
    } catch (erro) {
      res.status(500).send({ message: erro.message });
    }
  }

  // Aqui é o método usado durante o desenvolvimento para testar a busca de pets
  static async buscarPets(req, res) {
    try {
      const petRepository = db.manager.getRepository(AnimalEstimacaoSchema);
      const busca = await petRepository.find({});
      res.status(200).send(busca);
    } catch (erro) {
      res.status(500).send({ message: erro.message });
    }
  }

  static async cadastrarPet(req, res) {
    try {
      const petRepository = db.manager.getRepository(AnimalEstimacaoSchema);
      const clientRepository = db.manager.getRepository(ClienteSchema);

      const user = await clientRepository.find({ where: { idCliente: req.headers.authorization.userId } });
      const cliente = user[0];

      if (!cliente) {
        res.status(404).send({ message: 'Usuário não encontrado' });
        return;
      }

      const novoPet = await petRepository.save({ ...req.body, idCliente: cliente.id });
      res.status(201).send(novoPet);
    } catch (erro) {
      res.status(500).send({ message: erro.message });
    }
  }

  static async deletarPet(req, res) {
    try {
      const petRepository = db.manager.getRepository(AnimalEstimacaoSchema);

      const { id } = req.body;
      const pets = await petRepository.find({ where: { idCliente: req.headers.authorization.userId, id } });

      if (!pets || pets.length === 0) {
        res.status(404).send({ message: 'Pet não encontrado' });
        return;
      }

      if (!id) {
        res.status(400).send({ message: 'Id do pet não informado' });
        return;
      }

      await petRepository.delete(pets);
      res.status(200).send({ message: 'Pet deletado com sucesso' });
    } catch (erro) {
      res.status(500).send({ message: erro.message });
    }
  }
}
