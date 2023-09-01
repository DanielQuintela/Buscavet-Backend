import { EntitySchema } from 'typeorm';
import UsuarioModel from '../models/UsuarioModel.js';

export default new EntitySchema({
  name: 'UsuarioModel',
  tableName: 'usuarios',
  target: UsuarioModel,
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
  },

});
