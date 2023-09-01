import { EntitySchema } from 'typeorm';
import Veterinario from '../models/VeterinarioModel.js';

export default new EntitySchema({
  name: 'Veterinario',
  tableName: 'veterinarios',
  target: Veterinario,
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
