import db from '../config/dbConfig.js';
import UsuarioSchema from '../entity/UsuarioSchema.js';

export default class InformacoesAdicionais {
    static async cadastrarInformacoesAdicionais(req, res) {
        try{
            const userRepository = db.manager.getRepository(UsuarioSchema);
            const email = req.headers.authorization ? req.headers.authorization.userEmail : req.body.email;

            console.log(email);
            const user = await userRepository.find({ where: { email } });
            console.log(user);
            const usuario = user[0];
            if (usuario.email !== email) {
                res.status(404).send({ message: 'Usuário não encontrado' });
                return;
            }
            
            const save = await userRepository.save({ ...req.body, idUsuario: usuario.idUsuario });
            res.status(201).send(save);

        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }
}