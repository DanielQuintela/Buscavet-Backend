import db from "../config/dbConfig";
import { VeterinarioSchema } from "../entity";

export default class ClinicaController {
    static async buscarVeterinarios(req, res) {
        try {
            const veterinarioRepository = db.manager.getRepository(VeterinarioSchema);
            const result = await veterinarioRepository.find({ });
            res.status(200).send(result);
        } catch (erro) {
            res.status(500).send({ message: erro.message });
        }
    }
}