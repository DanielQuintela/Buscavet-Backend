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
      nullable: true,
    },
    raca: {
      type: 'text',
      nullable: true,
    },
    dataNascimento: {
      type: 'date',
      nullable: true,
    },
    sexo: {
      type: 'text',
      nullable: true,
    },
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
