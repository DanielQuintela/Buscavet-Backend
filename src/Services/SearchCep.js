import axios from 'axios';

export default class SearchCep {
    static searchCep = async (req, res) => {
        try{

            const cep = req.body;

            if (!cep || !/^\d{8}$/.test(cep)) {
                return res.status(400).send({ message: 'CEP inválido' });
              }
              
            const search = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

            if (search.status !== 200){
                return res.status(500).send({ message: 'Erro ao buscar o CEP' });
            }
            
            const data = search.data;
            res.status(200).send(data);

        } catch (error) {
            res.status(500).send({ message: error.message});
        }
    }
}