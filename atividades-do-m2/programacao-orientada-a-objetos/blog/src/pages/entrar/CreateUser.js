import { CreateUserController } from "../../js/controllers/CreateUserController.js";

const form = document.querySelector(".container__form");

form.addEventListener("submit", createUser);

async function createUser(event) {
  event.preventDefault();

  const data = new FormData(this);

  const username = data.get("username");
  const email = data.get("email");
  const avatarUrl = data.get("avatarUrl");
  const password = data.get("password");

  const createUserController = new CreateUserController();
  const response = await createUserController.handle(username, email, avatarUrl, password);
  if (response.message) {
    const containerMenssagem = document.querySelector(".container__menssagem");

    containerMenssagem.innerText = response.message;
  }

  if (response.id) {
    window.location.href = "../Login/index.html";
  }
}
