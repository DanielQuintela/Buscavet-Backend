import axios from 'axios';

export default async function GetCep(cep) {
  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  return response;
}
