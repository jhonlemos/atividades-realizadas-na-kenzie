class Pessoa{
    constructor(nome,sobrenome,nacimento,email,contato,telefone,cargo){
        this.nome = nome
        this.sobrenome = sobrenome
        this.nacimento = nacimento
        this.email = email
        this.contato = contato
        this.telefone = telefone
        this.cargo = cargo
    }

        static addStatico(nome,sobrenome,email,cargo){
            let lateral = document.querySelector("#lista-de-alunos")
            let li = document.createElement("li")
            let spanNome = document.createElement("span")
            let spanEmail = document.createElement("span")
            let spanCargo = document.createElement("span")
            spanNome.textContent = `${nome} ${sobrenome}`
            spanEmail.textContent = `${email}`
            spanCargo.textContent = `${cargo}`|| `Aluno`
            li.append(spanNome,spanEmail,spanCargo)
            lateral.append(li)
            atualizaTotal()
        }
    
}

let banco = []

const botaoCadastrar = document.querySelector("#register-button")

    botaoCadastrar.addEventListener("click",(evt)=>{
        CriaCadastro()
        stopDefAction(evt)
    })


function CriaCadastro(){
    let inpNome = document.getElementsByName("nome")[0].value
    let inpSobrenome = document.getElementsByName("sobrenome")[0].value
    let inpDataNascimento = document.getElementsByName("dataNascimento")[0].value
    let inpEmail = document.getElementsByName("email")[0].value
    let inpContato = document.getElementsByName("contato")[0].value
    let inpTelefone = document.getElementsByName("telefone")[0].value
    let inpCargo = document.getElementsByName("cargo")[0].value
    let testandoIdade = validaIdade(inpDataNascimento)
    let testandoEmail = validaEmail(inpEmail)
    let Usuario = new Pessoa(inpNome,inpSobrenome,inpDataNascimento,inpEmail,inpContato,inpTelefone,inpCargo)
    
    if(testandoIdade === true && inpDataNascimento != '' && testandoEmail === true){
        banco.push(Usuario)
        Pessoa.addStatico(inpNome,inpSobrenome,inpEmail,inpCargo)
    }
    else if( testandoEmail === false){
        aparecerPopUp2()
        fecharAuto2()
    }
    else{
        aparecerPopUp1()
        fecharAuto1() 
    }

console.log(testandoIdade, testandoEmail, inpDataNascimento);


}

function stopDefAction(evt) {
    evt.preventDefault();
}

const btnPesquisa = document.querySelector("#btn")
btnPesquisa.addEventListener("click",filtro)

function filtro(){
    let lateral = document.querySelector("#lista-de-alunos")
    const tipoFiltro = document.querySelector("#cargoOption").value
    lateral.innerHTML = ""
    if(tipoFiltro === "Todos"){
        banco.forEach(function(usuario){
            Pessoa.addStatico(usuario.nome,usuario.sobrenome,usuario.email,usuario.cargo)
        })
    }
    else{const filtrado = banco.filter(function(b){
        if(b.cargo == tipoFiltro){
            return b
        }
    })
        filtrado.forEach(function(usuario){
            Pessoa.addStatico(usuario.nome,usuario.sobrenome,usuario.email,usuario.cargo)
        })
}
      
}
function validaIdade(idade){
    let data = new Date()
    let anos = data.getFullYear()

    let idadeEmAnos = idade.split("-")[0]

    if((anos - idadeEmAnos) >= 18){
        return true
    }
    else{
        return false
    }
}

function validaEmail(email){
    let testeEmail = banco.find(function(elemento){return elemento.email === email})
    if(testeEmail === undefined && email !== ""){
        return true
    }
    else{return false}
}

let container = document.querySelector(".modal-conteiner")
let popUp1 = document.querySelector(".popUp1")
let butPop1 = document.querySelector(".buttonPop")
butPop1.addEventListener("click",fechar1)

let popUp2 = document.querySelector(".popUp2")
let butPop2 = document.querySelector(".buttonPop")
butPop2.addEventListener("click",fechar2)

function aparecerPopUp1(){
    container.style.display = "flex"
    popUp1.style.display = "flex"
}
function fechar1(){
    container.style.display = "none"
    popUp1.style.display = "none"
}
function fecharAuto1(){
    setTimeout(()=>{
        container.style.display = "none"
        popUp1.style.display = "none"
    },10000)
}
function aparecerPopUp2(){
    container.style.display = "flex"
    popUp2.style.display = "flex"
}
function fechar2(){
    container.style.display = "none"
    popUp2.style.display = "none"
}
function fecharAuto2(){
    setTimeout(()=>{
        container.style.display = "none"
        popUp2.style.display = "none"
    },10000)
}

    let totalAlunos = document.getElementById("total-alunos")

    function atualizaTotal(){
        let teste = document.querySelectorAll("li").length
        totalAlunos.innerText = `${banco.length}`
    }
    atualizaTotal()