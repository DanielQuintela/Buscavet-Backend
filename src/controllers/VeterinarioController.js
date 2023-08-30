import EncryptedService  from '../Services/EcryptedService.js';
import { VeterinarioModel } from '../models/index.js';

export default class VeterinarioController {

    static loginVeterinario = async (req, res, next) => {
        try {
            const EncryptedService = EncryptedService(); //Criptografar a senha
            const { email, senha } = req.body; //Obter as propriedades do corpo da solicitação
            const buscarVeterinario = await VeterinarioModel.find({ email: email});

            if (buscarVeterinario.length === 0) {
                res.status(404).send({ message: 'Veterinário não encontrado'});
                return;
            }
            //Compara a senha fornecida na solicitação com a senha armazenada no banco
            const validatePassword = EncryptedService.comparePassword(senha, buscarVeterinario[0].senha);
            
            if (!validatePassword) {
                res.status(401).send({ message: 'Senha incorreta' });
                return;
            }

            res.status(200).send({ message: 'Login realizado com sucesso' });
            

        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }

    static cadastrarVeterinario = async (req, res, next) => {
        try {
            const encryptedService = EncryptedService();
            let veterinario = new VeterinarioModel(req.body);
            let senhaCod = encryptedService.encryptPassword(req.body.senha);
            veterinario.senha = senhaCod;
            const result = await veterinario.save();
            res.status(201).send(result);
        } catch (error) {   
            res.status(500).send({ message: error.message });
        }
    }

    
    static buscarVeterinarios = async (req, res, next) => {
        try {
            const result = await VeterinarioModel.find();
            res.status(200).send(result);
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }


};