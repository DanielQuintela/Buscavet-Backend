import { EntitySchema } from 'typeorm';
import ProdutoEstabelecimentoModel from '../models/ProdutoEstabelecimentoModel.js';

export default new EntitySchema({
  name: 'ProdutoEstabelecimentoModel',
  tableName: 'PRODUTOS_ESTABELECIMENTO',
  target: ProdutoEstabelecimentoModel,
  columns: {
    idEstabelecimento: {
      primary: true,
      type: 'int',
    },
    idProduto: {
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
    produto: {
      type: 'many-to-one',
      target: 'ProdutoModel',
      joinColumn: {
        name: 'idProduto',
      },
    },
  },
});
