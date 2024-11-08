const validateCPF = (cpf) => {
  const split = cpf.split("");
  //retira todos os caracteres especiais
  //trocar por um array.filter  e depois fazer o string.replace
  const arrayNumbers = split.filter(numbers);

  function numbers(onlyNumbers) {
    const regexNumbers = new RegExp("^[0-9]+$");

    return regexNumbers.test(onlyNumbers);
  }

  //paro o processo se a array for menor que 8
  if (arrayNumbers.length < 8) {
    return false;
  }

  //adciona o 0 se a pessoa não colocou
  for (let i = 0; arrayNumbers.length < 11; i++) {
    arrayNumbers.unshift("0");
  }

  //pego os meus digitos verificadores
  const verificationNumbers = arrayNumbers.slice(-2);

  //fazer o calculo
  let firstSum = 0;
  for (let i = 0, multiplication = 10; i < 9; i++, multiplication--) {
    const result = arrayNumbers[i] * multiplication;
    firstSum += result;
  }

  verificationNumbers.push(verifyingDigit(firstSum));

  let secondSum = 0;
  for (let i = 1, multiplication = 10; i < 10; i++, multiplication--) {
    const result = arrayNumbers[i] * multiplication;
    secondSum += result;
  }

  verificationNumbers.push(verifyingDigit(secondSum));

  function verifyingDigit(sum) {
    const rest = sum % 11;
    return (11 - rest).toString();
  }

  return (
    verificationNumbers[0] == verificationNumbers[2] &&
    verificationNumbers[1] == verificationNumbers[3]
  );
};

export default validateCPF;
