import { EntitySchema } from 'typeorm';
import UsuarioModel from '../models/UsuarioModel.js';

export default new EntitySchema({
  name: 'UsuarioModel',
  tableName: 'usuarios',
  target: UsuarioModel,
  columns: {
    idUsuario: {
      primary: true, type: 'int', generated: true,
    },
    nome: {
      type: 'text',
    },
    email: {
      type: 'text',
      nullable: false,
      unique: true,
    },
    senha: {
      type: 'text',
      nullable: false,
    },
    // cpf: {
    //   type: 'text',
    // },
    // telefone: {
    //   type: 'text',
    // },
    // endereco: {
    //   type: 'text',
    // },
    // cidade: {
    //   type: 'text',
    // },
    // cep: {
    //   type: 'text',
    // },
    // estado: {
    //   type: 'text',
    // },
    // dataNascimento: {
    //   type: 'text',
    // },
    tipoUsuario: {
      type: 'text',
      nullable: true,
      // enum: ['c', 'vc'],
    },
  },
  relarions: {
    IdVeterinario: {
      target: 'veterinarios',
      type: 'one-to-one',
      joinColumn: {
        name: 'idVeterinario',
      },
      inverseJoinColumn: {
        name: 'idUsuario', // O nome da coluna na tabela veterinarios que faz referência ao usuário
      },
    },
  },

});
