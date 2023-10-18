export default class VeterinarioModel {
  constructor(
    idVeterinario,
    crmv,
    enderecoComercial,
    telefoneComercial,
    cepComercial,
    cidadeComercial,
    estadoComercial,
    situacao,
    idEspecializacao,
    idUsuario,
    emailComercial,
  ) {
    this.idVeterinario = idVeterinario;
    this.crmv = crmv;
    this.situacao = situacao;
    this.enderecoComercial = enderecoComercial;
    this.telefoneComercial = telefoneComercial;
    this.cepComercial = cepComercial;
    this.cidadeComercial = cidadeComercial;
    this.estadoComercial = estadoComercial;
    this.emailComercial = emailComercial;
    this.idEspecializacao = idEspecializacao;
    this.idUsuario = idUsuario;
  }
}
