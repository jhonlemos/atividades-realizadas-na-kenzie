import { AuthenticateUserController } from "../../js/controllers/AuthenticateUserController.js";

const form = document.querySelector(".container__form");

form.addEventListener("submit", Authenticate);

async function Authenticate(event) {
  event.preventDefault();

  const data = new FormData(this);
  const nome = data.get("email");
  const password = data.get("password");

  const authenticateUserController = new AuthenticateUserController();
  const response = await authenticateUserController.handle(nome, password);

  if (response.message) {
    const containerMenssagem = document.querySelector(".container__menssagem");

    containerMenssagem.innerText = response.message;
  }
  if (response.token) {
    window.location.href = "../../../index.html";
  }
}
