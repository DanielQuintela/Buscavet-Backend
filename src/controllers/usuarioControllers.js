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
            let usuario = new usuarios(req.body);

            const result = await usuario.save();
            res.status(201).send(result);
        } catch (error) {   
            res.status(500).send({ message: error.message });
        }

    }



};
