import { Modal } from "./Modal.js";

export class Post {
  static create(parent, postList, id) {
    postList.forEach((post) => {
      const DonoDoPost = post.user.id;

      const li = document.createElement("li");
      li.classList.add("container__content__post");

      const figure = document.createElement("figure");
      const img = document.createElement("img");
      img.classList.add("container__content__img");
      img.src = post.user.avatarUrl;

      const div = document.createElement("div");
      div.classList.add("container__content__principal");

      const h3 = document.createElement("h3");
      h3.classList.add("container__content__username");
      h3.innerText = post.user.username;

      const p = document.createElement("p");
      p.classList.add("container__content__text");
      p.innerText = post.content;

      const divEdit = document.createElement("div");
      divEdit.classList.add("container__content__edicao");

      if (Number(id) === DonoDoPost) {
        const spanEditar = document.createElement("span");
        spanEditar.classList.add("container__content__editar");
        spanEditar.innerText = "Editar";
        spanEditar.addEventListener("click", () => {
          const token = localStorage.getItem("@kenzie-blog:userToken");
          Modal.update(post.id, token);
        });

        const spanApagar = document.createElement("span");
        spanApagar.classList.add("container__content__apagar");
        spanApagar.innerText = "Apagar";

        spanApagar.addEventListener("click", () => {
          const token = localStorage.getItem("@kenzie-blog:userToken");
          Modal.confirmation(post.id, token);
        });

        divEdit.append(spanEditar, spanApagar);
      }

      const spanData = document.createElement("span");
      spanData.classList.add("container__content__data");
      spanData.innerText = this.#formatDate(post.createdAt);

      figure.append(img);
      div.append(h3, p);
      divEdit.append(spanData);

      li.append(figure, div, divEdit);
      parent.append(li);
    });
  }

  static #formatDate(date) {
    const onlyDate = date.split("T")[0];

    const formattedDate = onlyDate.split("-").reverse().join("/");

    return formattedDate;
  }
}
