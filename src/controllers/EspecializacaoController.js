import db from '../config/dbConfig.js';
import { EspecializacaoSchema } from '../entity/index.js';

export default class EspecializacaoController {
  static cadastrarEspecializacao = async (req, res) => {
    try {
      const especializacaoRepository = db.manager.getRepository(EspecializacaoSchema);
      const { nome } = req.body;
      const result = await especializacaoRepository.save({ nome });
      res.status(201).send(result);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static buscarEspecializacao = async (req, res) => {
    try {
      const especializacaoRepository = db.manager.getRepository(EspecializacaoSchema);
      const result = await especializacaoRepository.find({
        select: {
          id: true,
          nome: true,
        },
      });
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };
}
