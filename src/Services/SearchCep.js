import GetCep from '../Infrastructure/GetCep.js';

export default class SearchCep {
  static searchCep = async (req, res) => {
    try {
      const { cep } = req.body;

      if (!cep || !/^\d{8}$/.test(cep)) {
        return res.status(400).send({ message: 'CEP inválido' });
      }

      const search = await GetCep(cep);

      if (search.status !== 200) {
        return res.status(500).send({ message: 'Erro ao buscar o CEP' });
      }

      // TODO: CRIAR UM TRATAMENTO QUANDO O CEP VIER VAZIO OU NÃO ENCONTRADO
      // if (search.erro === 'true') {
      //   return { status: 204, data: { message: 'CEP não Encontrado' } };
      // }

      const { data } = search;
      return res.status(200).send(data);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  };
}
