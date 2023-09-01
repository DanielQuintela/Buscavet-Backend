import { EntitySchema } from 'typeorm';
import Usuario from '../models/UsuarioModel.js';

export default new EntitySchema({
  name: 'Usuario',
  tableName: 'usuarios',
  target: Usuario,
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
