import { EntitySchema } from 'typeorm';
import ServicoModel from '../models/ServicoModel.js';

export default new EntitySchema({
  name: 'ServicoModel',
  tableName: 'SERVICOS',
  target: ServicoModel,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    descricao: {
      type: 'text',
    },
  },
});
