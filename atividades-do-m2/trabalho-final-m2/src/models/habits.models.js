import Habit from "../controller/habit.controller.js";
import Modais from "./modal.models.js";
import Formularios from "../controller/formulario.controller.js";

export default class cards {
    constructor(id, title, description, category, status) {
        this.id = id
        this.title = title
        this.description = description
        this.categoria = category
        this.status = status
    }
    static async listarHabitos() {
        const habito = await Habit.allHabit()
        habito.forEach(element => {
            const card = new cards(element.habit_id, element.habit_title, element.habit_description, element.habit_category, element.habit_status)
            card.createCard()
        })
    }

    createCard() {
        const maindDiv = document.querySelector('.div_ul')
        const container = document.createElement('li')
        const status = document.createElement('input')
        const title = document.createElement('p')
        const descricao = document.createElement('p')
        const divCategoria = document.createElement('div')
        const categoria = document.createElement('span')
        const editButton = document.createElement('button')
        const i = document.createElement('i')
        const divStatus = document.createElement("div")
        const span = document.createElement("span")

        container.classList.add('conteudo_li')
        container.classList.add('fadeInUp')
        status.classList.add('checkbox')
        title.classList.add('conteudo_titulo')
        descricao.classList.add('conteudo_descricao')
        divCategoria.classList.add('conteudo_categoria')
        editButton.classList.add('conteudo_editar')
        i.classList.add('fa-solid', 'fa-ellipsis')
        divStatus.classList.add("container_status")

        title.innerText = this.title
        descricao.innerText = this.description
        status.type = 'checkbox'

        if(this.status === true){
            status.checked = "true"
            container.style.backgroundColor = '#E9ECEF'
            title.style.textDecoration = 'line-through'
        }
        
        if(this.categoria === 'saude'){
            this.categoria = 'saúde'
        }
        categoria.innerText = this.categoria

        editButton.addEventListener("click", () => {
            Modais.editar(this.id)
            Formularios.requisicaoEditar(this.id)
        })

        // Evento de Check na tarefa
        status.addEventListener("click", async () => {
            if (status.checked) {
                await Habit.completeHabit(this.id)
                container.style.backgroundColor = '#E9ECEF'
                title.style.textDecoration = 'line-through'
            } else if (!status.checked) {
                await Habit.createHabit({
                    "habit_title": this.title,
                    "habit_description": this.description,
                    "habit_category": this.categoria
                })
                await Habit.deleteHabit(this.id)
                window.location.reload(true)
            }
        })
        divStatus.append(status)
        editButton.append(i)
        divCategoria.append(categoria)
        container.append(divStatus, title, descricao, divCategoria, editButton)
        maindDiv.append(container)
    }
}
