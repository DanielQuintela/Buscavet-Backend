export default class EstabelecimentoModel {
  constructor(
    id,
    razaoSocial,
    nomeFantasia,
    cnpj,
    endereco,
    telefone,
    cidade,
    estado,
    cep,
    email,
    tipoEstabelecimento,
  ) {
    this.id = id;
    this.razaoSocial = razaoSocial;
    this.nomeFantasia = nomeFantasia;
    this.cnpj = cnpj;
    this.endereco = endereco;
    this.telefone = telefone;
    this.cidade = cidade;
    this.estado = estado;
    this.cep = cep;
    this.email = email;
    this.tipoEstabelecimento = tipoEstabelecimento;
  }
}
