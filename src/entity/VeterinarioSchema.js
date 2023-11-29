import { EntitySchema } from 'typeorm';
import VeterinarioModel from '../models/VeterinarioModel.js';

export default new EntitySchema({
  name: 'VeterinarioModel',
  tableName: 'VETERINARIOS',
  target: VeterinarioModel,
  columns: {
    idVeterinario: {
      primary: true, type: 'int',
    },
    crmv: {
      type: 'text',
      unique: true,
      comment: 'CRMV do veterinário é único',
    },
    situacao: {
      type: 'text',
    },
    emailComercial: {
      type: 'text',
    },
    enderecoComercial: {
      type: 'text',
      nullable: true,
    },
    telefoneComercial: {
      type: 'text',
      nullable: true,
    },
    cepComercial: {
      type: 'text',
      nullable: true,
    },
    cidadeComercial: {
      type: 'text',
      nullable: true,
    },
    estadoComercial: {
      type: 'text',
      nullable: true,
    },
    idEspecializacao: {
      type: 'text',
      array: true,
    },
    idUsuario: {
      type: 'text',
    },
  },

  relations: {
    usuario: {
      type: 'one-to-one',
      target: 'UsuarioModel',
      joinColumn: {
        name: 'idUsuario',
      },
      nullable: false,
    },
    especializacao: {
      type: 'many-to-many',
      target: 'EspecializacaoModel',
      joinColumn: {
        name: 'idEspecializacao',
      },
    },
  },
});
