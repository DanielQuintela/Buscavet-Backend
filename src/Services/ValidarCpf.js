export default function validarCPF(cpf) {
  // Remove caracteres não numéricos
  const cpfCleaned = cpf.replace(/\D/g, '');

  // Verifica se o CPF possui 11 dígitos
  if (cpfCleaned.length !== 11) {
    return false;
  }

  // Verifica se todos os dígitos são iguais (CPF inválido)
  if (/^(\d)\1{10}$/.test(cpfCleaned)) {
    return false;
  }

  // Calcula e compara os dígitos verificadores
  let soma = 0;
  for (let i = 0; i < 9; i += 1) {
    soma += parseInt(cpfCleaned.charAt(i), 10) * (10 - i);
  }
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpfCleaned.charAt(9), 10)) {
    return false;
  }

  soma = 0;
  for (let i = 0; i < 10; i += 1) {
    soma += parseInt(cpfCleaned.charAt(i), 10) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpfCleaned.charAt(10), 10)) {
    return false;
  }

  // CPF válido
  return true;
}
