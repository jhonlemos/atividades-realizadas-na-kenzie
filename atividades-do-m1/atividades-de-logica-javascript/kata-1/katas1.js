function oneThroughFive() {
  let contador = [];
  for (let counter = 1; counter <= 20; counter++) {
    contador.push(counter);
  }
  return contador;
}
console.log(oneThroughFive());

function evensToTwenty() {
  let pilha_par = [];
  for (let n = 1; n <= 20; n++) {
    if (n % 2 != 1) pilha_par.push(n);
  }
  return pilha_par;
}
console.log(evensToTwenty());

function oddsToTwenty() {
  let pilha_impar = [];
  for (let n = 1; n < 20; n++) {
    if (n % 2) pilha_impar.push(n);
  }
  return pilha_impar;
}

console.log(oddsToTwenty());

function multiplesOfFive() {
  let mult_five = [];
  for (let x = 5; x <= 100; x += 5) {
    mult_five.push(x);
  }
  return mult_five;
}
console.log(multiplesOfFive());

function squareNumbers() {
  let quadrados = [];
  for (let n = 1; n <= 10; n++) {
    quadrados.push(n * n);
  }
  return quadrados;
}
console.log(squareNumbers());

function countingBackwards() {
  let contador = [];
  for (let counter = 20; counter >= 1; counter--) {
    contador.push(counter);
  }
  return contador;
}
console.log(countingBackwards());

function evenNumbersBackwards() {
  let pilha_par_regressiva = [];
  for (let n = 20; n >= 1; n--) {
    if (n % 2 != 1) pilha_par_regressiva.push(n);
  }
  return pilha_par_regressiva;
}

console.log(evenNumbersBackwards());

function oddNumbersBackwards() {
  let pilha_impar_regressivo = [];
  for (let n = 20; n > 1; n--) {
    if (n % 2) pilha_impar_regressivo.push(n);
  }
  return pilha_impar_regressivo;
}

console.log(oddNumbersBackwards());

function multiplesOfFiveBackwards() {
  let mult_five_regress = [];
  for (let x = 100; x >= 5; x -= 5) {
    mult_five_regress.push(x);
  }
  return mult_five_regress;
}

console.log(multiplesOfFiveBackwards());

function squareNumbersBackwards() {
  let quadrados = [];
  for (let n = 10; n > 1; n--) {
    quadrados.push(n * n);
  }
  return quadrados;
}

console.log(squareNumbersBackwards());
