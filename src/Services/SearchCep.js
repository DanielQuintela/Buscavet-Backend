import GetCep from '../Infrastructure/GetCep.js';

export default class SearchCep {
  static searchCep = async (req, res) => {
    try {
      const { cep } = req.body;

      if (!cep || !/^\d{8}$/.test(cep)) {
        return res.status(400).send({ message: 'CEP inválido' });
      }
      const search = await GetCep(cep);
      const { data } = search;
      // TODO: CRIAR UM TRATAMENTO QUANDO O CEP VIER VAZIO OU NÃO ENCONTRADO
      if (data.erro === 'true') {
        return res.status(204).send({ message: 'CEP não Encontrado' });
      }

      return res.status(200).send(data);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  };
}
