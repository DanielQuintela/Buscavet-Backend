import { EntitySchema } from 'typeorm';
import ProdutoModel from '../models/ProdutoModel.js';

export default new EntitySchema({
  name: 'ProdutoModel',
  tableName: 'PRODUTOS',
  target: ProdutoModel,
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
