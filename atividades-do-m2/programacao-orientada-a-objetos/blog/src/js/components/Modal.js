import { DeletePostController } from "../controllers/DeletePostController.js";
import { UpdatePostController } from "../controllers/UpdatePostController.js";

export class Modal {
  static update(idPost, userToken) {
    const container = document.querySelector(".container");
    const divModal = document.createElement("div");
    divModal.classList.add("modal");

    const divInner = document.createElement("div");
    divInner.classList.add("modal__inner");

    const h3 = document.createElement("h3");
    h3.innerText = "Altere seu post";

    const form = document.createElement("form");
    const textarea = document.createElement("textarea");
    textarea.classList.add("modal__textarea");
    textarea.name = "content";

    const buttonCancelar = this.#createButtonCancelar(divModal);

    const buttonAlterar = document.createElement("button");
    buttonAlterar.classList.add("modal__btn");
    buttonAlterar.innerText = "Alterar";
    buttonAlterar.type = "submit";

    buttonAlterar.addEventListener("click", async (event) => {
      event.preventDefault();
      const newContent = textarea.value;
      const updatePostController = new UpdatePostController();
      const response = await updatePostController.handle(idPost, newContent, userToken);

      divModal.remove();
      window.location.reload();
    });

    form.append(textarea, buttonCancelar, buttonAlterar);
    divInner.append(h3, form);
    divModal.append(divInner);

    container.insertAdjacentElement("afterend", divModal);
  }

  static confirmation(idPost, token) {
    const container = document.querySelector(".container");
    const divModal = document.createElement("div");
    divModal.classList.add("modal");

    const divInner = document.createElement("div");
    divInner.classList.add("modal__inner");

    const h3 = document.createElement("h3");
    h3.innerText = "Tem certeza de que deseja excluir este post?";

    const form = document.createElement("form");
    const buttonCancelar = this.#createButtonCancelar(divModal);

    const buttonDeletar = document.createElement("button");
    buttonDeletar.classList.add("modal__btn--deletar");
    buttonDeletar.innerText = "Deletar";

    buttonDeletar.addEventListener("click", async (event) => {
      event.preventDefault();

      const deletePostController = new DeletePostController();
      await deletePostController.handle(idPost, token);

      divModal.remove();
      alert("Seu post foi removido com sucesso");
      window.location.reload();
    });

    form.append(buttonCancelar, buttonDeletar);
    divInner.append(h3, form);
    divModal.append(divInner);

    container.insertAdjacentElement("afterend", divModal);
  }

  static #createButtonCancelar(divModal) {
    const buttonCancelar = document.createElement("button");
    buttonCancelar.classList.add("modal__btn--cancelar");
    buttonCancelar.innerText = "Cancelar";

    buttonCancelar.addEventListener("click", (event) => {
      event.preventDefault();

      divModal.remove();
    });

    return buttonCancelar;
  }
}
