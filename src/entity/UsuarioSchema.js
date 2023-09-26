import { EntitySchema } from 'typeorm';
import UsuarioModel from '../models/UsuarioModel.js';

export default new EntitySchema({
  name: 'UsuarioModel',
  tableName: 'USUARIOS',
  target: UsuarioModel,
  columns: {
    id: {
      primary: true, type: 'int', generated: true,
    },
    email: {
      type: 'text',
    },
    senha: {
      type: 'text',
    },
    nome: {
      type: 'text',
    },
    cpf: {
      type: 'text',
    },
    telefone: {
      type: 'text',
    },
    endereco: {
      type: 'text',
    },
    cidade: {
      type: 'text',
    },
    estado: {
      type: 'text',
    },
    cep: {
      type: 'text',
    },
    tipo: {
      type: 'text',
    },
  },

});
