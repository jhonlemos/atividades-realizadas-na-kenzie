const list = document.getElementById('cardsList');

chamarAPI().then((data) => {
  // console.log(data)
  const dadosLimpos = limparDados(data);
  const dadosOrdenados = ordenarDados(dadosLimpos);

  dadosOrdenados.forEach((foguete) => {
    list.appendChild(criarTemplate(foguete));
  });
  //const foguetesAtivos = filtrar(dadosOrdenados, true);
  //const foguetesInativos = filtrar(dadosOrdenados, false);
});

function limparDados(dadosFoguetes) {
  return dadosFoguetes.map((elem, index, array) => {
    const {
      id,
      active,
      cost_per_launch,
      description,
      first_flight,
      rocket_name,
      success_rate_pct,
      wikipedia,
      stages,
      company,
      boosters,
      flickr_images,
    } = elem;

    const resultado = {
      id,
      active,
      cost_per_launch,
      description,
      first_flight,
      rocket_name,
      success_rate_pct,
      wikipedia,
      stages,
      company,
      boosters,
      flickr_images,
    };

    return resultado;
  });
}

function ordenarDados(dadosFoguetes) {
  return dadosFoguetes.sort(
    (foguete1, foguete2) => foguete1.cost_per_launch - foguete2.cost_per_launch
  );
}

function filtrar(dadosFoguetes, ativo) {
  // return dadosFoguetes.filter(({ active }) => active === ativo);
  return dadosFoguetes.filter((foguete) => foguete.active === ativo);
}

function criarTemplate(foguete) {
  const cardBox = document.createElement('div');
  cardBox.className = 'card box__card';

  const cardContent = document.createElement('div');
  cardContent.className = 'card__content';

  cardBox.appendChild(cardContent);

  const cardImg = document.createElement('img');
  cardImg.className = 'card__img';
  cardImg.src = foguete.flickr_images[0];
  cardImg.alt = foguete.rocket_name;

  const cardInfoContainer = document.createElement('div');
  cardInfoContainer.classList.add('card__info')

  const infoList = cardInfoTemplate(foguete);
  cardInfoContainer.appendChild(infoList);

  const cardButton = document.createElement('button');
  cardButton.className = 'card__button';

  const cardLink = document.createElement('a');
  cardLink.className = 'card__link';
  cardLink.href = foguete.wikipedia;
  cardLink.innerText = 'MAIS DETALHES';
  cardLink.target = '_blank';

  cardButton.appendChild(cardLink);

  cardContent.append(cardImg, cardInfoContainer, cardButton);

  return cardBox;
}

function cardInfoTemplate(foguete) {
  const infoList = document.createElement('ul');
  infoList.className = 'card__list list';

  const { id, description, wikipedia, flickr_images, ...restanteFoguete } =
    foguete;

  for (const chave in restanteFoguete) {
    const li = document.createElement('li');
    li.className = 'card__info--item';

    const p = document.createElement('p');

    const span = document.createElement('span');
    span.className = 'list__value';

    p.innerText = chave;
    span.innerText = restanteFoguete[chave];

    li.append(p, span);
    infoList.appendChild(li);
  }

  return infoList;
}

function menuMobile() {
  const menuMobile = document.getElementById('headerMobile')
  const menuMobileClasses = menuMobile.classList

  if(menuMobileClasses.contains('show')) {
    menuMobileClasses.remove('show')
    menuMobileClasses.add('hide')
  } else {
    if(menuMobileClasses.contains('hide')) {
      menuMobileClasses.remove('hide')
    }
    menuMobileClasses.add('show')
  }
}

function adicionaEventoMenu() {
  const botaoMenu = document.getElementById('headerMobileIcon')

  botaoMenu.addEventListener('click', menuMobile)
}

adicionaEventoMenu()