function calculateSalary(salarioFixo, vendas_efetuadas) {
  let salarioTotal = 0;

  if (vendas_efetuadas <= 1200) {
    salarioTotal += salarioFixo + (vendas_efetuadas * 3) / 100;
  } else {
    let qtd_a_mais = vendas_efetuadas - 1200;
    salarioTotal += salarioFixo + 36 + (qtd_a_mais * 5) / 100;
  }
  return salarioTotal;
}

function cashMachine(saque_em_reais, salarioFixo, valorVendas) {
  let salarioTotal = calculateSalary(salarioFixo, valorVendas);
  let salarioRestante = salarioTotal - saque_em_reais;

  let notas_de_200 = 0;
  let notas_de_100 = 0;
  let notas_de_50 = 0;
  let notas_de_20 = 0;
  let notas_de_10 = 0;
  let notas_de_5 = 0;
  let notas_de_2 = 0;

  while (saque_em_reais > 0) {
    if (saque_em_reais % 200 === 0) {
      notas_de_200++;
      saque_em_reais = saque_em_reais - 200`${notas_de_200} notas de 200`;
    } else if (saque_em_reais % 100 === 0) {
      notas_de_100++;
      saque_em_reais = saque_em_reais - 200`${notas_de_100} notas de 100`;
    } else if (saque_em_reais % 50 === 0) {
      notas_de_50++;
      saque_em_reais = saque_em_reais - 50`${notas_de_50} notas de 50`;
    } else if (saque_em_reais % 20 === 0) {
      notas_de_20++;
      saque_em_reais = saque_em_reais - 20`${notas_de_20} notas de 20`;
    } else if (saque_em_reais % 10 === 0) {
      notas_de_10++;
      saque_em_reais = saque_em_reais - 10`${notas_de_50} notas de 10`;
    } else if (saque_em_reais % 5 === 0) {
      notas_de_5++;
      saque_em_reais = saque_em_reais - 5`${notas_de_50} notas de 5`;
    } else if (saque_em_reais % 2 === 0) {
      notas_de_2++;
      saque_em_reais = saque_em_reais - 2`${notas_de_2} notas de 2`;
    } else {
      saque_em_reais = 0;
    }
  }

  return `Notas sacadas: ${notas_de_200} notas de R$200, ${notas_de_100} nota de R$100, ${notas_de_50} nota de R$50, Saldo Atual: R$ ${salarioRestante} `;
}
cashMachine();

function calculateStock(
  quantidade_atual_em_estoque,
  quantidade_maxima_estoque,
  quantidade_minima_estoque
) {
  let quantidade_media =
    (quantidade_maxima_estoque + quantidade_minima_estoque) / 2;
  if (quantidade_atual_em_estoque >= quantidade_media) {
    return "Não efetuar a compra";
  } else {
    return "Efetuar compra";
  }
}
calculateStock();

function calculateAge(ano_de_nascimento) {
  let anos = 2022 - ano_de_nascimento;
  let meses = anos * 12;
  let dias = meses * 30;
  let semanas = meses * 4;
  return `anos ${anos}, meses: ${meses}, semanas ${semanas}, dias ${dias}`;
}

function getDiagonal(arr) {
  let diagonal_principal = [];
  for (i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        diagonal_principal.push(`${arr[i][j]}`);
      }
    }
  }
  return diagonal_principal;
}
getDiagonal(3);
