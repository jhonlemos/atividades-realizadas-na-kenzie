import Formularios from "../controller/formulario.controller.js"

export default class Modais{
    static criar() {
        const body = document.querySelector('body')
        const modalCriar = document.createElement('div')
        const container = document.createElement('div')
        const modalInnerCriar = document.createElement('div')
        const modalCriarCabecalho = document.createElement('div')
        const modalCriarBotoes = document.createElement('div')
        const h2 = document.createElement('h2')
        const i = document.createElement('i')
        const btnSair = document.createElement('button')
        const form = document.createElement('form')
        const titulo = document.createElement('label')
        const textoTitulo = document.createElement('input')
        const descricao = document.createElement('label')
        const textoDescricao = document.createElement('textarea')
        const categoria = document.createElement('label')
        const selecao = document.createElement('select')
        const casa = document.createElement('option')
        const estudos = document.createElement('option')
        const lazer = document.createElement('option')
        const trabalho = document.createElement('option')
        const saude = document.createElement('option')
        const btnInserir = document.createElement('button')

        h2.innerText = 'Criar hábito'
        btnSair.innerText = 'X'
        titulo.innerText = 'Título'
        descricao.innerText = 'Descrição'
        categoria.innerText = 'Categoria'
        casa.innerText = '🏠 Casa'
        estudos.innerText = '📑 Estudos'
        lazer.innerText = '🧩 Lazer'
        trabalho.innerText = '💼 Trabalho'
        saude.innerText = '💙 Saúde'
        btnInserir.innerText = 'Inserir'

        textoTitulo.type = 'text'
        textoDescricao.cols = '30'
        textoDescricao.rows = '10'
        casa.value = 'Casa'
        estudos.value = 'Estudos'
        lazer.value = 'Lazer'
        trabalho.value = 'Trabalho'
        saude.value = 'saude'

        modalCriar.classList.add('modal__criar', 'fadeIn')
        container.classList.add('container')
        modalInnerCriar.classList.add('modal__criar__inner', 'fadeInUp')
        modalCriarCabecalho.classList.add('modal__criar__cabecalho')
        i.classList.add('fa-solid', 'fa-file-circle-plus')
        btnSair.classList.add('button__criar__sair')
        form.classList.add('modal__criar__form')
        textoTitulo.classList.add('modal__criar__titulo')
        textoDescricao.classList.add('modal__criar__descricao')
        selecao.classList.add('modal__criar__categoria')
        modalCriarBotoes.classList.add('modal__criar__botoes')
        btnInserir.classList.add('modal__botao__inserir')

        h2.appendChild(i)
        modalCriarCabecalho.append(h2, btnSair)
        selecao.append(casa, estudos, lazer, trabalho, saude)
        modalCriarBotoes.append(btnInserir)
        form.append(titulo, textoTitulo, descricao, textoDescricao, categoria, selecao, modalCriarBotoes)
        modalInnerCriar.append(modalCriarCabecalho, form)
        container.appendChild(modalInnerCriar)
        modalCriar.appendChild(container)
        body.appendChild(modalCriar)
    }

    static editar(id){
        const body = document.querySelector("body")
        const modalEditar = document.createElement("div")
        const container = document.createElement("div")
        const modalInnerEditar = document.createElement("div")
        const modalEditarCabecalho = document.createElement("div")
        const modalEditarStatus = document.createElement("div")
        const modalEditarBotoes = document.createElement("div")
        const h2 = document.createElement("h2")
        const i = document.createElement("i")
        const btnSair = document.createElement("button")
        const form = document.createElement("form")
        const titulo = document.createElement("label")
        const textoTitulo = document.createElement("input")
        const descricao = document.createElement("label")
        const textoDescricao = document.createElement("textarea")
        const categoria = document.createElement("label")
        const selecao = document.createElement("select")
        const casa = document.createElement("option")
        const estudos = document.createElement("option")
        const lazer = document.createElement("option")
        const trabalho = document.createElement("option")
        const saude = document.createElement("option")
        const status = document.createElement("label")
        const check = document.createElement("input")
        const btnExcluir = document.createElement("button")
        const btnSalvar = document.createElement("button")
        const span = document.createElement("span")

        h2.innerText = " Editar hábito"
        btnSair.innerText = "X"
        titulo.innerText = "Título"
        descricao.innerText = "Descrição"
        categoria.innerText = "Categoria"
        casa.innerText = '🏠 Casa'
        estudos.innerText = '📑 Estudos'
        lazer.innerText = '🧩 Lazer'
        trabalho.innerText = '💼 Trabalho'
        saude.innerText = '💙 Saúde'
        status.innerText = "Status"
        btnExcluir.innerText = "Excluir"
        btnSalvar.innerText = "Salvar alterações"

        textoTitulo.type = "text"
        textoDescricao.cols = "30"
        textoDescricao.rows = "10"
        casa.value = "casa"
        estudos.value = "estudos"
        lazer.value = "lazer"
        trabalho.value = "trabalho"
        saude.value = "saude"
        check.type = "checkbox"

        modalEditar.classList.add("modal_editar", "fadeIn")
        container.classList.add("container")
        modalInnerEditar.classList.add("modal_inner_editar", "fadeInUp")
        modalEditarCabecalho.classList.add("modal_editar_cabecalho")
        i.classList.add("fa-solid", "fa-pen-to-square")
        btnSair.classList.add("button_editar_sair")
        form.classList.add("modal_editar_form")
        textoTitulo.classList.add("modal_titulo_editar")
        textoDescricao.classList.add("modal_descricao_editar")
        selecao.classList.add("modal_categoria_editar")
        modalEditarStatus.classList.add("modal_editar_status")
        modalEditarBotoes.classList.add("modal_editar_botoes")
        btnExcluir.classList.add("button_excluir")
        btnSalvar.classList.add("button_salvar")
        

        btnExcluir.addEventListener("click", (e)=>{
            e.preventDefault()
            const modal = document.querySelector(".modal_editar")
            modal.remove()
            
            this.excluir()
            Formularios.requisicaoExcluir(id)
        })

        h2.appendChild(i)
        modalEditarCabecalho.append(h2, btnSair)
        selecao.append(casa, estudos, lazer, trabalho, saude)
        modalEditarStatus.append(status, check)
        modalEditarBotoes.append(btnExcluir, btnSalvar)
        form.append(titulo, textoTitulo, descricao, textoDescricao, categoria, selecao, modalEditarStatus, modalEditarBotoes)
        modalInnerEditar.append(modalEditarCabecalho, form)
        container.appendChild(modalInnerEditar)
        modalEditar.appendChild(container)
        body.appendChild(modalEditar)
    }

