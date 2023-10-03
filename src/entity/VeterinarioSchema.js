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
    },
    situacao: {
      type: 'text',
    },
    emailComercial: {
      type: 'text',
    },
    // enderecoComercial: {
    //   type: 'text',
    // },
    // telefoneComercial: {
    //   type: 'text',
    // },
    // cepComercial: {
    //   type: 'text',
    // },
    // cidadeComercial: {
    //   type: 'text',
    // },
    // estadoComercial: {
    //   type: 'text',
    // },
    // idEspecializacao: {
    //   type: 'text',
    // },
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
      type: 'many-to-one',
      target: 'EspecializacaoModel',
      joinColumn: {
        name: 'idEspecializacao',
      },
    },
  },
//   listeners: {
//     beforeInsert(event) {
//       // Defina o idVeterinario igual ao idUsuario antes da inserção
//       const newEntity = { ...event.entity, idVeterinario: event.entity.idUsuario };
//       event.entity = Object.assign({}, newEntity);
//     },
//   },
});
