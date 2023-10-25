import { EntitySchema } from 'typeorm';
import ServicoVeterinarioModel from '../models/ServicoVeterinarioModel.js';

export default new EntitySchema({
  name: 'ServicoVeterinarioModel',
  tableName: 'SERVICOS_VETERINARIO',
  target: ServicoVeterinarioModel,
  columns: {
    idVeterinario: {
      primary: true,
      type: 'int',
    },
    idServico: {
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
    servico: {
      type: 'many-to-one',
      target: 'ServicoModel',
      joinColumn: {
        name: 'idServico',
      },
    },
  },
});
