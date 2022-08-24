const productsCart = [
  {
    id: 1,
    nome: "desinfetante",
    preco: 14.0,
  },

  {
    id: 2,
    nome: "cloro 1L",
    preco: 8.0,
  },

  {
    id: 3,
    nome: "sabão em pó",
    preco: 12.0,
  },

  {
    id: 4,
    nome: "limpa vidros",
    preco: 5.99,
  },

  {
    id: 5,
    nome: "pedra sanitária",
    preco: 2.0,
  },
];

const corpo = document.querySelector("body");

const principal = document.createElement("main");

corpo.appendChild(principal);


const titulo = document.createElement("h1");
titulo.innerText = "Carrinho de compras";

principal.appendChild(titulo);

const lista = document.createElement("ul");
principal.appendChild(lista);

const cimo_da_li = document.createElement("li");
cimo_da_li.classList.add("cimo");

cimo_da_li.innerHTML = `
<p> Item </p>
<p> valor </p>
`;
lista.appendChild(cimo_da_li);

let adicionar = 0;

function percorrerLista(array_de_objetos) {
  for (i = 0; i < array_de_objetos.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `
        <p>${array_de_objetos[i].nome}</p>
        <p>R$ ${array_de_objetos[i].preco}</p>`;

    adicionar += array_de_objetos[i].preco;
    lista.appendChild(li);
  }
  const total = document.createElement("li");
  total.classList.add("Total");
  total.innerHTML = `
    <p>Total</p>
        <p>R$ ${adicionar}</p>
    `;
  lista.appendChild(total);

  const botao = document.createElement("li");
  botao.classList.add("FinalizarCompras");
  botao.innerHTML = `
<button> Finalizar compra </button>`;
  lista.appendChild(botao);
}

percorrerLista(productsCart);
