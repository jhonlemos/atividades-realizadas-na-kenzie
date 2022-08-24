const sampleArray = [
  469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848,
  179, 535, 940, 472,
];

function kata1() {
  let contador = [];
  for (let counter = 1; counter <= 25; counter++) {
    contador.push(counter);
  }
  return contador;
}
console.log(kata1());

function kata2() {
  let contador = [];
  for (let counter = 25; counter >= 1; counter--) {
    contador.push(counter);
  }
  return contador;
}
console.log(kata2());

function kata3() {
  let contador_negativo = [];
  for (let counter = -1; counter >= -25; counter--) {
    contador_negativo.push(counter);
  }
  return contador_negativo;
}
console.log(kata3());

function kata4() {
  let contador_negativo = [];
  for (let counter = -25; counter <= -1; counter++) {
    contador_negativo.push(counter);
  }
  return contador_negativo;
}
console.log(kata4());

function kata5() {
  let pilha_impar = [];
  for (let n = 25; n >= -25; n--) {
    if (n % 2) {
      pilha_impar.push(n);
    }
  }
  return pilha_impar;
}
console.log(kata5());

function kata6() {
  let divisiveis_por3 = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      divisiveis_por3.push(i);
    }
  }
  return divisiveis_por3;
}
console.log(kata6());

function kata7() {
  let divisiveis_por7 = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
      divisiveis_por7.push(i);
    }
  }
  return divisiveis_por7;
}
console.log(kata7());

function kata8() {
  let divisiveis_por7_e_3 = [];
  for (let i = 100; i >= 1; i--) {
    if (i % 7 === 0 || i % 3 === 0) {
      divisiveis_por7_e_3.push(i);
    }
  }
  return divisiveis_por7_e_3;
}
console.log(kata8());

function kata9() {
  let divisiveis_por5_impares = [];
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 1 && i % 5 === 0) {
      divisiveis_por5_impares.push(i);
    }
  }
  return divisiveis_por5_impares;
}
console.log(kata9());

function kata10() {
  let contador = [];

  for (let z = 0; z < sampleArray.length; z++) {
    contador.push(sampleArray[z]);
  }
  return contador;
}
console.log(kata10());

function kata11() {
  let arr = [];

  for (let z = 1; z < sampleArray.length; z++) {
    if (z % 2 === 0) {
      arr.push(sampleArray[z]);
    }
  }
  return arr;
}
console.log(kata11());

function kata12() {
  let arr = [];

  for (let z = 0; z < sampleArray.length; z++) {
    if (z % 2 == 1) {
      arr.push(sampleArray[z]);
    }
  }
  return arr;
}
console.log(kata12());

function kata13() {
  let n_divisivel_por8 = [];

  for (let n = 0; n < sampleArray.length; n++) {
    if (sampleArray[n] % 8 === 0) {
      n_divisivel_por8.push(sampleArray[n]);
    }
  }
  return n_divisivel_por8;
}
console.log(kata13());

function kata14() {
  let quadrados = [];

  for (let z = 0; z < sampleArray.length; z++) {
    quadrados.push(sampleArray[z] * sampleArray[z]);
  }
  return quadrados;
}
console.log(kata14());

function kata15() {
  let soma = 0;
  let resultado = [];
  for (let i = 1; i <= 20; i++) {
    soma += i;
    resultado.push(soma);
  }
  return resultado;
}
console.log(kata15());

function kata16() {
  let array = [];
  let soma = 0;
  for (let n = 0; n < sampleArray.length; n++) {
    soma += sampleArray[n];
  }
  array.push(soma);
  return array;
}

console.log(kata16());

function kata17() {
  let arr = [];
  let menor = 1000;
  for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] < menor) {
      menor = sampleArray[i];
    }
  }
  arr.push(menor);
  return arr;
}

console.log(kata17());

function kata18() {
  let result = [];
  let maior = 0;
  for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] > maior) {
      maior = sampleArray[i];
    }
  }
  result.push(maior);
  return result;
}

console.log(kata18());
