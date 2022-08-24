// comece a criar a sua função add na linha abaixo

function add(num1, num2) {
  return num1 + num2;
}
console.log(add(3, 5));
console.assert(
  add(3, 5) === 8,
  "A função add não está funcionando como esperado",
);

function multiply(num1, num2) {
  let resultado = 0;
  for (let i = 0; i < num2; i++) {
    resultado = add(resultado, num1);
  }
  return resultado;
}
console.log(multiply(4, 6));

console.assert(
  multiply(4, 6) === 24,
  "A função multiply não está funcionando como esperado",
);

function power(x, n) {
  let potencia = x;
  for (let z = 0; z < n - 1; z++) {
    potencia = multiply(x, potencia);
  }
  return potencia;
}
console.log(power(3, 4));

console.assert(
  power(3, 4) === 81,
  "A função power não está funcionando como esperado",
);

function factorial(f) {
  let fact = f;
  for (let i = f - 1; i >= 1; i--) {
    fact = multiply(i, fact);
  }
  return fact;
}
console.log(factorial(5));
console.assert(
  factorial(5) === 120,
  "A função factorial não está funcionando como esperado",
);

//BôNUS
function fibonacci(number) {
  let sequencia = 0;
  let anterior = 0;
  let posterior = 1;
  for (let i = 0; i < number; i++) {
    sequencia = add(anterior, posterior);
    anterior = posterior;
    posterior = sequencia;
  }
  return anterior;
}
console.log(fibonacci(7));
console.assert(
  fibonacci(7) === 13,
  "A função fibonacci não está funcionando como esperado",
);
