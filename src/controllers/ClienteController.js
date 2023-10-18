import db from '../config/dbConfig.js';
import { ClienteSchema } from '../entity/index.js';

export default class ClienteController {
  static async buscarClientes(req, res) {
    try {
      const clienteRepository = db.manager.getRepository(ClienteSchema);
      const result = await clienteRepository.find({ select: { id: true, idUsuario: true } });
      res.status(200).send(result);
    } catch (erro) {
      res.status(500).send({ message: erro.message });
    }
  }
}
