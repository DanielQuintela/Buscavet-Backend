import { EntitySchema } from 'typeorm';
import AnimalEstimacaoModel from '../models/AnimalEstimacaoModel.js';

export default new EntitySchema({
  name: 'AnimalEstimacaoModel',
  tableName: 'ANIMAIS_ESTIMACAO',
  target: AnimalEstimacaoModel,
  columns: {
    id: {
      primary: true, type: 'int', generated: true,
    },
    nome: {
      type: 'text',
    },
    especie: {
      type: 'text',
    },
    // raca: {
    //   type: 'text',
    // },
    // dataNascimento: {
    //   type: 'date',
    // },
    // sexo: {
    //   type: 'text',
    // },
    idCliente: {
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
  },
});
