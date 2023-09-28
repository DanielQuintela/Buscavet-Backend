export default class UsuarioModel {
  constructor(idUsuario, email, senha, nome, cpf, telefone, endereco, cidade, estado, cep, tipo) {
    this.idUsuario = idUsuario;
    this.email = email;
    this.senha = senha;
    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
    this.endereco = endereco;
    this.cidade = cidade;
    this.estado = estado;
    this.cep = cep;
    this.tipo = tipo;
  }
}
