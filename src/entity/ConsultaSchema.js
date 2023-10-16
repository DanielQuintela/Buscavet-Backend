import { EntitySchema } from 'typeorm';
import ConsultaModel from '../models/ConsultaModel.js';

export default new EntitySchema({
  name: 'ConsultaModel',
  tableName: 'CONSULTAS',
  target: ConsultaModel,
  columns: {
    id: {
      primary: true, type: 'int', generated: true,
    },
    idCliente: {
      type: 'int',
    },
    idEstabelecimento: {
      type: 'int',
      nullable: true,
    },
    idVeterinario: {
      type: 'int',
    },
    idAnimal: {
      type: 'int',
    },
    data: {
      type: 'date',
    },
    hora: {
      type: 'time',
    },
    situacao: {
      type: 'text',
    },
    observacoes: {
      type: 'text',
      nullable: true,
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
    estabelecimento: {
      type: 'many-to-one',
      target: 'EstabelecimentoModel',
      joinColumn: {
        name: 'idEstabelecimento',
      },
    },
    veterinario: {
      type: 'many-to-one',
      target: 'VeterinarioModel',
      joinColumn: {
        name: 'idVeterinario',
      },
    },
    animal: {
      type: 'many-to-one',
      target: 'AnimalEstimacaoModel',
      joinColumn: {
        name: 'idAnimal',
      },
    },
  },
});