    static excluir() {
        const body = document.querySelector('body')
        const modalExcluir = document.createElement('div')
        const container = document.createElement('div')
        const modalExcluirInner = document.createElement('div')
        const modalExcluirCabecalho = document.createElement('div')
        const modalExcluirDiv = document.createElement('div')
        const modalExcluirBotoes = document.createElement('div')
        const h2 = document.createElement('h2')
        const i = document.createElement('i')
        const btnSair = document.createElement('button')
        const h3 = document.createElement('h3')
        const modalExcluirTexto = document.createElement('p')
        const btnCancelar = document.createElement('button')
        const btnExcluir = document.createElement('button')

        h2.innerText = 'Excluir hábito'
        btnSair.innerText = 'X'
        h3.innerText = 'Certeza que deseja excluir este hábito?'
        modalExcluirTexto.innerText = 'Após executar essa ação não será possível desfazer'
        btnCancelar.innerText = 'Cancelar'
        btnExcluir.innerText = 'Sim, excluir este hábito'

        modalExcluir.classList.add('modal__excluir')
        container.classList.add('container')
        modalExcluirInner.classList.add('modal__excluir__inner', 'fadeInUp')
        modalExcluirCabecalho.classList.add('modal__excluir__cabecalho')
        i.classList.add('fa-solid', 'fa-pen-to-square')
        btnSair.classList.add('button__excluir__sair')
        modalExcluirBotoes.classList.add('modal__excluir__botoes')
        btnCancelar.classList.add('modal__botao__cancelar')
        btnExcluir.classList.add('modal__botao__excluir')

        h2.appendChild(i)
        modalExcluirCabecalho.append(h2, btnSair)
        modalExcluirDiv.append(h3, modalExcluirTexto)
        modalExcluirBotoes.append(btnCancelar, btnExcluir)
        modalExcluirInner.append(modalExcluirCabecalho, modalExcluirDiv, modalExcluirBotoes)
        container.appendChild(modalExcluirInner)
        modalExcluir.appendChild(container)
        body.appendChild(modalExcluir)
    }

    static perfil() {
        const body = document.querySelector("body")
        const modalPerfil = document.createElement("div")
        const container = document.createElement("div")
        const modalInnerPerfil = document.createElement("div")
        const modalPerfilCabecalho = document.createElement("div")
        const h2 = document.createElement("h2")
        const i = document.createElement("i")
        const btnSair = document.createElement("button")
        const form = document.createElement("form")
        const titulo = document.createElement("label")
        const textoTitulo = document.createElement("input")
        const btnSalvar = document.createElement("button")
        const span = document.createElement("span")

        h2.innerText = "Editar perfil"
        btnSair.innerText = "X"
        titulo.innerText = "URL da imagem do perfil"
        btnSalvar.innerText = "Salvar alterações"

        textoTitulo.type = "text"

        modalPerfil.classList.add("modal_perfil", "fadeIn")
        container.classList.add("container")
        modalInnerPerfil.classList.add("modal_inner_perfil", "fadeInUp")
        modalPerfilCabecalho.classList.add("modal_perfil_cabecalho")
        i.classList.add("fa-solid", "fa-pen-to-square")
        btnSair.classList.add("button_perfil_sair")
        form.classList.add("modal_perfil_form")
        textoTitulo.classList.add("modal_titulo_perfil")
        btnSalvar.classList.add("button_salvar_perfil")
        span.classList.add("verifica_perfil")

        h2.appendChild(i)
        modalPerfilCabecalho.append(h2, btnSair)
        form.append(titulo, textoTitulo, btnSalvar)
        modalInnerPerfil.append(modalPerfilCabecalho, form, span)
        container.appendChild(modalInnerPerfil)
        modalPerfil.appendChild(container)
        body.appendChild(modalPerfil)
    }
}