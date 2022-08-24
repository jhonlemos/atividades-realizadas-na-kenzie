function newForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
  return undefined;
}

function newMap(array, callback) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i], i, array));
  }
  return newArr;
}

function newFilter(array, callback) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    let teste = callback(array[i], i, array);
    if (teste === true) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

function newFind(array, callback) {
  let parar = array.length;
  for (let i = 0; i < parar; i++) {
    let teste = callback(array[i], i, array);
    if (teste === true) {
      return array[i];
    }
  }
}

function newIndexOf(array, parametro, parametroInicial) {
  if (parametroInicial === undefined) {
    parametroInicial = 0;
  }
  let resposta = -1;
  for (let i = parametroInicial; i < array.length; i++) {
    if (array[i] === parametro) {
      resposta = i;
    }
  }
  return resposta;
}

function newIncludes(array, parametro, index = 0) {
  let resposta = false;
  for (let i = index; i < array.length; i++) {
    if (array[i] === parametro) {
      resposta = true;
    }
  }
  return resposta;
}

function newReduce(array, callback, valorInicial) {
  if (valorInicial === undefined) {
    valorInicial = 0;
  }
  let acumulador = valorInicial;
  for (let i = 0; i < array.length; i++) {
    let teste = callback(acumulador, array[i], i, array);
    acumulador = teste;
  }
  return acumulador;
}

function newFindIndex(array, callback) {
  let resposta = -1;
  for (let i = 0; i < array.length; i++) {
    let teste = callback(array[i], i, array);
    if (teste === true) {
      resposta = i;
    }
  }
  return resposta;
}

function newSome(array, callback) {
  let resposta = false;
  for (let i = 0; i < array.length; i++) {
    let teste = callback(array[i], i, array);
    if (teste === array[i]) {
      resposta = true;
    }
  }
  return resposta;
}

function newEvery(array, callback) {
  let resposta = true;
  for (let i = 0; i < array.length; i++) {
    let teste = callback(array[i], i, array);
    if (teste !== true) {
      resposta = false;
    }
  }
  return resposta;
}

function newConcat(array, ...outro) {
  let Novo = [];
  for (let i = 0; i < array.length; i++) {
    Novo.push(array[i]);
  }
  for (let j = 0; j < outro.length; j++) {
    Novo.push(outro[j]);
  }
  return Novo;
}
function newJoin(array, outro = ",") {
  let resposta = "";
  for (let i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      resposta += `${array[i]}${outro}`;
    }
    if (i === array.length - 1) {
      resposta += `${array[i]}`;
    }
  }
  return resposta;
}

function newSlice(array, corteInicial, corteFinal) {
  if (corteInicial === undefined) {
    corteInicial = 0;
  }
  let newArr = [];
  let cortar = array.length - Math.abs(corteInicial);
  for (let i = 0; i < array.length; i++) {
    if (i >= corteInicial && corteInicial > 0) {
      newArr.push(array[i]);
    }
    if (corteInicial < 0 && cortar < array.length) {
      newArr.push(array[cortar]);
      cortar += 1;
    }
    if (i >= corteInicial && corteInicial === 0) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

function newFlat(array, profundidade) {

  if (profundidade === undefined) {
    profundidade = 1;
  } else if (profundidade === 0) {
    return array;
  }
  const arrayFlat = [];

  if (profundidade === 1) {
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "object") {
        for (let j = 0; j < array[i].length; j++) {
          arrayFlat.push(array[i][j]);
        }
      } else {
        arrayFlat.push(array[i]);
      }
    }
  }

  if (profundidade === 2) {
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "object") {
        for (let j = 0; j < array[i].length; j++) {
          if (typeof array[i][j] === "object") {
            for (let u = 0; u < array[i][j].length; u++) {
              arrayFlat.push(array[i][j][u]);
            }
          } else {
            arrayFlat.push(array[i][j]);
          }
        }
      } else {
        arrayFlat.push(array[i]);
      }
    }
  }

  return arrayFlat;
}

function newFlatMap(array, callback){
    const arrayFlatMap = []
    for(let i = 0; i < array.length; i++){
        if(typeof array[i] === "object"){
            for(let j = 0; j < array[i].length; j++){
                arrayFlatMap.push(callback(array[i][j]))
            }
        }else{
            arrayFlatMap.push(callback(array[i]))
        }
    }
    const resultado = newFlat(arrayFlatMap)
    return resultado
}
