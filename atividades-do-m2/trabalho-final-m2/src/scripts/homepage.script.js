import Modais from "../models/modal.models.js"
import Formularios from "../controller/formulario.controller.js"
import cards from "../models/habits.models.js"
import User from "../controller/user.controller.js"
import Habit from "../controller/habit.controller.js"

cards.listarHabitos()

class homePage {
    static botaoCriar() {
        const btn = document.querySelector(".filtro_nav button")
        btn.addEventListener("click", () => {
            Modais.criar()
            Formularios.requisicaoCriar()
        })
    }

    static cabecalho() {
        const user = JSON.parse(localStorage.getItem("@kenzie-habits:user"))
        const img = document.querySelector(".perfil_div img")
        const img2 = document.querySelector("header img")
        const h3 = document.querySelector(".perfil_div h3")


        img.src = user.usr_image
        img2.src = user.usr_image
        h3.innerText = user.usr_name
    }

    static logout() {
        const sair = document.querySelector(".sair_de_tudo");
        sair.addEventListener("click", () => {
            localStorage.removeItem("@kenzie-habits:user");
            localStorage.removeItem("@kenzie-habits:token");
            window.location.href = "../../index.html";
        });
    }

    static perfil(){
        const botao = document.querySelector(".editar_perfil")
        botao.addEventListener("click", (e)=>{
            e.preventDefault()
            Modais.perfil()
            Formularios.requisicoesPerfil()
        })
    }

    static filtro(){
        const todos = document.querySelector(".filtro_todos")
        const concluido = document.querySelector(".filtro_concluido")
        const ul = document.querySelector(".div_ul")

        todos.addEventListener("click", ()=>{
            ul.innerHTML = ""
            cards.listarHabitos()
        })

        concluido.addEventListener("click", async ()=>{
            ul.innerHTML = ""
            const resultado = await Habit.allHabit()
            const filtrados = resultado.filter(elem=>elem.habit_status)
            console.log(filtrados)
            const cartão = filtrados.forEach(elem =>{
                const card = new cards(elem.habit_id, elem.habit_title, elem.habit_description, elem.habit_category, elem.habit_status)
                card.createCard()
            })
        })
    }
}

homePage.botaoCriar()
homePage.cabecalho()
homePage.logout()
homePage.perfil()
homePage.filtro()