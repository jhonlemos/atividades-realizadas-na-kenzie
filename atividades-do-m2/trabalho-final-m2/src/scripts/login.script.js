import User from "../controller/user.controller.js";

class Login {
    static async fazerLogin() {
        const user = document.getElementById("username-input")
        const senha = document.getElementById("password-input")
        const btn = document.querySelector("button")
        const span = document.querySelector(".login__formulario span")

        btn.addEventListener("click", async (e) => {
            e.preventDefault()
            const resposta = await User.userLogin({
                "email": user.value,
                "password": senha.value
            })
            if (resposta.message != undefined) {
                user.classList.add("invalid")
                senha.classList.add("invalid")
                if (resposta.message === "email obrigatório") {
                    span.innerText = "Email obrigatório"
                } else if (resposta.message === "campo password obrigatório") {
                    span.innerText = "Campo password obrigatório"
                } else {
                    span.innerText = resposta.message
                }
            } else {
                localStorage.setItem("@kenzie-habits:user", JSON.stringify(resposta.response))
                localStorage.setItem("@kenzie-habits:token", JSON.stringify(resposta.token))
                window.location.href = "./src/views/homepage.html"
            }
        })
    }
}

Login.fazerLogin()