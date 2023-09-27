import { EntitySchema } from 'typeorm';
import EstabelecimentoModel from '../models/EstabelecimentoModel.js';

export default new EntitySchema({
  name: 'EstabelecimentoModel',
  tableName: 'ESTABALECIMENTOS',
  target: EstabelecimentoModel,
  columns: {
    id: {
      primary: true, type: 'int', generated: true,
    },
    razaoSocial: {
      type: 'text',
    },
    nomeFantasia: {
      type: 'text',
    },
    cnpj: {
      type: 'text',
    },
    endereco: {
      type: 'text',
    },
    telefone: {
      type: 'text',
    },
    cidade: {
      type: 'text',
    },
    estado: {
      type: 'text',
    },
    cep: {
      type: 'text',
    },
    email: {
      type: 'text',
    },
    tipoEstabelecimento: {
      type: 'text',
    },
  },
});
