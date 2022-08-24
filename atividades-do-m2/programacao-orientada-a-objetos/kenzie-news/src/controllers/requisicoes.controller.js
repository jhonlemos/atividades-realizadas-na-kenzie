class Request {
    static base_url = 'https://kenzie-news-api.herokuapp.com/api/news'

    static async requisicao() {
        const dados = await fetch(this.base_url)
            .then(response => response.json())
            .then(data => data)
            .catch((err) => {
                console.log(err)
            })

        return dados
    }
}

export default Request