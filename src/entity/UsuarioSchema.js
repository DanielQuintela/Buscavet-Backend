import { EntitySchema } from 'typeorm';
import UsuarioModel from '../models/UsuarioModel.js';

export default new EntitySchema({
  name: 'UsuarioModel',
  tableName: 'USUARIOS',
  target: UsuarioModel,
  columns: {
    idUsuario: {
      primary: true, type: 'int', generated: true,
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
    nome: {
      type: 'text',
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
    // estado: {
    //   type: 'text',
    // },
    // cep: {
    //   type: 'text',
    // },
    // dataNascimento: {
    //   type: 'text',
    // },
    tipoUsuario: {
      type: 'text',
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
