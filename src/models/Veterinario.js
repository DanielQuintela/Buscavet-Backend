import mongoose from "mongoose";

const VeterinarioSchema = new mongoose.Schema(
    {
        id: {
            type: String
        },
        nome: { 
            type: String, 
            required: [true, "Nome é Obrigatório" ]
        },
        email: {
            type: String,
            required: [true, "E-mail é Obrigatório"],
            unique: [true, "E-mail já Cadastrado"],
        },
        senha: {
            type: String,
            required: [true, "Senha é Obrigatório"]
        },
        crmv: {
            type: String,
            // required: [true, "CRMV é Obrigatório"],
            // unique: [true, "CRMV já Cadastrado"]
        },
        especialidade: [{
            type: String,
            required: [true, "Especialidade é obrigatória"]
        }],
        telefone: {
            type: String,
            required: [true, "Telefone é obrigatório"]
        },
        endereco: {
            type: String,
            required: [true, "Endereço é obrigatório"]
        }
    },

    {
        versionKey: false
    }
);

const VeterinarioModel = mongoose.model('Veterinario', VeterinarioSchema);

export default VeterinarioModel;
