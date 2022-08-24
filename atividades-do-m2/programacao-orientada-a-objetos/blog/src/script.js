import { GetUserController } from "./js/controllers/GetUserController.js";
import { GetPostController } from "./js/controllers/GetPostController.js";
import { CreatePostController } from "./js/controllers/CreatePostController.js";
import { Header } from "./js/components/Header.js";
import { Post } from "./js/components/Post.js";

const id = localStorage.getItem("@kenzie-blog:userId");
const token = localStorage.getItem("@kenzie-blog:userToken");

const form = document.querySelector(".container__form");
const btnLogout = document.querySelector(".header__btn");

btnLogout.addEventListener("click", () => logout());

form.addEventListener("submit", createPost);

async function createPost(event) {
  event.preventDefault();

  const textarea = document.querySelector(".container__textarea");
  const content = textarea.value;
  const createPostController = new CreatePostController();
  const response = await createPostController.handle(token, content);
  console.log(response);

  textarea.value = "";

  window.location.reload();
}

document.addEventListener("DOMContentLoaded", async () => {
  const getPostController = new GetPostController();
  const data = await getPostController.handle(token);

  if (!token || data.message) {
    alert("Token Invalido");
    logout();
  } else {
    const headerImg = document.querySelector(".header__img");
    const headerUserName = document.querySelector(".header__username");

    const getUserController = new GetUserController();
    const response = await getUserController.handle(id, token);

    Header.update(headerImg, headerUserName, response.avatarUrl, response.username);

    const containerContent = document.querySelector(".container__content__posts");

    Post.create(containerContent, data.data, id);
  }

});

function logout() {
  localStorage.clear();
  window.location.href = "src/pages/Login/index.html";
}
