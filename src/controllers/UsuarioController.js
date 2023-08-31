
import EncryptedService  from '../Services/EcryptedService.js';
import { UsuarioModel, VeterinarioModel } from '../models/index.js';

export default class UsuarioController {
   

    static buscarUsuarios = async (req, res, next) => {
        try {
            const result = await UsuarioModel.find();
            res.status(200).send(result);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }


    static cadastrarUsuario = async (req, res, next) => {
        try {

            const encryptedService = EncryptedService();

            let usuario = new UsuarioModel(req.body);
            let senhaCod = encryptedService.encryptPassword(req.body.senha);
            usuario.senha = senhaCod;

            const result = await usuario.save();
            res.status(201).send(result);
        } catch (error) {   
            res.status(500).send({ message: error.message });
        }

    }

    static loginUser = async (req, res, next) => {
        try {

            const encryptedService = EncryptedService();

            const { email, senha } = req.body;

            if (!email || !senha) {
                res.status(400).send({ message: 'Dados inválidos' });
                return;
            }

            const buscarVeterinario = await VeterinarioModel.find({ email: email });
            const vet = buscarVeterinario[0];
            
            if (buscarVeterinario.length != 0){
                const validatePassword = encryptedService.comparePassword(senha, vet.senha);

                if (!validatePassword) {
                    res.status(401).send({ message: 'Senha incorreta' });
                    return;
                }
               
                res.status(200).send([{ message: 'Login realizado com sucesso' }, vet]);
                return;

            }
            const buscarUsuario = await UsuarioModel.find({ email: email }); 

            if (buscarUsuario.length === 0) {
                res.status(404).send({ message: 'Usuário não encontrado' });
                return;
            }
            const user = buscarUsuario[0];

            const validatePassword = encryptedService.comparePassword(senha, user.senha);

            if (!validatePassword) {
                res.status(401).send({ message: 'Senha incorreta' });
                return;
            }
           
            res.status(200).send([{ message: 'Login realizado com sucesso' }, user]);
            

        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }

    static changePassword = async (req, res, next) => {
        try {

            const encryptedService = EncryptedService();

            const { email, senha, novaSenha } = req.body;

            const buscarVeterinario = await VeterinarioModel.find({ email: email });
            const vet = buscarVeterinario[0];

            if (buscarVeterinario.length != 0){
                const validatePassword = encryptedService.comparePassword(senha, vet.senha);

                if(!validatePassword){
                    res.status(401).send({ message: 'Senha incorreta' });
                    return;
                }
                let senhaCod = encryptedService.encryptPassword(novaSenha);
                const result = await usuarios.updateOne({ email: email }, { senha: senhaCod });
                res.status(200).send({ message: 'Senha alterada com sucesso' });
                return;
            }

            
            const buscarUsuario = await UsuarioModel.find({ email: email });

            if (buscarUsuario.length === 0) {
                res.status(404).send({ message: 'Usuário não encontrado' });
                return;
            }
            const user = buscarUsuario[0];

            const validatePassword = encryptedService.comparePassword(senha, user.senha);

            if (!validatePassword) {
                res.status(401).send({ message: 'Senha incorreta' });
                return;
            }

            let senhaCod = encryptedService.encryptPassword(novaSenha);
            const result = await usuarios.updateOne({ email: email }, { senha: senhaCod });
            res.status(200).send({ message: 'Senha alterada com sucesso' });
            

        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }


};
