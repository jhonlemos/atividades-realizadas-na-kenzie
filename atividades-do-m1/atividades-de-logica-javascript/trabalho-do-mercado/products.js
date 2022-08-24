const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];
const corpo = document.querySelector("body")

const categoria_frutas = document.createElement("h1")
categoria_frutas.innerText = "Frutas"
categoria_frutas.className = "h1Frutas"

const categoria_bebidas = document.createElement("h1")
categoria_bebidas.innerText = "Bebidas"
categoria_bebidas.className = "h1Bebidas"

const categoria_higiene = document.createElement("h1")
categoria_higiene.innerText= "Higiene"
categoria_higiene.className = "h1Higiene"

let frutas_arr = []
let bebidas_arr = []
let higiene_arr = []

function percorre_produtos(catalogo){
  for(let i = 0; i < catalogo.length; i++){
    if(catalogo[i].category == "Frutas"){
      frutas_arr.push(catalogo[i])
    }
    else if(catalogo[i].category == "Bebidas"){
      bebidas_arr.push(catalogo[i])
    }
    else if(catalogo[i].category == "Higiene"){
      higiene_arr.push(catalogo[i])
    }
  }
}
percorre_produtos(products)

const principal = document.createElement("main")
principal.className = "container"

const section = document.createElement("section")
section.className = "products-section"

const mainFrutas = document.createElement("main")
mainFrutas.className = "products-content fruits"

const mainBebidas = document.createElement("main")
mainBebidas.className = "products-content drinks"

const mainHigiene = document.createElement("main")
mainHigiene.className = "products-content hygiene"

const listaDasFrutas = document.createElement("ul")
const listaDasBebidas = document.createElement("ul")
const listaDeHigiene = document.createElement("ul")

function addFrutas(catalogoDeFrutas){
  for(let i = 0; i < catalogoDeFrutas.length; i++){
    const li_frutas = document.createElement("li")
    li_frutas.className = "product"

    const img_frutas = document.createElement("img")
    img_frutas.className = "product-img"

    if(catalogoDeFrutas[i].image == undefined){
      img_frutas.src = './img/products/no-img.svg'
    }
    else{
      img_frutas.src = catalogoDeFrutas[i].image
    }

    const main_nome_da_fruta = document.createElement("main")
    main_nome_da_fruta.className = "product_main"

    const h1_nome_da_fruta = document.createElement("h1")
    h1_nome_da_fruta.className = "product-title"
    h1_nome_da_fruta.innerText = catalogoDeFrutas[i].title

    const h5_categoria_das_frutas = document.createElement("h5")
    h5_categoria_das_frutas.className = "product-category"
    h5_categoria_das_frutas.innerText = catalogoDeFrutas[i].category

    const tag_importante_da_fruta = document.createElement("strong")
    tag_importante_da_fruta.className = "product-price"
    tag_importante_da_fruta.innerText = catalogoDeFrutas[i].price

    li_frutas.appendChild(img_frutas)

    li_frutas.appendChild(main_nome_da_fruta)
    main_nome_da_fruta.appendChild(h1_nome_da_fruta)
    main_nome_da_fruta.appendChild(h5_categoria_das_frutas)
    main_nome_da_fruta.appendChild(tag_importante_da_fruta)

    listaDasFrutas.appendChild(li_frutas)
  }
}
addFrutas(frutas_arr)
mainFrutas.appendChild(listaDasFrutas)
section.appendChild(categoria_frutas)
section.appendChild(mainFrutas)

function addBebidas(catalogoDeBebidas){
  for(let i = 0; i < catalogoDeBebidas.length; i++){
    const li_bebidas = document.createElement("li")
    li_bebidas.className = "product"

    const img_bebidas = document.createElement("img")
    img_bebidas.className = "product-img"
    if(catalogoDeBebidas[i].image == undefined){
      img_bebidas.src = './img/products/no-img.svg'
    }
    else{
      img_bebidas.src = catalogoDeBebidas[i].image
    }

    const main_nome_da_bebida = document.createElement("main")
    main_nome_da_bebida.className = "product_main"

    const h1_nome_da_bebida = document.createElement("h1")
    h1_nome_da_bebida.className = "product-title"
    h1_nome_da_bebida.innerText = catalogoDeBebidas[i].title

    const h5_categoria_das_bebidas = document.createElement("h5")
    h5_categoria_das_bebidas.className = "product-category"
    h5_categoria_das_bebidas.innerText = catalogoDeBebidas[i].category

  
    const tag_importante_da_bebida = document.createElement("strong")
    tag_importante_da_bebida.className = "product-price"
    tag_importante_da_bebida.innerHTML = catalogoDeBebidas[i].price

    li_bebidas.appendChild(img_bebidas)
    li_bebidas.appendChild(main_nome_da_bebida)

    main_nome_da_bebida.appendChild(h1_nome_da_bebida)
    main_nome_da_bebida.appendChild(h5_categoria_das_bebidas)
    main_nome_da_bebida.appendChild(tag_importante_da_bebida)

    listaDasBebidas.appendChild(li_bebidas)
  }
}
addBebidas(bebidas_arr)
mainBebidas.appendChild(listaDasBebidas)
section.appendChild(categoria_bebidas)
section.appendChild(mainBebidas)

function adicionandoHigiene(catalogoDeHigiene){
  for(let i = 0; i < catalogoDeHigiene.length; i++){
    const li_higiene = document.createElement("li")
    li_higiene.className = "product"

    const img_higiene = document.createElement("img")
    img_higiene.className = "product-img"
    if(catalogoDeHigiene[i].image == undefined){
      img_higiene.src = './img/products/no-img.svg'
    }
    else{
      img_higiene.src = catalogoDeHigiene[i].image
    }

    const main_nome_higiene = document.createElement("main")
    main_nome_higiene.className = "product_main"

    const h1_nome_higiene = document.createElement("h1")
    h1_nome_higiene.className = "product-title"
    h1_nome_higiene.innerText = catalogoDeHigiene[i].title

    const h5_categoria_higiene = document.createElement("h5")
    h5_categoria_higiene.className = "product-category"
    h5_categoria_higiene.innerText = catalogoDeHigiene[i].category

    const tag_principal_higiene = document.createElement("strong")
    tag_principal_higiene.className = "product-price"
    tag_principal_higiene.innerText = catalogoDeHigiene[i].price

    li_higiene.appendChild(img_higiene)
    li_higiene.appendChild(main_nome_higiene)
    main_nome_higiene.appendChild(h1_nome_higiene)
    main_nome_higiene.appendChild(h5_categoria_higiene)
    main_nome_higiene.appendChild(tag_principal_higiene)
    listaDeHigiene.appendChild(li_higiene)
  }
}
adicionandoHigiene(higiene_arr)
mainHigiene.appendChild(listaDeHigiene)
section.appendChild(categoria_higiene)
section.appendChild(mainHigiene)


principal.appendChild(section)
corpo.appendChild(principal)