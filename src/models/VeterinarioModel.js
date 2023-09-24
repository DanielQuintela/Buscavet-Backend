export default class VeterinarioModel {
  constructor(
    idVeterinario,
    crmv,
    telefoneComercial,
    // enderecoComercial,
    // situacaoCadastro,
    // cidadeComercial,
    // cepComercial,
    // estadoComercial,
    // emailComercial,
    // eslint-disable-next-line comma-dangle
    idUsuario
  ) {
    this.idVeterinario = idVeterinario;
    this.crmv = crmv;
    this.telefoneComercial = telefoneComercial;
    // this.enderecoComercial = enderecoComercial;
    // this.situacaoCadastro = situacaoCadastro;
    // this.cidadeComercial = cidadeComercial;
    // this.cepComercial = cepComercial;
    // this.estadoComercial = estadoComercial;
    // this.emailComercial = emailComercial;
    this.idUsuario = idUsuario;
  }
}
