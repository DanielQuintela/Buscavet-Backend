export default class VeterinarioModel {
  constructor(id, crmv, enderecoComercial, telefoneComercial, cepComercial, cidadeComercial, estadoComercial, situacao, idEspecializacao, idUsuario, emailComercial) {
    this.id = id;
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
