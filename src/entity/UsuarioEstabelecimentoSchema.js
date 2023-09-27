import { EntitySchema } from 'typeorm';
import UsuarioEstabelecimentoModel from '../models/UsuarioEstabelecimentoModel.js';

export default new EntitySchema({
  name: 'UsuarioEstabelecimentoModel',
  tableName: 'USUARIOS_ESTABELECIMENTO',
  target: UsuarioEstabelecimentoModel,
  columns: {
    idUsuario: {
      primary: true,
      type: 'int',
    },
    idEstabelecimento: {
      primary: true,
      type: 'int',
    },
  },
  relations: {
    usuario: {
      type: 'many-to-one',
      target: 'UsuarioModel',
      joinColumn: {
        name: 'idUsuario',
      },
    },
    estabelecimento: {
      type: 'many-to-one',
      target: 'EstabelecimentoModel',
      joinColumn: {
        name: 'idEstabelecimento',
      },
    },
  },
});
