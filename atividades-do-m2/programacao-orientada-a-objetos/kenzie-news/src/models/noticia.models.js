class Noticia {
    constructor(titulo, imagem, resumo, fonte, categoria) {
        this.titulo = titulo;
        this.imagem = imagem;
        this.resumo = resumo;
        this.fonte = fonte;
        this.categoria = categoria;
    }

    cardBanner() {
        const divImg = document.createElement("div")
        const divTexto = document.createElement("div")
        const article = document.createElement("article");
        const imagem = document.createElement("img")
        const categoria = document.createElement("a");
        const titulo = document.createElement("h3");
        const resumo = document.createElement("p")
        const fonte = document.createElement("p")

        divImg.classList.add("banner-img")
        divTexto.classList.add("banner-texto")

        categoria.innerText = this.categoria
        categoria.href = "#"
        categoria.classList.add("banner-button")

        imagem.src = this.imagem

        titulo.innerText = this.titulo;

        resumo.innerText = this.resumo;
        resumo.classList.add("banner-resumo")

        fonte.innerText = `Fonte: ${this.fonte}`;
        fonte.classList.add("banner-fonte")

        divImg.append(imagem);
        divTexto.append(categoria, titulo, resumo, fonte)
        article.append(divTexto, divImg)

        return article
    }

    cardNoticia() {
        const divImg = document.createElement("div")
        const divTexto = document.createElement("div")
        const article = document.createElement("article");
        const categoria = document.createElement("a");
        const imagem = document.createElement("img")
        const titulo = document.createElement("h3");
        const resumo = document.createElement("p")
        const fonte = document.createElement("p")

        divImg.classList.add("div-img")
        divTexto.classList.add("div-texto")

        categoria.innerText = this.categoria
        categoria.href = "#"
        categoria.classList.add("button-categoria")

        imagem.src = this.imagem

        titulo.innerText = this.titulo;

        resumo.innerText = this.resumo;
        resumo.classList.add("resumo")

        fonte.innerText = `Fonte: ${this.fonte}`;
        fonte.classList.add("fonte")

        divImg.append(imagem);
        divTexto.append(categoria, titulo, resumo, fonte)
        article.append(divImg, divTexto)

        return article
    }
}

export default Noticia