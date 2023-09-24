export default class UsuarioModel {
  constructor(
    idUsuario,
    nome,
    email,
    senha,
    // cpf,
    // telefone,
    // endereco,
    // cidade,
    // cep,
    // estado,
    // dataNascimento,
    tipoUsuario,
    // eslint-disable-next-line comma-dangle
    idVeterinario
  ) {
    this.idUsuario = idUsuario;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    // this.cpf = cpf;
    // this.telefone = telefone;
    // this.endereco = endereco;
    // this.cidade = cidade;
    // this.cep = cep;
    // this.estado = estado;
    // this.dataNascimento = dataNascimento;
    this.tipoUsuario = tipoUsuario;
    this.idVeterinario = idVeterinario;
  }
}
