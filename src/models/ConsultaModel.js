export default class ConsultaModel {
  constructor(id, idCliente, idEstabelecimento, idVeterinario, idAnimal, data, hora, situacao) {
    this.id = id;
    this.idCliente = idCliente;
    this.idEstabelecimento = idEstabelecimento;
    this.idVeterinario = idVeterinario;
    this.idAnimal = idAnimal;
    this.data = data;
    this.hora = hora;
    this.situacao = situacao;
  }
}
