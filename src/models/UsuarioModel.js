export default class UsuarioModel {
  constructor(
    idVeterinario,
    idUsuario,
    email,
    senha,
    nome,
    cpf,
    telefone,
    endereco,
    cidade,
    estado,
    numero,
    complemento,
    cep,
    tipo,
    dataNascimento,
  ) {
    this.idVeterinario = idVeterinario;
    this.idUsuario = idUsuario;
    this.email = email;
    this.senha = senha;
    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
    this.endereco = endereco;
    this.cidade = cidade;
    this.estado = estado;
    this.numero = numero;
    this.complemento = complemento;
    this.cep = cep;
    this.tipo = tipo;
    this.dataNascimento = dataNascimento;
  }
}
