import { EntitySchema } from 'typeorm';
import VacinaModel from '../models/VacinaModel.js';

export default new EntitySchema({
  name: 'VacinaModel',
  tableName: 'VACINAS',
  target: VacinaModel,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    nome: {
      type: 'text',
    },
  },
});
