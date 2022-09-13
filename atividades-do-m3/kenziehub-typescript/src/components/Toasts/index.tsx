import { toast } from "react-toastify";

function loginToast() {
  toast.success("Bem vindo(a)! 😎", {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
}

function loginErrorToast() {
  toast.error("Email ou senha inválida... 😥", {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
}

function logOutToast() {
  toast.success("Até mais! 😘", {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
}

function registerToast() {
  toast.success("Cadastro concluído, faça o login! 😎", {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
}

function registerErrorToast() {
  toast.error("Email já cadastrado... 😥", {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
}

function createToast() {
  toast.success("Tech criada com sucesso! 🤩", {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
}

function createErrorToast() {
  toast.error("Uma tech com este nome já foi criada 🙃", {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
}

function editToast() {
  toast.success("Status da tach atualizado! 😆", {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
}

function deleteToast() {
  toast.success("Tech deletada... 😥", {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
}
export {
  registerToast,
  registerErrorToast,
  loginToast,
  loginErrorToast,
  logOutToast,
  createToast,
  createErrorToast,
  editToast,
  deleteToast,
};
