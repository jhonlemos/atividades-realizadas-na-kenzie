import Noticia from "../models/noticia.models.js"
import Request from "./requisicoes.controller.js"


class IndexController {

    static async listarNoticias() {
        const divNoticias = document.querySelector(".content-noticias")
        const divBanner = document.querySelector(".box-noticia-principal")

        divNoticias.innerHTML = ""
        divBanner.innerHTML = ""

        const bancoDeDados = await Request.requisicao()

        const section = document.createElement("section")

        bancoDeDados.forEach((noticia) => {

            if (noticia.id === 3) {
                const novoBanner = new Noticia(noticia.titulo, noticia.imagem, noticia.resumo, noticia.fonte, noticia.categoria)

                const banner = novoBanner.cardBanner();
                divBanner.append(banner)
            } else {

                const novaNoticia = new Noticia(noticia.titulo, noticia.imagem, noticia.resumo, noticia.fonte, noticia.categoria)

                const cardNoticia = novaNoticia.cardNoticia();
                section.append(cardNoticia);
                divNoticias.append(section)
            }

        })


    }
}

export default IndexController