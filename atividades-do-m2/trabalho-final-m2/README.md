# 🏆 Trabalho de conclusão de módulo

Como já foi informado, você e sua equipe irão desenvolver um projeto durante essa semana. Colocando em prática os principais conceitos vistos até o momento em seu projeto. Esses conceitos são:

## Principais conceitos

- OOP

  1.  Sintaxe de classe
  2.  Classes estáticas

- Spread Operator
- Desconstrução
- Consumo de API;
- LocalStorage.
- Manipulação dos elementos com o DOM

## Requisitos técnicos/funcionalidades

- **Mobile first:**

  1.  Tela de login deve ser feita em mobile first
  2.  Tela homepage deve ser feita em mobile first

- **Tela de Login:**

  1.  Deve ter aparência semelhante ao figma
  2.  Botão "Entrar" deve percorrer o formulário e realizar a requisição de login
  3.  Caso a requisição esteja correta deve adicionar o token e dados do usuário no localstorage
  4.  Redirecionar para a homepage caso o email e senha estejam corretos
  5.  Retorno visual caso o usuário passar dados inválidos no input

      [documentação input invalid](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid)

- **Tela Homepage:**

  1.  Deve ter aparência semelhante ao figma
  2.  Realizar a requisição de pegar os hábitos
  3.  Deve renderizar o nome e imagem do usuário (será necessário realizar uma requisição para pegar os dados do usuário)
  4.  Ao clicar na foto do usuário deve abrir um dropDownMenu com os as funcionalidades de editar perfil e sair/logout

      [documentação dropDownMenu](https://www.w3schools.com/css/css_dropdowns.asp)

  5.  No dropDownMenu na opção de editar perfil deve abrir menu de edição do usuário
  6.  No dropDownMenu na opção de sair/logout deve apagar os dados do localstorage e redirecionar o usuário para a página de login
  7.  Adicionar a lista de habitos a página
  8.  Botão de "Concluídos" deve exibir apenas os hábitos concluídos
  9.  Botão "Todos" deve exibir todos os hábitos do usuário
  10. Botão "Criar" deve abrir modal para criar novos hábitos

  11. "..." deve abrir modal de atualização de hábitos

  12. Dentro do modal de atualização de hábitos também deve ter a opção de excluir que realiza a requisição de deletar hábito

  13. Checkbox deve realizar uma requisição de atualizar o hábito o tornando concluído ou não concluído

- **Modais:**

1.  Devem ter a aparência semelhante ao figma
2.  Os modais devem ser construídos com formulários
3.  Deve capturar as informações do formulário
4.  Realizar as requisições de acordo com o tipo de formulário, criar, atualizar ou deletar
5.  Retorno visual caso o usuário passar dados inválidos no input

    [documentação input invalid](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid)

## Extras:

- Animação nos botões
- Animação durante as transições de tela
- Animação durante o popup dos modais
- Padronização nos nomes das branches
- Os commits seguem um padrão

  [Padrão de commits Coventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/)

- Estilização da checkbox
- Popup de erro para as requisições

## Layout - Kenzie Habit

Você e sua equipe deverão seguir o layout proposto, [Clique aqui](https://www.figma.com/file/3hcoHtXlfxGQjUhd4tb6G8/M2-CAPSTONE?node-id=2%3A232) para acessar o figma!

## API - Kenzie Habits

Você deverá seguir os padrões estabelecidos pela API, para realizar as requisições [Clique aqui](https://kenzie-academy-brasil-developers.github.io/habits-kenzie-doc/)

## Pra equipe não se perder as requisições:

import User from "./user.controller.js";
import Habit from "./habit.controller.js";

// const login = await User.userLogin({
// "email": "grupo5Heric@mail.com",
// "password": "743772e4a7c6961978fb32c684d4ea0b"
// })

// console.log(login)

// const updateUser = await User.userUpdate("https://www.google.com/images/Heric")

// console.log(updateUser)

// const createHabit = await Habit.createHabit({
// "habit_title": "bater ponto corretamente",
// "habit_description": "bater ponto todos os dias nos horários corretos",
// "habit_category": "Saude"
// })

// const category = await Habit.categoryHabit("saude")
// console.log(category)

// const updateHabit = await Habit.updateHabit({
// "habit_title": "Jogar volei aos domingos no parque Marina",
// "habit_description": "Ir aos domingos com a família no parque Marina e aproveitar para jogar vôlei de areia",
// "habit_category": "lazer"
// }, 225)

// console.log(updateHabit)

// const complete = await Habit.completeHabit(225)
// console.log(complete)

// const deleta = await Habit.deleteHabit(245)
// console.log(deleta)

// const allHabit = await Habit.allHabit()
// console.log(allHabit)
