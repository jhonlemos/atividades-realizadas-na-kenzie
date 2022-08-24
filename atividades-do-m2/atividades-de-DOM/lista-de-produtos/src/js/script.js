//*Criando a vitrine (showcase)
function createShowCase(productArray) {
  return productArray.forEach((product) => {
    createCard(product);
  });
}
function createCard(product) {
  const showCase = document.querySelector(".product-list");
  const card = createCardItem(product);
  const cardImg = createCardImg(product);
  const cardName = createCardName(product);
  const cardSection = createCardSection(product);
  const nutrients = createCardNutrient(product);
  const priceAndButton = createCardPriceAndButton(product);
  showCase.append(card);
  card.append(cardImg, cardName, cardSection, nutrients, priceAndButton);
  return card;
}

function createCardItem(product) {
  const card = document.createElement("li");
  card.classList.add("product-list__card", `${product.secao.toLowerCase()}`);
  card.id = `card-${product.id}`;
  return card;
}

function createCardImg(product) {
  const img = document.createElement("img");
  img.src = `${product.img.replace("ç", "c")}`;
  img.alt = `Imagem ${product.nome.toLowerCase()}`;
  img.classList.add("card__img");
  return img;
}

function createCardName(product) {
  const name = document.createElement("h3");
  name.innerText = product.nome;
  name.classList.add("card__name");
  return name;
}

function createCardSection(product) {
  const section = document.createElement("span");
  section.innerText = `${product.secao}`;
  section.classList.add("card__section");
  return section;
}

function createCardNutrient(product) {
  const nutrientList = document.createElement(`ol`);
  nutrientList.classList.add("card__nutrientList");
  product.componentes.forEach((component) => {
    const nutrient = document.createElement("li");
    nutrient.classList.add("card__nutrient");
    nutrient.innerText = component;
    nutrientList.append(nutrient);
  });
  return nutrientList;
}

function createCardPriceAndButton(product) {
  const priceAndButton = document.createElement("div");
  priceAndButton.classList.add("card__price-and-button");
  const price = createCardPrice(product);
  const button = createCardButton(product);
  priceAndButton.append(price, button);
  return priceAndButton;
}

function createCardPrice(product) {
  const priceProduct = document.createElement("p");
  priceProduct.innerText = `R$ ${(+product.preco).toFixed(2)}`;
  priceProduct.classList.add("card__price");
  return priceProduct;
}

function createCardButton(product) {
  const button = document.createElement("button");
  button.classList.add("card__button");
  button.id = `button-${product.id}`;
  button.innerText = "Comprar";
  return button;
}

createShowCase(produtos);

//*Menu de pesquisa
function searchEvent() {
  const search = document.querySelector(".menu__search");

  ["click", "keypress"].forEach((event) =>
    search.addEventListener(event, searchProduct),
  );
}

searchEvent();

function searchProduct(event) {
  if (
    event.target.className === "button search__button" ||
    event.target.className === "search__img" ||
    event.key === "Enter"
  ) {
    const productSearch = document.querySelector("input").value;
    event.preventDefault();
    removeClassButtonAddAll();
    filterCards(productSearch);
  }
}

function filterCards(productSelected) {
  const selectedProductsArray = getSelectedProducts(productSelected);
  const notSelectedProductsArray =
    getProductsThatAreNotSelected(productSelected);

  // Remover produtos que estão na vitrine mas não estão selecioandos.
  filterAndList(notSelectedProductsArray, selectedProductsArray);
}

function filterAndList(notSelectedProducts, selectedProducts) {
  const cards = document.querySelectorAll(".product-list__card");
  const cardsArray = Array.from(cards);
  removeFromShowCase(notSelectedProducts, cardsArray);
  addToShowCase(selectedProducts, cardsArray);
}

function removeFromShowCase(notSelectedProducts, cardsArray) {
  const showCase = document.querySelector("ul");
  cardsArray.forEach((product) => {
    notSelectedProducts.forEach((productNotSelected) => {
      if (`card-${productNotSelected.id}` === product.id) {
        product.classList.add("transitionImages");
        setTimeout(() => {
          showCase.removeChild(product);
        }, 200);
      }
    });
  });
}

