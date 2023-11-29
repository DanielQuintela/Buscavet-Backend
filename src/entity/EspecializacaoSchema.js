import { EntitySchema } from 'typeorm';
import EspecializacaoModel from '../models/EspecializacaoModel.js';

export default new EntitySchema({
  name: 'EspecializacaoModel',
  tableName: 'ESPECIALIZACOES',
  target: EspecializacaoModel,
  columns: {
    idEspecializacao: {
      primary: true,
      type: 'int',
      generated: true,
      array: true,
    },
    nome: {
      type: 'text',
    },
  },
});
