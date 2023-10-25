import { EntitySchema } from 'typeorm';
import ServicoEstabelecimentoModel from '../models/ServicoEstabelecimentoModel.js';

export default new EntitySchema({
  name: 'ServicoEstabelecimentoModel',
  tableName: 'SERVICOS_ESTABELECIMENTO',
  target: ServicoEstabelecimentoModel,
  columns: {
    idEstabelecimento: {
      primary: true,
      type: 'int',
    },
    idServico: {
      primary: true,
      type: 'int',
    },
  },
  relations: {
    estabelecimento: {
      type: 'many-to-one',
      target: 'EstabelecimentoModel',
      joinColumn: {
        name: 'idEstabelecimento',
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
