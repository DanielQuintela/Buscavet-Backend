
import EncryptedService  from '../Services/EcryptedService.js';
import { usuarios } from '../models/index.js';

export default class UsuarioController {
   

    static buscarUsuarios = async (req, res, next) => {
        try {
            const result = await usuarios.find();
            res.status(200).send(result);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }


    static cadastrarUsuario = async (req, res, next) => {
        try {

            const encryptedService = EncryptedService();

            let usuario = new usuarios(req.body);
            let senhaCod = encryptedService.encryptPassword(req.body.senha);
            usuario.senha = senhaCod;

            const result = await usuario.save();
            res.status(201).send(result);
        } catch (error) {   
            res.status(500).send({ message: error.message });
        }

    }



};
