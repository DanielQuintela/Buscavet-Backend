export default class AvaliacaoModel {
  constructor(id, nota, comentario, idCliente, idVeterinario, idEstabelecimento) {
    this.id = id;
    this.nota = nota;
    this.comentario = comentario;
    this.idCliente = idCliente;
    this.idVeterinario = idVeterinario;
    this.idEstabelecimento = idEstabelecimento;
  }
}