function addToShowCase(selectedProducts, cardsArray) {
  selectedProducts.forEach((product) => {
    const verify = cardsArray.some(({ id }) => `card-${product.id}` === id);
    if (verify === false) {
      return createCard(product);
    }
  });
}

function getSelectedProducts(searchedValue) {
  const searchedValueWithoutAccents = removeAccents(searchedValue);
  const productsSearched = produtos.filter(
    ({ nome, secao, categoria }) =>
      removeAccents(nome).includes(searchedValueWithoutAccents) ||
      removeAccents(secao).includes(searchedValueWithoutAccents) ||
      removeAccents(categoria).includes(searchedValueWithoutAccents),
  );
  return productsSearched;
}

function getProductsThatAreNotSelected(searchedValue) {
  const searchedValueWithoutAccents = removeAccents(searchedValue);
  const productsNotSearched = produtos.filter(({ nome, secao, categoria }) => {
    if (
      removeAccents(nome).includes(searchedValueWithoutAccents) ||
      removeAccents(secao).includes(searchedValueWithoutAccents) ||
      removeAccents(categoria).includes(searchedValueWithoutAccents)
    ) {
      return false;
    } else {
      return true;
    }
  });
  return productsNotSearched;
}

function removeAccents(name) {
  //! Replace -removendo acentos- Fonte: https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
  return name
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

//* Filtro por categorias
function filterEvent() {
  const filtersContainer = document.querySelectorAll(".button--standard");
  filtersContainer.forEach((button) =>
    button.addEventListener("click", filterByButton),
  );
}

filterEvent();

function filterByButton(event) {
  const sectionChoose = event.target.id;
  if (sectionChoose != "todos") {
    const selectedProducts = getProductsBySection(sectionChoose);
    const notSelectedProducts = getProductsOutSection(sectionChoose);
    filterAndList(notSelectedProducts, selectedProducts);
    tradeSelectClass(sectionChoose);
  } else {
    clearAndList(produtos);
    tradeSelectClass(sectionChoose);
  }
}

function getProductsBySection(section) {
  const productsSectionChoose = produtos.filter((product) =>
    product.secao.toLowerCase().includes(section.toLowerCase()),
  );
  return productsSectionChoose;
}

function getProductsOutSection(section) {
  const productsOutSection = produtos.filter(
    (product) => !product.secao.toLowerCase().includes(section.toLowerCase()),
  );
  return productsOutSection;
}

function tradeSelectClass(idSection) {
  const lastSelected = document.querySelector(".button--selected");
  lastSelected.classList.remove("button--selected");
  const sectionChoose = document.querySelector(`#${idSection}`);
  sectionChoose.classList.add("button--selected");
}

function removeClassButtonAddAll() {
  const activeButtonFilter = document.querySelector(".button--selected");
  activeButtonFilter.classList.remove("button--selected");
  const allButton = document.querySelector("#todos");
  allButton.classList.add("button--selected");
}

function clearAndList(products) {
  const showCase = document.querySelector(".product-list");
  showCase.innerHTML = "";
  return createShowCase(products);
}

//* Adicionando produtos no carrinho através da vitrine
let productsCart = [];
function getProductIntoCart() {
  const productList = document.querySelector(".product-list");
  productList.addEventListener("click", addProductToCart);
}

getProductIntoCart();

function addProductToCart(event) {
  if (
    event.target.className === "card__button" ||
    event.target.className === "button__amount button__plus"
  ) {
    removeEmptyCartInfo();
    const idProduct = event.target.id.match(/\d/g)[0];
    addProduct(idProduct);
    updateTotal(productsCart);
  }
}

function removeEmptyCartInfo() {
  cartAppearsOnScreen();
  const emptyCart = document.querySelector(".cart__product-list");
  const cartEmptyImg = document.querySelector(".cart__img-empty-cart");
  const cartEmptyText = document.querySelector(".cart__text-empty");

  if (cartEmptyImg != null) {
    emptyCart.removeChild(cartEmptyImg);
    emptyCart.removeChild(cartEmptyText);
  }
  return emptyCart;
}

function cartAppearsOnScreen() {
  const cart = document.querySelector(".cart");
  cart.classList.remove("cart--hide");
  const showCase = document.querySelector(".product-list");
  showCase.classList.add("product-list--cart-on");
}

function addProduct(idProduct) {
  const selectedProduct = getProductById(idProduct);
  const totalSectionInCart = isTotalSectionInCart();
  if (totalSectionInCart === false) {
    createTotalAmount();
    createTotalPrice(selectedProduct);
  }

  const productInCart = isProductInCart(idProduct);
  addOneToCartArray(selectedProduct);

  return productInCart
    ? updateAmountAndPriceProductAndClassMinus(idProduct)
    : createProductCart(selectedProduct);
}

function isTotalSectionInCart() {
  const totalSection = document.querySelector(".cart__total");
  return totalSection != null;
}

function isProductInCart(idProduct) {
  const isProductInCart = productsCart.some(({ id }) => id == idProduct);
  return isProductInCart;
}

function getProductById(idProduct) {
  const selectedProduct = produtos.filter(({ id }) => id == idProduct);
  return selectedProduct[0];
}

function createProductCart(product) {
  const cartProductList = tradeClassCartProductList();

  const cartProduct = document.createElement("div");
  cartProduct.classList.add("cart__product");
  cartProduct.id = `cart__product-${product.id}`;
  const cartProductImg = createCartProductImg(product);
  const cartProductTextAndButton =
    createCartProductTextAmountAndButton(product);
  cartProduct.append(cartProductImg, cartProductTextAndButton);
  cartProductList.append(cartProduct);
  return cartProduct;
}

function tradeClassCartProductList() {
  const cartProductList = document.querySelector(".cart__product-list");
  cartProductList.classList.remove("cart__product-list--center");
  cartProductList.classList.add("cart__product-list--scroll");
  return cartProductList;
}

function createCartProductImg(product) {
  const img = document.createElement("img");
  img.classList.add("cart__product-img");
  img.src = `${product.img}`;
  img.alt = `${product.nome.toLowerCase()}`;
  return img;
}

function createCartProductTextAmountAndButton(product) {
  const textAmountAndButton = document.createElement("div");
  textAmountAndButton.classList.add("cart__product-text-and-button");
  const cartProductText = createCartProductText(product);
  const cartProductRemove = createProductRemove(product);
  textAmountAndButton.append(cartProductText, cartProductRemove);

  return textAmountAndButton;
}

function createCartProductText(product) {
  const cartProductText = document.createElement("div");
  cartProductText.classList.add("cart__product-text");

  const cartProductName = createCartProductName(product);
  const cartProductSection = createCartProductSection(product);
  const cartProductPrice = createCartProductPrice(product);
  const cartProductAmount = createCartProductAmount(product);

  cartProductText.append(
    cartProductName,
    cartProductSection,
    cartProductPrice,
    cartProductAmount,
  );

  return cartProductText;
}

function createCartProductName(product) {
  const cartProductName = document.createElement("h3");
  cartProductName.classList.add("cart__product-name");
  cartProductName.innerText = product.nome;
  return cartProductName;
}

function createCartProductSection(product) {
  const cartProductSection = document.createElement("p");
  cartProductSection.classList.add("cart__product-section");
  cartProductSection.innerText = product.secao;
  return cartProductSection;
}

function createCartProductPrice(product) {
  const cartProductPrice = document.createElement("p");
  cartProductPrice.classList.add("cart__product-price");
  cartProductPrice.id = `priceProduct-${product.id}`;
  cartProductPrice.innerText = `R$ ${(+product.preco)
    .toFixed(2)
    .replace(".", ",")}`;
  return cartProductPrice;
}

function createCartProductAmount(product) {
  const cartProductAmount = document.createElement("div");
  cartProductAmount.classList.add("cart__product-amount");

  const cartProductButtonMinus = createProductButtonMinus(product);
  const cartProductAmountNumber = createAmountNumber(product);
  const cartProductButtonPlus = createProductButtonPlus(product);

  cartProductAmount.append(
    cartProductButtonMinus,
    cartProductAmountNumber,
    cartProductButtonPlus,
  );
  return cartProductAmount;
}

function createProductButtonMinus(product) {
  const buttonMinus = document.createElement("button");
  buttonMinus.classList.add("button__amount", "button__minus");
  buttonMinus.id = `buttonMinus-${product.id}`;
  buttonMinus.innerText = "-";
  return buttonMinus;
}

function createAmountNumber(product) {
  const amountNumber = document.createElement("span");
  amountNumber.classList.add("cart__product-amount-number");
  amountNumber.innerText = "1";
  amountNumber.id = `amountProduct-${product.id}`;
  return amountNumber;
}

function createProductButtonPlus(product) {
  const buttonPlus = document.createElement("button");
  buttonPlus.classList.add("button__amount", "button__plus");
  buttonPlus.id = `buttonPlus-${product.id}`;
  buttonPlus.innerText = "+";
  return buttonPlus;
}

function createProductRemove(product) {
  const buttonRemove = document.createElement("button");
  buttonRemove.classList.add("button__remove", "fa-solid", "fa-trash");
  buttonRemove.id = `buttonRemove-${product.id}`;
  return buttonRemove;
}

function createTotalAmount() {
  const amountText = document.createElement("p");
  const cart = document.querySelector(".cart");
  amountText.innerText = "Quantidade";
  amountText.classList.add("cart__total", "cart__amount");

  const amountValue = document.createElement("span");
  amountValue.classList.add("cart__total--justify-end", "cart__total-amount");
  amountValue.innerText = 1;

  amountText.append(amountValue);
  cart.append(amountText);
  return amountText;
}

function createTotalPrice(product) {
  const priceText = document.createElement("p");
  const cart = document.querySelector(".cart");

  priceText.innerText = "Valor";
  priceText.classList.add("cart__total", "cart__price");

  const priceValue = document.createElement("span");
  priceValue.classList.add("cart__total--justify-end", "cart__total-price");
  priceValue.innerText = `R$ ${(+product.preco).toFixed(2).replace(".", ",")}`;

  priceText.append(priceValue);
  cart.append(priceText);

  return priceText;
}

function addOneToCartArray(product) {
  productsCart.some(({ id }) => id === product.id)
    ? updateArrayCart(product)
    : ((product.quantidadeAcumulada = 1),
      (product.precoAcumulado = product.preco),
      productsCart.push(product));

  return productsCart;
}

function updateArrayCart(product) {
  productsCart = productsCart.map((productCart) => {
    if (productCart.id === product.id) {
      productCart.quantidadeAcumulada++;
      productCart.precoAcumulado =
        productCart.preco * productCart.quantidadeAcumulada;
    }
    return productCart;
  });
  return productsCart;
}

function calculateTotalAmount(arrayCart) {
  return arrayCart.reduce(
    (acc, previous) => acc + previous.quantidadeAcumulada,
    0,
  );
}

function calculateTotalPrice(arrayCart) {
  const totalPrice = arrayCart.reduce(
    (acc, previous) => acc + +previous.precoAcumulado,
    0,
  );
  return totalPrice.toFixed(2).replace(".", ",");
}

function updateTotal(arrayCart) {
  const totalAmount = calculateTotalAmount(arrayCart);
  const totalPrice = calculateTotalPrice(arrayCart);

  const amount = document.querySelector(".cart__total-amount");
  amount.innerText = totalAmount;
  const price = document.querySelector(".cart__total-price");
  price.innerText = `R$ ${totalPrice}`;
}

function updateAmountAndPriceProductAndClassMinus(idProduct) {
  const amountAndPrice = pickAmountAndPriceProduct(idProduct);
  const amount = document.querySelector(`#amountProduct-${idProduct}`);
  amount.innerText = amountAndPrice[0];
  const price = document.querySelector(`#priceProduct-${idProduct}`);
  price.innerText = `R$ ${amountAndPrice[1]}`;

  tradeClassMinus(idProduct, amountAndPrice[0]);
}

function pickAmountAndPriceProduct(idProduct) {
  let productPrice = 0;
  let productAmount = 0;
  productsCart.forEach(({ id, quantidadeAcumulada, precoAcumulado }) => {
    if (id == idProduct) {
      productAmount = quantidadeAcumulada;
      productPrice = precoAcumulado.toFixed(2).replace(".", ",");
    }
  });
  return [productAmount, productPrice];
}

//* Adicionando e removendo produtos através do carrinho
function cartEvents() {
  const cart = document.querySelector(".cart__product-list");
  cart.addEventListener("click", removeCartProduct);
  cart.addEventListener("click", addProductToCart);
  cart.addEventListener("click", minusOneProductFromCart);
}
cartEvents();

function removeCartProduct(event) {
  if (event.target.className === "button__remove fa-solid fa-trash") {
    removeSelectedProduct(event.target.id);
  }
  if (productsCart.length === 0) {
    backToEmptyCart(event);
    cartDissapearsOnScreen();
  }
}

function removeSelectedProduct(buttonRemoveId) {
  const idNumber = buttonRemoveId.match(/\d/g)[0];
  productsCart = removeProductInCartArray(idNumber);
  removeProductElement(idNumber);
  updateTotal(productsCart);
}

function removeProductElement(idNumber) {
  const productList = document.querySelector(".cart__product-list");
  const productSelected = document.querySelector(`#cart__product-${idNumber}`);
  productList.removeChild(productSelected);
  return productList;
}

function removeProductInCartArray(idNumber) {
  return productsCart.filter(({ id }) => +id != +idNumber);
}

function backToEmptyCart(event) {
  const cartProductList = document.querySelector(".cart__product-list");
  if (event.target.className.includes("button__remove")) {
    deleteCartTotalDetails();
  }

  cartProductList.classList.remove("cart__product-list--scroll");
  cartProductList.classList.add("cart__product-list--center");
  cartProductList.innerHTML = `<img src="src/img/empty-cart.png"
						alt="empty-cart"
						class="cart__img-empty-cart"
					/>
					<p class="cart__text-empty">
						Por enquanto não temos produtos no carrinho
					</p>`;
  return cartProductList;
}

function cartDissapearsOnScreen() {
  const cart = document.querySelector(".cart");
  cart.classList.add("cart--hide");
  const showCase = document.querySelector(".product-list");
  showCase.classList.remove("product-list--cart-on");
}

function deleteCartTotalDetails() {
  const cart = document.querySelector(".cart");
  const cartTotalAmount = document.querySelector(".cart__amount");
  const cartTotalPrice = document.querySelector(".cart__price");
  cart.removeChild(cartTotalAmount);
  cart.removeChild(cartTotalPrice);
  return cart;
}

function minusOneProductFromCart(event) {
  if (event.target.className.includes("button__amount button__minus")) {
    const idProduct = event.target.id.match(/\d/g)[0];
    const productSelected = getProductById(idProduct);
    productsCart = minusOneFromCartArray(productSelected);
    updateAmountAndPriceProductAndClassMinus(idProduct);
    updateTotal(productsCart);
  }
}

function minusOneFromCartArray(product) {
  productsCart = productsCart.map((productCart) => {
    if (productCart.id === product.id && productCart.quantidadeAcumulada > 1) {
      productCart.quantidadeAcumulada--;
      productCart.precoAcumulado -= productCart.preco;
    }
    return productCart;
  });
  return productsCart;
}

function tradeClassMinus(idProduct, amountProduct) {
  const buttonSelected = document.querySelector(`#buttonMinus-${idProduct}`);

  if (amountProduct > 1) {
    buttonSelected.classList.add("button__minus--active");
  } else {
    buttonSelected.classList.remove("button__minus--active");
  }
  return buttonSelected;
}

function addCartToTheScreen(productsCart) {
  const cart = document.querySelector(".cart");
  if (productsCart.length > 0) {
    console.log(cart);
    cart.classList.remove("cart--hide");
  } else {
    cart.classList.add("cart--er");
  }
}

function menuCart() {
  const menuCart = document.querySelector(".menu__cart-button");
  menuCart.addEventListener("click", toogleCart);
}

function toogleCart() {
  const cart = document.querySelector(".cart");
  if (cart.classList.contains("cart--hide")) {
    cartAppearsOnScreen();
  } else {
    cartDissapearsOnScreen();
  }
}

menuCart();

const body = document.querySelector("body");
body.addEventListener("click", menuNumberProducts);

function menuNumberProducts() {
  const numberMenuCart = document.querySelector(".menu__cart-number");
  const cartAmount = calculateTotalAmount(productsCart);
  console.log(cartAmount);
  if (cartAmount > 0) {
    numberMenuCart.classList.add("menu__cart-number--active");
    numberMenuCart.innerText = cartAmount;
  } else {
    numberMenuCart.classList.remove("menu__cart-number--active");
    numberMenuCart.innerText = "";
  }
}
