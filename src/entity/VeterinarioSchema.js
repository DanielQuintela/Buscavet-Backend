import { EntitySchema } from 'typeorm';
import VeterinarioModel from '../models/VeterinarioModel.js';

export default new EntitySchema({
  name: 'VeterinarioModel',
  tableName: 'veterinarios',
  target: VeterinarioModel,
  columns: {
    idVeterinario: {
      primary: true, type: 'int', generated: true,
    },
    crmv: {
      type: 'text',
      unique: true,
      nullable: false,
    },
    telefoneComercial: {
      type: 'text',
      unique: true,
    },
    // enderecoComercial: {
    //   type: 'text',
    // },
    // situacaoCadastro: {
    //   type: 'text',
    // },
    // cidadeComercial: {
    //   type: 'text',
    // },
    // cepComercial: {
    //   type: 'text',
    // },
    // estadoComercial: {
    //   type: 'text',
    // },
    // emailComercial: {
    //   type: 'text',
    // },
  },
  relations: {
    idUsuario: {
      target: 'usuarios',
      type: 'one-to-one',
      joinColumn: {
        name: 'idUsuario', // Deve corresponder ao nome da coluna na tabela usuarios
      },
      nullable: false, // Não pode ser nulo
    },
  },
});
