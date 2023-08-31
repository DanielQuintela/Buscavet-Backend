import mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    nome: {
      type: String,
      required: [true, 'Nome é Obrigatório'],
    },
    email: {
      type: String,
      required: [true, 'E-mail é Obrigatório'],
      unique: [true, 'E-mail já cadastrado'],
    },
    senha: {
      type: String,
      required: [true, 'Senha é Obrigatório'],
    },
    telefones: [{
      numero: {
        type: String,
      },
    }],
    endereco: {
      cep: {
        type: String,
      },
      logradouro: {
        type: String,
      },
      numero: {
        type: String,
      },
    },
    aniversario: {
      type: Date,

    },
    type_user: {
      type: String,
      default: 'user',
    },
    data_criacao: {
      type: Date,
      default: Date.now,
    },
    data_atualizacao: {
      type: Date,
      default: Date.now,
    },
    ultimo_login: {
      type: Date,
      default: Date.now,
    },

  },
  {
    versionKey: false,
  },
);

const UsuarioModel = mongoose.model('Usuario', UsuarioSchema);

export default UsuarioModel;
