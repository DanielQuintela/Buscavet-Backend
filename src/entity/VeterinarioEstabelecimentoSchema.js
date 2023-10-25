import { EntitySchema } from 'typeorm';
import VeterinarioEstabelecimentoModel from '../models/VeterinarioEstabelecimentoModel.js';

export default new EntitySchema({
  name: 'VeterinarioEstabelecimentoModel',
  tableName: 'VETERINARIOS_ESTABELECIMENTO',
  target: VeterinarioEstabelecimentoModel,
  columns: {
    idVeterinario: {
      primary: true,
      type: 'int',
    },
    idEstabelecimento: {
      primary: true,
      type: 'int',
    },
  },
  relations: {
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
