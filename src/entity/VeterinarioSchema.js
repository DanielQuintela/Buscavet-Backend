import { EntitySchema } from 'typeorm';
import VeterinarioModel from '../models/VeterinarioModel.js';

export default new EntitySchema({
  name: 'VeterinarioModel',
  tableName: 'VETERINARIOS',
  target: VeterinarioModel,
  columns: {
    id: {
      primary: true, type: 'int', generated: true,
    },
    crmv: {
      type: 'text',
    },
    situacao: {
      type: 'text',
    },
    enderecoComercial: {
      type: 'text',
    },
    telefoneComercial: {
      type: 'text',
    },
    cepComercial: {
      type: 'text',
    },
    cidadeComercial: {
      type: 'text',
    },
    estadoComercial: {
      type: 'text',
    },
    emailComercial: {
      type: 'text',
    },
    idEspecializacao: {
      type: 'text',
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
    },
    especializacao: {
      type: 'many-to-one',
      target: 'EspecializacaoModel',
      joinColumn: {
        name: 'idEspecializacao',
      },
    },
  },

});
