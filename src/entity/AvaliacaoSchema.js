import { EntitySchema } from 'typeorm';
import AvaliacaoModel from '../models/AvaliacaoModel.js';

export default new EntitySchema({
  name: 'AvaliacaoModel',
  tableName: 'AVALIACOES',
  target: AvaliacaoModel,
  columns: {
    id: {
      primary: true, type: 'int', generated: true,
    },
    nota: {
      type: 'float',
    },
    comentario: {
      type: 'text',
    },
    idCliente: {
      type: 'int',
    },
    idVeterinario: {
      type: 'int',
    },
    idEstabelecimento: {
      type: 'int',
    },
  },

  relations: {
    cliente: {
      type: 'many-to-one',
      target: 'ClienteModel',
      joinColumn: {
        name: 'idCliente',
      },
    },
    veterinario: {
      type: 'many-to-one',
      target: 'VeterinarioModel',
      joinColumn: {
        name: 'idVeterinario',
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
