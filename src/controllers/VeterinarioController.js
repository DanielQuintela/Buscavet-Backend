import EncryptedService  from '../Services/EcryptedService.js';
import { VeterinarioModel } from '../models/index.js';

export default class VeterinarioController {


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