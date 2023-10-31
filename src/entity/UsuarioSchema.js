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
    cpf: {
      type: 'text',
      nullable: true,
    },
    telefone: {
      type: 'text',
      nullable: true,
    },
    endereco: {
      type: 'text',
      nullable: true,
    },
    cidade: {
      type: 'text',
      nullable: true,
    },
    estado: {
      type: 'text',
      nullable: true,
    },
    cep: {
      type: 'text',
      nullable: true,
    },
    numero: {
      type: 'text',
      nullable: true,
    },
    complemento: {
      type: 'text',
      nullable: true,
    },
    dataNascimento: {
      type: 'text',
      nullable: true,
    },
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
