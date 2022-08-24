const body = document.querySelector("body");

let pagina = "Todas";
const carrinhoArr = [];

const teste = document.getElementById("Todas");
teste.classList.add("teste");

const salgueiro = varinhas.filter((x) => x.categoria === "Salgueiro");

const colubrina = varinhas.filter((x) => x.categoria === "Colubrina");

const videira = varinhas.filter((x) => x.categoria === "Videira");

const azevinho = varinhas.filter((x) => x.categoria === "Azevinho");

Salgueiro.addEventListener("click", () => {
  mostrarCards(salgueiro), categoriaSelecionada(catSalgueiro);
});
Todas.addEventListener("click", () => {
  mostrarCards(varinhas), categoriaSelecionada(catTodas);
});
Colubrina.addEventListener("click", () => {
  mostrarCards(colubrina), categoriaSelecionada(catColubrina);
});
Videira.addEventListener("click", () => {
  mostrarCards(videira), categoriaSelecionada(catVideira);
});
Azevinho.addEventListener("click", () => {
  mostrarCards(azevinho), categoriaSelecionada(catAzevinho);
});

Salgueiro.addEventListener("click", () => {
  pagina = "Salgueiro";
});
Todas.addEventListener("click", () => {
  pagina = "Todas";
});
Colubrina.addEventListener("click", () => {
  pagina = "Colubrina";
});
Videira.addEventListener("click", () => {
  pagina = "Videira";
});
Azevinho.addEventListener("click", () => {
  pagina = "Azevinho";
});
let botao_de_pesquisa = document.getElementById("botao_de_pesquisa");
let valorDeEntrada = document.querySelector("#valorDeEntrada");
let catTodas = document.getElementById("Todas");
let catAzevinho = document.getElementById("Azevinho");
let catSalgueiro = document.getElementById("Salgueiro");
let catVideira = document.getElementById("Videira");
let catColubrina = document.getElementById("Colubrina");

let categoria = [catTodas, catAzevinho, catVideira, catSalgueiro, catColubrina];
botao_de_pesquisa.addEventListener("click", function () {
  pesquisa = valorDeEntrada.value;

  mostrarCards(pesquisar(pesquisa));
  valorDeEntrada.value = "";
});

let content = document.getElementById("content");
verificar_carrinho_vazio();

direita.addEventListener("click", function (event) {
  let resultado = event.target.id;
  let count = 1;
  for (let i = 0; i < carrinhoArr.length; i++) {
    if (carrinhoArr[i].id + "c" === resultado && count === 1) {
      carrinhoArr.splice(i, 1);
      count = 0;
    }
  }

  divcarrinho.innerHTML = "";
  for (let i = 0; i < carrinhoArr.length; i++) {
    varinhascarrinho(carrinhoArr[i]);
  }
  return;
});

let botaodiv = document.getElementById("botaodiv");
//PROVAVEL DEFEITO NO CONTENT
content.addEventListener("click", function (event) {
  let resultado = event.target.id;
  //O for é quem faz a adição
  //varinhas é o varinhas.js
  for (let i = 0; i < varinhas.length; i++) {
    if (varinhas[i].id === resultado) {
      carrinhoArr.push(varinhas[i]);
      varinhascarrinho(varinhas[i]);
    }
  }
  //botão excluir
  let valorTotal = document.getElementById("valorTotal");
  valorTotal.innerHTML = `${totalcarrinho(carrinhoArr)}Golden coins`;

  let quantidadev = document.getElementById("quantidadev");
  quantidadev.innerHTML = `${carrinhoArr.length}`;

  vazio.innerHTML = "";
  infocarrinho.style.display = "";

  verificar_carrinho_vazio();
  return;
});

function pesquisar(texto) {
  let resultado = [];
  for (let i = 0; i < varinhas.length; i++) {
    if (varinhas[i].nome.toLowerCase().includes(texto)) {
      resultado.push(varinhas[i]);
    }
    if (varinhas[i].descricao.toLowerCase().includes(texto)) {
      resultado.push(varinhas[i]);
    }
  }
  return resultado;
}

function categoriaSelecionada(select) {
  select.classList.add("Atual");
  for (let i = 0; i < categoria.length; i++) {
    if (categoria[i].classList.contains("Atual")) {
      categoria[i].classList.remove("Atual");
    }
  }
  select.classList.add("Atual");
  return;
}

function mostrarCards(array) {
  esquerda.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    esquerda.appendChild(criadordecards(array[i]));
  }
  return;
}

function criadordecards(objeto) {
  let varinha = document.createElement("div");
  varinha.classList.add("varinha");

  varinha.innerHTML = `<div class="varinhaicone" id = ><img id="v_icone" src="${objeto.imagem}" alt=""></div>
   <p class = classeicone id >${objeto.categoria}</p>
   <p class = nome >${objeto.nome}</p>
   <p class = descricao >${objeto.descricao}</p>
   <p class = preco >${objeto.valor} Golden coins </p>
   <button class = "add_no_carrinho"  id="${objeto.id}"  >Adicionar ao carrinho</button>
   `;
  return varinha;
}

//OUTRO PONTO IMPORTANTE
function varinhascarrinho(objeto) {
  let carrinho = document.createElement("div");
  carrinho.classList.add("carrinho");

  carrinho.innerHTML = `<div class = "carrinhocontent">
    <div class = "carrinhoicone"><img id="c_icone" src="${objeto.imagem}" alt=""></div>
    <div class = "informacao">
    <p class = nome>${objeto.nome}</p>
    <p class = preco>${objeto.valor}Golden coins </p>
    </div>
    <button class = excluirDoCarrinho id="${objeto.id}c">Excluir</button>
    `;
  let divcarrinho = document.getElementById("divcarrinho");
  divcarrinho.appendChild(carrinho);
}

function verificar_carrinho_vazio() {
  let vazio = document.getElementById("vazio");

  let carrinho_vazio = document.createElement("div");
  if (carrinhoArr.length === 0) {
    carrinho_vazio.innerHTML = `<div class = "vaziovazio"><p id = cv>Carrinho vazio</p><footer id= "adicione">Adicione varinhas</footer> </div>`;
    vazio.appendChild(carrinho_vazio);
    infocarrinho.style.display = "none";
  }
  return;
}

function totalcarrinho(array) {
  let Total = 0;
  for (let i = 0; i < array.length; i++) {
    Total += array[i].valor;
  }
  return Total;
}

mostrarCards(varinhas);
categoriaSelecionada(catTodas);
