import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: { 
            type: String, 
            required: [true, "Nome é Obrigatório" ]
        },
        email: {
            type: String,
            required: [true, "E-mail é Obrigatório"],
            unique: [true, "E-mail já cadastrado"],
        },
        senha: {
            type: String,
            required: [true, "Senha é Obrigatório"]
        },
    },
    {
        versionKey: false
    }
);

const UsuarioModel = mongoose.model('usuario', UsuarioSchema);

export default UsuarioModel;