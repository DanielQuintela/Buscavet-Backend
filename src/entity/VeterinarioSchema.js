import { EntitySchema } from 'typeorm';
import VeterinarioModel from '../models/VeterinarioModel.js';

export default new EntitySchema({
  name: 'VeterinarioModel',
  tableName: 'veterinarios',
  target: VeterinarioModel,
  columns: {
    id: {
      primary: true, type: 'int', generated: true,
    },
    nome: {
      type: 'text',
    },
    email: {
      type: 'text',
    },
    senha: {
      type: 'text',
    },
    crmv: {
      type: 'text',
    },
  },

});
