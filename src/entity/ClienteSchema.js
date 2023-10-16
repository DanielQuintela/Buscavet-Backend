import { EntitySchema } from 'typeorm';
import ClienteModel from '../models/ClienteModel.js';

export default new EntitySchema({
  name: 'ClienteModel',
  tableName: 'CLIENTES',
  target: ClienteModel,
  columns: {
    id: {
      primary: true, type: 'int',
    },
    idUsuario: {
      type: 'int',
    },
  },

  relations: {
    usuario: {
      type: 'one-to-one',
      target: 'UsuarioModel',
      joinColumn: {
        name: 'idUsuario',
      },
    },
  },

});
